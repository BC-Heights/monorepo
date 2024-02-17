import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import { Logger } from 'next-axiom';

export async function POST(req: NextRequest) {
  const log = new Logger();
  const data = await req.json();
  if (!data) {
    return NextResponse.error();
  }

  if (data.taxonomies.category) {
    const cats = Object.keys(data.taxonomies.category).map(
      (key) => data.taxonomies.category[key].name
    );
    cats.forEach((cat) => revalidateTag(cat));
    console.log('Revalidated categories:', cats);
  }
  await log.flush();
  return NextResponse.json({ received: true, now: Date.now(), data });
}
