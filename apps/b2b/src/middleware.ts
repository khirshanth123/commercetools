import { chain , withContext , withAuth } from '@repo/core/middlewares';

const middlewares = [withAuth,withContext];
export default chain(middlewares);


export const config = {
    matcher: [
      /*
       * Match all request paths except for those starting with:
       * - api (API routes)
       * - _next
       * - _vercel
       * - pathnames with a dot (e.g. favicon.ico)
       */
      '/((?!api|_next|_vercel|.*\\..*).*)',
    ],
  };