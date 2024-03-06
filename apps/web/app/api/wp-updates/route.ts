import { NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';
import { AxiomRequest } from 'next-axiom';

export async function POST(req: AxiomRequest) {
  const data = await req.json();
  if (!data) {
    return NextResponse.error();
  }

  const log = req.log.with({ scope: 'wp-webhooks' });
  log.debug('Received data:', data);

  if (data.taxonomies.category) {
    const cats = Object.keys(data.taxonomies.category).map(
      (key) => data.taxonomies.category[key].name,
    );
    cats.forEach((cat) => revalidateTag(cat));
    log.debug('Revalidated categories:', cats);
  }

  if (data.post_permalink) {
    const post_permalink: string = data.post_permalink;
    if (!post_permalink.includes('?')) {
      revalidatePath(
        post_permalink.replace(
          'www.bcheights.com',
          'monorepo-chi-seven.vercel.app',
        ),
      );
      log.debug('Revalidated post:', {
        url: post_permalink.replace(
          'www.bcheights.com',
          'monorepo-chi-seven.vercel.app',
        ),
      });
      revalidatePath('/');
    }
  }

  return NextResponse.json({ status: 'ok' });
}
