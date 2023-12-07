import { NextApiRequest, NextApiResponse } from 'next'
import { revalidateTag } from 'next/cache'

export default function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Trigger a revalidation of your data here
    revalidateTag('Posts')

    res.status(200).json({ message: 'Webhook received' })
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}