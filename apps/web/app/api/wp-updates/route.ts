import { NextApiRequest, NextApiResponse } from 'next'
import { revalidateTag } from 'next/cache'

export const dynamic = 'force-dynamic'
export async function GET() {
    const res = await fetch('https://data.mongodb-api.com/...')
    const data = await res.json()
    revalidateTag('posts')
    return Response.json(data)
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    // This function will be triggered when your webhook sends a POST request
    // You can access the data sent by the webhook in req.body
  
    // Trigger a revalidation of your data here
    revalidateTag('posts')
    console.log('Webhook received')
  
    res.status(200).json({ message: 'Webhook received' })
  }