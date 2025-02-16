'use client';

import { queryClient } from '@/lib/react-query';
import { store } from '@/stores';
import { Provider } from 'jotai';
import { SessionProvider } from 'next-auth/react';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { Session } from 'next-auth';
import ThemeProvider from './ThemeProvider';
interface Props {
  children?: React.ReactNode;
  session?: Session;
}

export const AppProvider: React.FC<React.PropsWithChildren<Props>> = ({ session, children }) => {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <ThemeProvider>
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </ThemeProvider>
      </SessionProvider>
    </Provider>
  );
};
