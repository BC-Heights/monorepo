import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'

export const dynamic = 'force-dynamic'
export async function GET() {
    const res = await fetch('https://data.mongodb-api.com/...')
    const data = await res.json()
    revalidateTag('posts')
    return Response.json(data)
}

export async function POST(req: NextRequest) {
    revalidateTag('posts')
    console.log('Webhook received')
  
    return NextResponse.json({ received: true, now:  Date.now() })
  }