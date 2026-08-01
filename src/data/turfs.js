import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../api/config';

export const useTurfs = () => {
  const [turfs, setTurfs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTurfs = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/public/turfs`);
        if (response.ok) {
          const data = await response.json();
          setTurfs(data);
        } else {
          // Fallback to relative /api/turfs if proxied
          const relRes = await fetch('/api/turfs');
          if (relRes.ok) setTurfs(await relRes.json());
        }
      } catch (error) {
        console.error("Failed to fetch turfs from backend:", error);
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
        const response = await fetch(`${API_BASE_URL}/public/customers/latest`);
        if (response.ok) {
          const data = await response.json();
          setCustomers(data);
        } else {
          const relRes = await fetch('/api/customers/latest');
          if (relRes.ok) setCustomers(await relRes.json());
        }
      } catch (error) {
        console.error("Failed to fetch customers from backend:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCustomers();
  }, []);

  return { customers, loading };
};

export const useStats = () => {
  const [stats, setStats] = useState({ bookings: 120, turfs: 25, cities: 15, todayBookings: 12 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/public/stats`);
        if (response.ok) {
          const data = await response.json();
          setStats(data);
        } else {
          const relRes = await fetch('/api/stats');
          if (relRes.ok) setStats(await relRes.json());
        }
      } catch (error) {
        console.error("Failed to fetch stats from backend:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  return { stats, loading };
};
