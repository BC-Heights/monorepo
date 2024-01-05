'use server'

import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag, revalidatePath } from 'next/cache'


export async function POST(req: NextRequest) {
  // const data = await req.json();
  // const { post_permalink } = data;
  // const lastSlashIndex = post_permalink.lastIndexOf('/');
  // const secondToLastSlashIndex = post_permalink.lastIndexOf('/', lastSlashIndex - 1);
  // const newHref = post_permalink.substring(secondToLastSlashIndex === -1 ? lastSlashIndex + 1 : secondToLastSlashIndex + 1);

  revalidateTag('posts');
  revalidatePath('/');
  // revalidatePath(newHref);
  return NextResponse.json({ received: true, now:  Date.now() });
  }