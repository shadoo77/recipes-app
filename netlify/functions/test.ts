import type { Context } from '@netlify/functions';

// List of allowed origins
const allowedOrigins = [
  'https://your-allowed-domain.com',
  'http://localhost:5173', // example for local dev
];

export default async (req: Request, context: Context) => {
  const origin = req.headers.get('origin');
  console.log({ origin, context: context.server.region, site: context.site });
  if (origin && !allowedOrigins.includes(origin)) {
    return new Response('Forbidden', { status: 403 });
  }
  return new Response('Hello, world!');
};
