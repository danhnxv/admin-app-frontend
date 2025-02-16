export * from './endpoints';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const PRIVATE_PAGES = ['/dashboard'];

export const LOGIN_URL = '/login';

export const JOTAI_LOCAL_STORAGE_KEY = {
  AUTH: 'auth',
};
