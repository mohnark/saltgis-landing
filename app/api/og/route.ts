import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'SaltGIS'
  const description = searchParams.get('description') || 'Advanced GIS Software & Location Intelligence'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0A1A2F',
          color: 'white',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '60px',
              height: '60px',
              backgroundColor: '#118C4F',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              fontWeight: 'bold',
              marginRight: '20px',
            }}
          >
            S
          </div>
          <div
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#118C4F',
            }}
          >
            SaltGIS
          </div>
        </div>
        <div
          style={{
            fontSize: '64px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '20px',
            maxWidth: '800px',
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: '32px',
            textAlign: 'center',
            color: '#94A3B8',
            maxWidth: '800px',
          }}
        >
          {description}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
} 