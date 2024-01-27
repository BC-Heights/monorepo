'use server';

import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import PostData from './PostData';

export async function POST(req: NextRequest) {
  const data = (await req.json()) as PostData;
  const apiKey = req.headers.get('x-api-key');
  if (apiKey !== process.env.WP_WEBHOOK) {
    return NextResponse.error();
  }

  console.log('POST', data.taxonomies);

  // todo: revalidate based off of taxonomy
  revalidateTag('posts');
  return NextResponse.json({ received: true, now: Date.now(), data: data });
}
