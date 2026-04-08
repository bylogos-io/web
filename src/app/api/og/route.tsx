import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // Dynamic params
    const title = searchParams.get('title') || 'LogOS';
    const description = searchParams.get('description');
    const category = searchParams.get('category') || 'Noticias';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            backgroundColor: '#0a0a0a',
            backgroundImage: 'radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)',
            backgroundSize: '100px 100px',
            padding: '80px',
            fontFamily: 'sans-serif',
          }}
        >
          {/* Top Label */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '32px',
            }}
          >
            <div
              style={{
                color: '#e16e09', // LogOS Brand Color
                fontSize: 28,
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              • {category}
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              display: 'flex',
              fontSize: 64,
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.2,
              marginBottom: '24px',
              maxWidth: '900px',
            }}
          >
            {title}
          </div>

          {/* Description */}
          {description && (
            <div
              style={{
                display: 'flex',
                fontSize: 32,
                color: '#a3a3a3',
                lineHeight: 1.4,
                maxWidth: '850px',
              }}
            >
              {description.length > 120 ? description.substring(0, 120) + '...' : description}
            </div>
          )}

          {/* Footer Logo */}
          <div
            style={{
              display: 'flex',
              position: 'absolute',
              bottom: '80px',
              right: '80px',
              alignItems: 'center',
            }}
          >
            <div style={{ color: 'white', fontSize: 32, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#e16e09', marginRight: '8px' }}>Log</span>OS
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response('Failed to generate the image', {
      status: 500,
    });
  }
}
