/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Context } from '@netlify/functions';
import { withOriginCheck } from './lib/middleware';

// 6602e26f184c884b719d7191

export default withOriginCheck(async (request: Request, context: Context) => {
  return new Response('Hello, world!');
});
