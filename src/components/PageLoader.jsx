import React, { useState, useEffect } from 'react';

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade-out after a short delay once page assets are ready
    const fadeTimer = setTimeout(() => setFadeOut(true), 600);
    // Remove from DOM after fade completes
    const removeTimer = setTimeout(() => setVisible(false), 1000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
        transition: 'opacity 0.4s ease',
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? 'none' : 'all',
      }}
    >
      {/* Outer glow ring */}
      <div style={{ position: 'relative', width: 96, height: 96 }}>
        {/* Spinning gradient arc */}
        <div style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          padding: 3,
          background: 'conic-gradient(from 0deg, #0ea5e9, #8b5cf6, #ec4899, #0ea5e9)',
          animation: 'spin 1.1s linear infinite',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }} />

        {/* Inner dark circle */}
        <div style={{
          position: 'absolute',
          inset: 4,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #1e1b4b, #0f172a)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {/* Lightning bolt icon */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z"
              fill="url(#bolt-grad)"
              stroke="none"
            />
            <defs>
              <linearGradient id="bolt-grad" x1="4.5" y1="2" x2="19.5" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0ea5e9" />
                <stop offset="1" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Brand name */}
      <p style={{
        marginTop: 20,
        fontSize: 22,
        fontWeight: 700,
        fontFamily: "'Inter', system-ui, sans-serif",
        letterSpacing: '0.05em',
        background: 'linear-gradient(to right, #0ea5e9, #8b5cf6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        ZingQR
      </p>

      {/* Subtitle */}
      <p style={{
        marginTop: 6,
        fontSize: 13,
        color: 'rgba(148,163,184,0.7)',
        fontFamily: "'Inter', system-ui, sans-serif",
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
      }}>
        Loading…
      </p>

      {/* Keyframes injected inline */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
