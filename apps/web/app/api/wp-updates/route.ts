import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag, revalidatePath } from 'next/cache'


export async function POST(req: NextRequest) {
    revalidateTag('posts')
    revalidatePath('/')
    return NextResponse.json({ received: true, now:  Date.now() })
  }