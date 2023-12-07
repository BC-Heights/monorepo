import { revalidateTag } from 'next/cache'

export const dynamic = 'force-dynamic'
export async function GET() {
    const res = await fetch('https://data.mongodb-api.com/...')
    const data = await res.json()
    revalidateTag('posts')
    return Response.json(data)
}