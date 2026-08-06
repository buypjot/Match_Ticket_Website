require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Set up PostgreSQL connection using DATABASE_URL from .env
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // ssl not supported by target server
});

// Helper function to map amenities (json/string to array)
const parseAmenities = (amenitiesData) => {
  if (!amenitiesData) return [];
  if (Array.isArray(amenitiesData)) return amenitiesData;
  if (typeof amenitiesData === 'string') {
    try {
      return JSON.parse(amenitiesData);
    } catch (e) {
      return amenitiesData.split(',').map(s => s.trim());
    }
  }
  return [];
}

// API Endpoint to fetch turfs
app.get('/api/turfs', async (req, res) => {
  try {
    const query = `
      SELECT 
        p.id,
        p.name AS turf_name,
        c.city,
        c.verification_status,
        p.rate_per_hour,
        p.amenities,
        p.ground_type,
        p.playground_image_url,
        c.public_url_slug
      FROM playground_grounds p
      JOIN customers c ON p.customer_id = c.id
      WHERE p.is_active = true
    `;
    const result = await pool.query(query);

    // Transform data to match frontend TURFS format
    const formattedTurfs = result.rows.map(row => {
      // Create a background style. If there's an image use it, else default gradient
      const bgStyle = row.playground_image_url
        ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(${row.playground_image_url}) center/cover`
        : "linear-gradient(135deg,#0a1e0a,#142e10)";

      return {
        id: row.id,
        e: "⚽",
        turf_logo: row.playground_image_url,
        n: row.turf_name,
        loc: row.city || "Unknown Location",
        s: row.ground_type ? [row.ground_type] : ["Sports"],
        p: `₹${row.rate_per_hour || 500}`,
        r: "4.5", // Mock rating
        slots: Math.floor(Math.random() * 10) + 1, // Mock slots for now
        verified: row.verification_status === 'Verified' || row.verification_status === 'VERIFIED',
        amenities: parseAmenities(row.amenities).map(a => `✅ ${a}`),
        bg: bgStyle,
        public_url_slug: row.public_url_slug
      };
    });

    res.json(formattedTurfs);
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: 'Database query failed' });
  }
});

// API Endpoint to fetch latest 3 customers
app.get('/api/customers/latest', async (req, res) => {
  try {
    const query = `
      SELECT 
        c.id,
        COALESCE(c.organization_name, c.name) AS name,
        c.city,
        c.verification_status,
        c.brand_logo_url,
        c.public_url_slug,
        c.custom_domain,
        (
          SELECT json_agg(DISTINCT ground_type)
          FROM playground_grounds pg
          WHERE pg.customer_id = c.id AND pg.is_active = true
        ) AS sports,
        (
          SELECT COUNT(*)
          FROM slot_bookings sb
          JOIN playground_grounds pg ON sb.ground_id = pg.id
          WHERE pg.customer_id = c.id
        ) AS total_bookings
      FROM customers c
      ORDER BY RANDOM()
      LIMIT 3
    `;
    const result = await pool.query(query);

    const formattedCustomers = result.rows.map(row => {
      const bgStyle = "var(--bg3)"; // Flat background since we'll use an img tag for logo

      let url = "#";
      if (row.public_url_slug) {
        url = `https://matchticket.in/${row.public_url_slug}`;
      }

      const rawLogo = row.brand_logo_url;
      const logoUrl = (rawLogo && !rawLogo.startsWith('http'))
        ? `https://app.matchticket.in/${rawLogo.replace(/^\/+/, '')}`
        : rawLogo;

      return {
        id: row.id,
        logo: logoUrl,
        n: row.name || "Sports Partner",
        loc: row.city || "Various Locations",
        s: row.sports && row.sports.length > 0 ? row.sports : ["Sports Partner"],
        verified: row.verification_status === 'Verified' || row.verification_status === 'VERIFIED',
        bg: bgStyle,
        url: url
      };
    });

    res.json(formattedCustomers);
  } catch (err) {
    console.error("Customers error:", err);
    res.status(500).json({ error: 'Failed to fetch customers' });
  }
});

// API Endpoint to fetch stats
app.get('/api/stats', async (req, res) => {
  try {
    const bookingsResult = await pool.query('SELECT COUNT(*) FROM slot_bookings');
    const bookingsCount = parseInt(bookingsResult.rows[0].count, 10) || 0;

    const turfsResult = await pool.query('SELECT COUNT(*) FROM playground_grounds WHERE is_active = true');
    const turfsCount = parseInt(turfsResult.rows[0].count, 10) || 0;

    const citiesResult = await pool.query('SELECT COUNT(DISTINCT c.city) FROM customers c JOIN playground_grounds p ON c.id = p.customer_id WHERE p.is_active = true');
    const citiesCount = parseInt(citiesResult.rows[0].count, 10) || 0;

    let todayBookingsCount = 0;
    try {
      const todayRes = await pool.query('SELECT COUNT(*) FROM slot_bookings WHERE DATE(created_at) = CURRENT_DATE');
      todayBookingsCount = parseInt(todayRes.rows[0].count, 10) || 0;
    } catch (e) {
      // Ignore if no created_at field
    }

    res.json({ bookings: bookingsCount, turfs: turfsCount, cities: citiesCount, todayBookings: todayBookingsCount });
  } catch (err) {
    console.error("Stats error:", err);
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});

// API Endpoint to save enquiries
app.post('/api/enquiries', async (req, res) => {
  try {
    const { name, phone, email, type, msg } = req.body;
    const query = `
      INSERT INTO website_enquiries (name, phone, email, role, message)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id
    `;
    const result = await pool.query(query, [name, phone, email, type, msg]);

    // Send notification to Slack if webhook is configured
    const slackUrl = process.env.SLACK_WEBHOOK_URL ? process.env.SLACK_WEBHOOK_URL.trim() : null;
    if (slackUrl) {
      const details = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nType: ${type}\nMessage: ${msg}`;
      // In Node.js 18+, fetch is available globally. If older, this fails silently via catch
      if (typeof fetch === 'function') {
        fetch(slackUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: details })
        })
          .then(res => {
            if (!res.ok) console.error("Slack webhook responded with status:", res.status);
            else console.log("Slack message sent successfully!");
          })
          .catch(err => console.error("Slack webhook network error:", err));
      }
    }

    // Send notification to Zoho Cliq if webhook is configured
    const cliqUrl = process.env.CLIQ_WEBHOOK_URL ? process.env.CLIQ_WEBHOOK_URL.trim() : null;
    if (cliqUrl) {
      const details = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nType: ${type}\nMessage: ${msg}`;
      if (typeof fetch === 'function') {
        fetch(cliqUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: details })
        })
          .then(res => {
            if (!res.ok) console.error("Cliq webhook responded with status:", res.status);
            else console.log("Cliq message sent successfully!");
          })
          .catch(err => console.error("Cliq webhook network error:", err));
      }
    }

    res.json({ success: true, id: result.rows[0].id });
  } catch (err) {
    console.error("Enquiry insertion error:", err);
    res.status(500).json({ error: 'Failed to save enquiry' });
  }
});

// Helper to get dynamic index.html with injected tenant metadata
const fs = require('fs');

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

async function getHydratedIndexHtml(slug, indexPath) {
  let rawHtml = fs.readFileSync(indexPath, 'utf8');
  if (!slug || slug === 'index.html') return rawHtml;

  const cleanSlug = slug.trim().toLowerCase();

  try {
    const query = `
      SELECT 
        c.id,
        c.site_name,
        c.organization_name,
        c.name,
        c.business_description,
        c.brand_logo_url,
        c.public_url_slug,
        c.custom_domain,
        c.city,
        c.district,
        (
          SELECT playground_image_url
          FROM playground_grounds pg
          WHERE pg.customer_id = c.id AND pg.is_active = true AND pg.playground_image_url IS NOT NULL
          LIMIT 1
        ) AS ground_image
      FROM customers c
      WHERE LOWER(c.public_url_slug) = $1 OR LOWER(c.custom_domain) = $1
      LIMIT 1
    `;
    const result = await pool.query(query, [cleanSlug]);

    if (result.rows.length > 0) {
      const customer = result.rows[0];
      const siteName = customer.site_name || customer.organization_name || customer.name || slug;
      const title = customer.site_name ? `${customer.site_name} – Book Your Turf Online` : `${siteName} – Book Your Turf Online`;
      const description = customer.business_description || `Book cricket, football, and badminton grounds at ${siteName} with instant online booking.`;

      let logoUrl = customer.brand_logo_url || customer.ground_image || 'https://matchticket.in/matchticket_logo.png';
      if (logoUrl && !logoUrl.startsWith('http')) {
        logoUrl = `https://app.matchticket.in/${logoUrl.replace(/^\/+/, '')}`;
      }

      const canonicalUrl = `https://matchticket.in/${customer.public_url_slug || slug}`;
      const keywords = `${siteName}, ${siteName} turf, ${siteName} slot booking, online turf booking, sports ground booking${customer.city ? `, turf in ${customer.city}` : ''}`;

      // Perform regex replacement of meta tags
      rawHtml = rawHtml
        .replace(/<title>.*?<\/title>/gi, `<title>${escapeHtml(title)}</title>`)
        .replace(/<meta\s+name="description"\s+content=".*?"\s*\/?>/gi, `<meta name="description" content="${escapeHtml(description)}" />`)
        .replace(/<meta\s+name="keywords"\s+content=".*?"\s*\/?>/gi, `<meta name="keywords" content="${escapeHtml(keywords)}" />`)
        .replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/?>/gi, `<link rel="canonical" href="${canonicalUrl}" />`)
        .replace(/<link\s+rel="icon"\s+type="image\/png"\s+href=".*?"\s*\/?>/gi, `<link rel="icon" type="image/png" href="${logoUrl}" />`)
        .replace(/<meta\s+property="og:site_name"\s+content=".*?"\s*\/?>/gi, `<meta property="og:site_name" content="${escapeHtml(siteName)}" />`)
        .replace(/<meta\s+property="og:title"\s+content=".*?"\s*\/?>/gi, `<meta property="og:title" content="${escapeHtml(title)}" />`)
        .replace(/<meta\s+property="og:description"\s+content=".*?"\s*\/?>/gi, `<meta property="og:description" content="${escapeHtml(description)}" />`)
        .replace(/<meta\s+property="og:image"\s+content=".*?"\s*\/?>/gi, `<meta property="og:image" content="${logoUrl}" />`)
        .replace(/<meta\s+property="og:url"\s+content=".*?"\s*\/?>/gi, `<meta property="og:url" content="${canonicalUrl}" />`)
        .replace(/<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/gi, `<meta name="twitter:title" content="${escapeHtml(title)}" />`)
        .replace(/<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/gi, `<meta name="twitter:description" content="${escapeHtml(description)}" />`)
        .replace(/<meta\s+name="twitter:image"\s+content=".*?"\s*\/?>/gi, `<meta name="twitter:image" content="${logoUrl}" />`);
    }
  } catch (err) {
    console.error("Error hydrating index.html for slug:", slug, err);
  }

  return rawHtml;
}

// For Production: Serve React Build with Hydrated Meta Tags
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));
  app.get(/^(.*)$/, async (req, res) => {
    const urlPath = req.path || '';
    if (urlPath.startsWith('/api/') || urlPath.startsWith('/static/') || urlPath.includes('.')) {
      return res.status(404).send('Not found');
    }
    const slug = urlPath.replace(/^\/+/, '').split('/')[0];
    const indexPath = path.join(__dirname, 'build', 'index.html');
    if (slug && fs.existsSync(indexPath)) {
      const html = await getHydratedIndexHtml(slug, indexPath);
      return res.send(html);
    }
    res.sendFile(indexPath);
  });
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
