'use server'

import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'

interface Post {
  ID: number;
  post_author: string;
  post_date: string;
  post_date_gmt: string;
  post_content: string;
  post_title: string;
  post_excerpt: string;
  post_status: string;
  comment_status: string;
  ping_status: string;
  post_password: string;
  post_name: string;
  to_ping: string;
  pinged: string;
  post_modified: string;
  post_modified_gmt: string;
  post_content_filtered: string;
  post_parent: number;
  guid: string;
  menu_order: number;
  post_type: string;
  post_mime_type: string;
  comment_count: string;
  filter: string;
}

interface Taxonomy {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface AcfData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  demo_repeater_field: any[];
  demo_text_field: string;
  demo_true_false: boolean;
}

interface PostMeta {
  [key: string]: string[];
}

interface PostData {
  post_id: number;
  post: Post;
  post_meta: PostMeta;
  post_thumbnail: string;
  post_permalink: string;
  taxonomies: { category: Taxonomy };
  acf_data: AcfData;
}


export async function POST(req: NextRequest) {
  const data = await req.json() as PostData;
  const apiKey = req.headers.get('x-api-key')
  if (apiKey !== process.env.WP_WEBHOOK) {
    return NextResponse.error(); 
  }

  console.log('POST', data.taxonomies);

  revalidateTag('posts');
  revalidatePath('/');
  return NextResponse.json({ received: true, now:  Date.now(), data: data });
}
