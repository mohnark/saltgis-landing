import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'SaltGIS'
  const description = searchParams.get('description') || 'Advanced GIS Software & Location Intelligence'

  return new Response(
    JSON.stringify({ title, description }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
} 