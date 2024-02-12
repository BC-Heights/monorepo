import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import { PostData } from './PostData';
import { log, AxiomRequest } from 'next-axiom';

export async function POST(req: AxiomRequest) {
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
  console.log('POST', cats);
  log.debug('POST', {
    ...postData,
    post: { ...postData.post, post_content: undefined },
    post_before: undefined,
  });

  cats.forEach((cat) => revalidateTag(cat));
  
  return NextResponse.json({ received: true, now: Date.now(), data: postData });
}
