import { API_URL } from '@/constants/index';
import { LoginResponse } from '@/screens/login/types';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'email:',
          type: 'text',
        },

        password: {
          label: 'Password:',
          type: 'password',
        },
      },
      async authorize(credentials) {
        const payload = {
          Email: credentials?.email,
          Password: credentials?.password,
        };

        const res = await fetch(`${API_URL}/auth/signin`, {
          method: 'POST',

          body: JSON.stringify(payload),
          headers: { 'Content-Type': 'application/json' },
        });
        const user = await res.json();

        if (!res.ok) {
          throw new Error(JSON.stringify(user));
        } else {
          if (user) {
            return { ...user };
          }
          throw new Error();
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
