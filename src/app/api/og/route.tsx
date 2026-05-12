import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import type { CSSProperties } from 'react';

export const runtime = 'edge';

// next/og ImageResponse renders to an image — it does not support classes,
// only inline style objects. Hoisted to module scope to avoid per-request allocation.
const rootStyle: CSSProperties = {
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  backgroundColor: '#0a0a0a',
  backgroundImage:
    'radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)',
  backgroundSize: '100px 100px',
  padding: '80px',
  fontFamily: 'sans-serif',
};
const labelWrap: CSSProperties = { display: 'flex', alignItems: 'center', marginBottom: '32px' };
const labelText: CSSProperties = {
  color: '#e16e09',
  fontSize: 28,
  fontWeight: 700,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
};
const titleStyle: CSSProperties = {
  display: 'flex',
  fontSize: 64,
  fontWeight: 600,
  color: 'white',
  lineHeight: 1.2,
  marginBottom: '24px',
  maxWidth: '900px',
};
const descStyle: CSSProperties = {
  display: 'flex',
  fontSize: 32,
  color: '#a3a3a3',
  lineHeight: 1.4,
  maxWidth: '850px',
};
const footerWrap: CSSProperties = {
  display: 'flex',
  position: 'absolute',
  bottom: '80px',
  right: '80px',
  alignItems: 'center',
};
const footerLogo: CSSProperties = {
  color: 'white',
  fontSize: 32,
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
};
const footerBrand: CSSProperties = { color: '#e16e09', marginRight: '8px' };

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const title = searchParams.get('title') || 'LogOS';
    const description = searchParams.get('description');
    const category = searchParams.get('category') || 'Noticias';

    return new ImageResponse(
      (
        <div style={rootStyle}>
          <div style={labelWrap}>
            <div style={labelText}>• {category}</div>
          </div>

          <div style={titleStyle}>{title}</div>

          {description && (
            <div style={descStyle}>
              {description.length > 120 ? description.substring(0, 120) + '...' : description}
            </div>
          )}

          <div style={footerWrap}>
            <div style={footerLogo}>
              <span style={footerBrand}>Log</span>OS
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
