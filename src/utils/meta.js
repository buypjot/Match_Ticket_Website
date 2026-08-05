import { getMediaUrl } from './media.js';

/**
 * Dynamically updates document title, favicon logo, meta description,
 * and Open Graph / Twitter sharing tags for owner white-label websites.
 * 
 * @param {Object} customer - The owner customer object from backend API
 * @param {Array} grounds - List of grounds for preview image fallback
 */
export function updatePageMeta(customer, grounds = []) {
  if (!customer) return;

  const siteName = customer.site_name || customer.organization_name || customer.name || 'Sports Arena';

  // 1. Dynamic Title Resolution
  const title = customer.meta_title || 
    (customer.site_name ? `${customer.site_name} – Book Your Turf Online` : `${siteName} – Book Your Turf Online`);

  // 2. Dynamic Description Resolution (handles meta_description, business_description, and description)
  const description = customer.meta_description || 
    customer.business_description || 
    customer.description || 
    `Book cricket, football, and badminton grounds at ${siteName} with instant online booking.`;

  // 3. Update Browser Tab Title immediately
  document.title = title;

  // 4. Resolve Favicon Logo URL
  let logoUrl = customer.brand_logo_url ? getMediaUrl(customer.brand_logo_url) : '/matchticket_logo.png';
  if (logoUrl.startsWith('/')) {
    logoUrl = `${window.location.origin}${logoUrl}`;
  }

  // 5. Update Favicon & Shortcut Icons aggressively so Chrome/Safari update immediately
  const existingFavicons = document.querySelectorAll("link[rel*='icon']");
  existingFavicons.forEach(el => el.remove());

  const newFavicon = document.createElement('link');
  newFavicon.rel = 'icon';
  newFavicon.type = 'image/png';
  newFavicon.sizes = '32x32';
  newFavicon.href = logoUrl;
  newFavicon.id = 'app-favicon-32';
  document.head.appendChild(newFavicon);

  const newShortcutIcon = document.createElement('link');
  newShortcutIcon.rel = 'shortcut icon';
  newShortcutIcon.href = logoUrl;
  newShortcutIcon.id = 'app-favicon-shortcut';
  document.head.appendChild(newShortcutIcon);

  const appleIcon = document.createElement('link');
  appleIcon.rel = 'apple-touch-icon';
  appleIcon.href = logoUrl;
  document.head.appendChild(appleIcon);

  // 6. Preview Image Resolution (prioritize owner brand logo, fallback to ground image)
  let shareImage = logoUrl;
  if (Array.isArray(grounds) && grounds.length > 0 && grounds[0].playground_image_url) {
    const gImg = getMediaUrl(grounds[0].playground_image_url);
    const fullGImg = gImg.startsWith('/') ? `${window.location.origin}${gImg}` : gImg;
    if (!customer.brand_logo_url) {
      shareImage = fullGImg;
    }
  }

  // 7. Update Meta Tags
  const setMeta = (selector, attrName, attrValue, content) => {
    let meta = document.querySelector(selector);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attrName, attrValue);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  };

  setMeta('meta[name="description"]', 'name', 'description', description);

  // Open Graph
  setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', siteName);
  setMeta('meta[property="og:title"]', 'property', 'og:title', title);
  setMeta('meta[property="og:description"]', 'property', 'og:description', description);
  setMeta('meta[property="og:image"]', 'property', 'og:image', shareImage);
  setMeta('meta[property="og:url"]', 'property', 'og:url', window.location.href);

  // Twitter Cards
  setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
  setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
  setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
  setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', shareImage);
}
