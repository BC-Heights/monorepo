import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'


export async function POST(req: NextRequest) {
    revalidateTag('posts')
    console.log('Webhook received')
  
    return NextResponse.json({ received: true, now:  Date.now() })
  }