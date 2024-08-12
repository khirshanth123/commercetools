
import { NextFetchEvent, NextMiddleware ,NextRequest , NextResponse} from 'next/server';
import { MiddlewareFactory } from '../types';

const protectedPaths = ['/addresses', '/cart', '/update-password'];
interface NextRequestWithAuth extends NextRequest {
  nextauth: {
    // Define your specific auth properties here
    user: any; // Replace 'any' with the actual type of your user object
  };
}
export const withAuth: MiddlewareFactory = (middleware: NextMiddleware) => {
  return async (request: NextRequestWithAuth, event: NextFetchEvent) => {
    const isUrlProtected = protectedPaths.some((path) => request.nextUrl.pathname.match(path));

    if (isUrlProtected) {
      return withNextAuth(middleware)(request, event);
    }

    return middleware(request, event);
  };
};

const withNextAuth = (middleware: NextMiddleware) => async (request: NextRequestWithAuth, event: NextFetchEvent) => {
  if (request.nextauth && request.nextauth.user) {
    // Authenticated user logic
    return middleware(request, event);
  } else {
    // Handle unauthenticated user
    return NextResponse.redirect('/login');
  }
};