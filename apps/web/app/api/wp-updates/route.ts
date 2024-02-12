import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import { PostData } from './PostData';
import { Logger } from 'next-axiom';

export async function POST(req: NextRequest) {
  const log = new Logger();
  const data = (await req.json());
  if (!data) {
    return NextResponse.error();
  }
  const postData = data as PostData;
  const apiKey = req.headers.get('x-api-key');
  if (apiKey !== process.env.WP_WEBHOOK) {
    return NextResponse.error();
  }

  const cats = Object.keys(postData.taxonomies.category).map(
    (key) => data.taxonomies.category[key].name
  );
  log.debug('POST', {
    ...postData,
    post: { ...postData.post, post_content: undefined },
    post_before: undefined,
  });

  cats.forEach((cat) => revalidateTag(cat));
  await log.flush();
  return NextResponse.json({ received: true, now: Date.now(), data: postData });
}
