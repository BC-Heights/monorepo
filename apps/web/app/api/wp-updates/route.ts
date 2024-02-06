import { NextResponse } from 'next/server';
// import { revalidateTag } from 'next/cache';
import { PostData } from './PostData';
import { log, AxiomRequest } from 'next-axiom';

export const runtime = 'edge';

export async function POST(req: AxiomRequest) {
  const data = (await req.json()) as PostData;
  const apiKey = req.headers.get('x-api-key');
  if (apiKey !== process.env.WP_WEBHOOK) {
    return NextResponse.error();
  }

  // const cats = data.taxonomies.category.map((cat) => cat.name.toLowerCase());
  // console.log('POST', cats);
  console.log({
    ...data,
    post: { ...data.post, post_content: undefined },
    post_before: undefined,
  });
  log.debug('POST', {
    ...data,
    post: { ...data.post, post_content: undefined },
    post_before: undefined,
  });
  console.log(data.taxonomies.category);

  // cats.forEach((cat) => revalidateTag(cat));
  // to do revalidte indivudal sub section pages

  return NextResponse.json({ received: true, now: Date.now(), data: data });
}
