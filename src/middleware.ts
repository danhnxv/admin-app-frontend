import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';
import { getToken } from 'next-auth/jwt';
import { isPrivatePage } from '@/utils';
import { LOGIN_URL } from '@/constants';

const authMiddleware = withAuth({
  callbacks: {
    authorized: ({ token }) => {
      return token != null;
    },
  },
  pages: {
    signIn: LOGIN_URL,
  },
});

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  if (path === '/') {
    return NextResponse.redirect(new URL(LOGIN_URL, req.url));
  }
  if (isPrivatePage(path)) {
    return (authMiddleware as any)(req);
  } else {
    const token = await getToken({ req });

    const isAuthenticated = !!token;
    if (path.startsWith(LOGIN_URL) && isAuthenticated) {
      const url = req.nextUrl.searchParams.get('callbackUrl') || LOGIN_URL;
      return NextResponse.redirect(new URL(url, req.url));
    }
    return NextResponse.next();
  }
}
