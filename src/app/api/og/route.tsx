import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  const title = searchParams.get('title') || 'Trip Resource';
  const description = searchParams.get('description') || 'Découvrez cette ressource de voyage';
  const price = searchParams.get('price') || '0';
  const currency = searchParams.get('currency') || 'EUR';
  const startCity = searchParams.get('startCity') || '';
  const arrivalCity = searchParams.get('arrivalCity') || '';

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
          backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '40px',
          position: 'relative',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            opacity: 0.3,
          }}
        />

        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            maxWidth: '1000px',
            zIndex: 1,
          }}
        >
          {/* Logo/Brand */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px',
            }}
          >
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '16px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              <span
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#667eea',
                }}
              >
                🌍
              </span>
            </div>
            <span
              style={{
                fontSize: '32px',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              Trip Resources
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: 'white',
              margin: '0 0 16px 0',
              lineHeight: 1.2,
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            }}
          >
            {title}
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: '24px',
              color: 'rgba(255, 255, 255, 0.9)',
              margin: '0 0 32px 0',
              lineHeight: 1.4,
              maxWidth: '800px',
            }}
          >
            {description}
          </p>

          {/* Route Info */}
          {(startCity || arrivalCity) && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                padding: '12px 24px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
              }}
            >
              <span
                style={{
                  fontSize: '20px',
                  color: 'white',
                  fontWeight: '500',
                }}
              >
                {startCity} → {arrivalCity}
              </span>
            </div>
          )}

          {/* Price */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px 32px',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              borderRadius: '16px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            <span
              style={{
                fontSize: '36px',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              {parseInt(price).toLocaleString()} {currency}
            </span>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span
            style={{
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 0.7)',
            }}
          >
            Découvrez plus de ressources sur
          </span>
          <span
            style={{
              fontSize: '16px',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            trip-resources.com
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
} 