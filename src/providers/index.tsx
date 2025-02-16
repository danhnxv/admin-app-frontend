import { Session } from 'next-auth';
import React from 'react';
import { AppProvider } from './AppProvider';

type AppProviderProps = {
  children?: React.ReactNode;
  session?: Session;
};

export const Providers = async ({
  children,

  session,
}: AppProviderProps) => {
  return <AppProvider session={session}>{children}</AppProvider>;
};
