import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import PostData from './PostData';

export async function POST(req: NextRequest) {
  const data = (await req.json());
  const apiKey = req.headers.get('x-api-key');
  if (apiKey !== process.env.WP_WEBHOOK) {
    return NextResponse.error();
  }

  // const cats = data.taxonomies.category.map((cat) => cat.name.toLowerCase());
  // console.log('POST', cats);
  console.log(data)
  // console.log(data.taxonomies.category.map(cat))

  // cats.forEach((cat) => revalidateTag(cat));
  // to do revalidte indivudal sub section pages

  return NextResponse.json({ received: true, now: Date.now(), data: data });
}
