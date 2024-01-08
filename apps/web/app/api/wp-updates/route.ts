'use server'

import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'


export async function POST(req: NextRequest) {
  // const { post_permalink } = data;
  // const lastSlashIndex = post_permalink.lastIndexOf('/');
  // const secondToLastSlashIndex = post_permalink.lastIndexOf('/', lastSlashIndex - 1);
  // const newHref = post_permalink.substring(secondToLastSlashIndex === -1 ? lastSlashIndex + 1 : secondToLastSlashIndex + 1);
  const data = await req.json();
  const apiKey = req.headers.get('x-api-key')
  if (apiKey !== '2e7c77c7-928c-4ffe-9801-7f032ce82446') {
    return NextResponse.error(); 
  }

  console.log(data);

  revalidateTag('posts');
  // revalidatePath('/');
  // revalidatePath(newHref);
  return NextResponse.json({ received: true, now:  Date.now(), data: data });
  }
