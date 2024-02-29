import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';
import { Logger } from 'next-axiom';

export async function POST(req: NextRequest) {
  const log = new Logger();
  const data = await req.json();
  if (!data) {
    return NextResponse.error();
  }
  console.log('Received data:', data);

  if (data.taxonomies.category) {
    const cats = Object.keys(data.taxonomies.category).map(
      (key) => data.taxonomies.category[key].name
    );
    cats.forEach((cat) => revalidateTag(cat));
    console.log('Revalidated categories:', cats);
  }

  if (data.post_permalink) {
    const post_permalink: string = data.post_permalink;
    console.log('Revalidated post:', post_permalink);
    if (!post_permalink.includes('?')){
      revalidatePath(post_permalink.replace('www.bcheights.com', 'monorepo-chi-seven.vercel.app'));
      console.log('Revalidated post:', post_permalink.replace('www.bcheights.com', 'monorepo-chi-seven.vercel.app'));
      revalidatePath('/')
    }
  }

  await log.flush();
  return NextResponse.json({ received: true, now: Date.now(), data });
}
