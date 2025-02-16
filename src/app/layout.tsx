import '../styles/global.css';
import { Session } from 'next-auth';
import { Providers } from '@/providers';
import StyledProviders from '@/providers/StyledProvider';

interface Props {
  children: React.ReactNode;
  session?: Session;
}

export default async function RootLayout({ children, session }: Readonly<Props>) {
  return (
    <html lang="en">
      <body>
        <Providers session={session}>
          <StyledProviders>{children}</StyledProviders>
        </Providers>
      </body>
    </html>
  );
}
