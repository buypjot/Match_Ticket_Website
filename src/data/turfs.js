import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../api/config';

const extractArray = (data) => {
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.data)) return data.data;
  if (Array.isArray(data?.turfs)) return data.turfs;
  if (Array.isArray(data?.customers)) return data.customers;
  return [];
};

export const useTurfs = () => {
  const [turfs, setTurfs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTurfs = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/public/turfs`);
        if (response.ok) {
          const data = await response.json();
          setTurfs(extractArray(data));
        } else {
          const relRes = await fetch('/api/turfs');
          if (relRes.ok) setTurfs(extractArray(await relRes.json()));
        }
      } catch (error) {
        console.error("Failed to fetch turfs from backend:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTurfs();
  }, []);

  return { turfs: Array.isArray(turfs) ? turfs : [], loading };
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
          setCustomers(extractArray(data));
        } else {
          const relRes = await fetch('/api/customers/latest');
          if (relRes.ok) setCustomers(extractArray(await relRes.json()));
        }
      } catch (error) {
        console.error("Failed to fetch customers from backend:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCustomers();
  }, []);

  return { customers: Array.isArray(customers) ? customers : [], loading };
};

export const useStats = () => {
  const [stats, setStats] = useState({ bookings: 120, turfs: 25, cities: 15, todayBookings: 12 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/public/stats`);
        let data = null;
        if (response.ok) {
          data = await response.json();
        } else {
          const relRes = await fetch('/api/stats');
          if (relRes.ok) data = await relRes.json();
        }
        if (data) {
          const parsed = data.data || data;
          setStats({
            bookings: Number(parsed.bookings) || 120,
            turfs: Number(parsed.turfs) || 25,
            cities: Number(parsed.cities) || 15,
            todayBookings: Number(parsed.todayBookings) || 12
          });
        }
      } catch (error) {
        console.error("Failed to fetch stats from backend:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  return { stats: stats || { bookings: 120, turfs: 25, cities: 15, todayBookings: 12 }, loading };
};
