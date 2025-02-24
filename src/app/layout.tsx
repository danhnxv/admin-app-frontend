import '../styles/global.css';
import { Session } from 'next-auth';
import { Providers } from '@/providers';
import StyledProviders from '@/providers/StyledProvider';
import { Nunito_Sans } from 'next/font/google';
import { AppProvider } from '@/providers/AppProvider';

interface Props {
  children: React.ReactNode;
  session?: Session;
}

// Load the Nunito Sans font with the specified weights
const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({ children, session }: Readonly<Props>) {
  return (
    <html lang="en">
      <head></head>

      <body tw={`${nunitoSans.style.fontFamily}`}>
        <AppProvider>
          <Providers session={session}>
            <StyledProviders>{children}</StyledProviders>
          </Providers>
        </AppProvider>
      </body>
    </html>
  );
}
