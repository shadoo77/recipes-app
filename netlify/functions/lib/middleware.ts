import type { Context } from '@netlify/functions';

const allowedOrigins = [
  'https://recipes-hint.netlify.app',
  'http://localhost:8888',
];

export function withOriginCheck(
  handler: (request: Request, context: Context) => Promise<Response>
) {
  return async (request: Request, context: Context) => {
    const url = new URL(request.url);
    const urlOrigin = url.origin;

    if (urlOrigin && !allowedOrigins.includes(urlOrigin)) {
      return new Response('Forbidden', { status: 403 });
    }
    return handler(request, context);
  };
}
