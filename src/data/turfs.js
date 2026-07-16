import { useState, useEffect } from 'react';

export const useTurfs = () => {
  const [turfs, setTurfs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTurfs = async () => {
      try {
        const response = await fetch('/api/turfs');
        if (response.ok) {
          const data = await response.json();
          setTurfs(data);
        } else {
          console.error("Error fetching turfs");
        }
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
  const [stats, setStats] = useState({ bookings: 12000, turfs: 500, cities: 12, todayBookings: 0 }); // Default fallback
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
