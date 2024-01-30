import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import PostData from './PostData';
export const runtime = 'edge'

export async function POST(req: NextRequest) {
  const data = (await req.json()) as PostData;
  const apiKey = req.headers.get('x-api-key');
  if (apiKey !== process.env.WP_WEBHOOK) {
    return NextResponse.error();
  }

  const cats = data.taxonomies.category.map((cat) => cat.name.toLowerCase());
  console.log('POST', cats);

  // todo: revalidate based off of taxonomy
  revalidateTag('posts');
  return NextResponse.json({ received: true, now: Date.now(), data: data });
}
