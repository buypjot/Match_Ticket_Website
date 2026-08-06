import { useState, useEffect } from 'react';
import { getMediaUrl } from '../utils/media';

export const useTurfs = () => {
  const [turfs, setTurfs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTurfs = async () => {
      try {
        const [turfsRes, customersRes] = await Promise.allSettled([
          fetch('/api/turfs'),
          fetch('/api/customers/latest')
        ]);

        let turfsData = [];
        if (turfsRes.status === 'fulfilled' && turfsRes.value.ok) {
          turfsData = await turfsRes.value.json();
        }

        let customersMap = {};
        if (customersRes.status === 'fulfilled' && customersRes.value.ok) {
          const customersData = await customersRes.value.json();
          if (Array.isArray(customersData)) {
            customersData.forEach(c => {
              if (c.public_url_slug) {
                customersMap[c.public_url_slug] = c;
              }
            });
          }
        }

        const enrichedTurfs = turfsData.map(t => {
          const matchedCust = t.public_url_slug ? customersMap[t.public_url_slug] : null;

          let companyName = matchedCust?.n || t.company_name;
          if (!companyName && t.public_url_slug) {
            companyName = t.public_url_slug
              .split('-')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
          }
          if (!companyName) {
            companyName = t.n ? `${t.n} Sports` : "Match Ticket Partner";
          }

          let rawLogo = t.brand_logo_url;
          let companyLogo = getMediaUrl(rawLogo);

          return {
            ...t,
            company_name: companyName,
            company_logo: companyLogo
          };
        });

        setTurfs(enrichedTurfs);
      } catch (error) {
        console.error("Failed to fetch turfs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTurfs();
  }, []);

  return { turfs, loading };
};

export const useLatestCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('/api/customers/latest');
        if (response.ok) {
          const data = await response.json();
          setCustomers(data);
        }
      } catch (error) {
        console.error("Failed to fetch customers:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCustomers();
  }, []);

  return { customers, loading };
};

export const useStats = () => {
  const [stats, setStats] = useState({ bookings: 67, turfs: 19, cities: 12, todayBookings: 3 }); // Real live fallback
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/stats');
        if (response.ok) {
          const data = await response.json();
          setStats(data);
        }
      } catch (error) {
        console.error("Failed to fetch stats:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  return { stats, loading };
};