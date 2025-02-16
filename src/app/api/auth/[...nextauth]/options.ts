import { API_ENDPOINT } from '@/constants';
import { LoginResponse } from '@/screens/auth/types';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Username:',
          type: 'text',
        },

        password: {
          label: 'Password:',
          type: 'password',
        },
      },
      async authorize(credentials) {
        const payload = {
          username: credentials?.username,
          password: credentials?.password,
        };

        const res = await fetch(`${API_ENDPOINT}/auth/login`, {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: { 'Content-Type': 'application/json' },
        });
        const user = await res.json();
        if (res.status === 400) {
          throw new Error(JSON.stringify(user));
        } else {
          if (user) {
            return { ...user };
          }
          return null;
        }
      },
    }),
  ],
  callbacks: {
    redirect: ({ baseUrl, url }) => {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },

    jwt: async ({ token, user, trigger, session }) => {
      if (trigger === 'update' && session?.user) {
        token.user = session.user;
      } else {
        if (user) {
          token.user = user;
        }
      }
      return token;
    },
    session: async ({ session, token }) => {
      (session as any).user = token.user as LoginResponse;
      return Promise.resolve(session);
    },
  },
  session: {
    strategy: 'jwt',
  },
};
