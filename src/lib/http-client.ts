import { API_URL } from '@/constants';
import axios from 'axios';
import { toast } from 'react-toastify';

export const httpClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

httpClient.interceptors.request.use(
  (config) => {
    const auth = localStorage.getItem('auth');
    const token = auth ? JSON.parse(auth as string)?.token : null;
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (window.location.pathname !== '/auth/login') {
      if (error.response.status === 401) {
        toast.error('Your session has been expired! Please login again.', {
          position: 'bottom-center',
          toastId: 'UNAUTHORIZED_ERROR',
        });

        setTimeout(() => {
          localStorage.removeItem('auth');
          window.location.href = '/auth/login';
        }, 1000);
      }
    }

    return Promise.reject(error);
  },
);
