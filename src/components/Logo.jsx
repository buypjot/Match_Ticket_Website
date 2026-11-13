import React from 'react';

/**
 * Match Ticket Official Logo Component
 * Renders the official new logo in high quality.
 */
export default function Logo({ variant = 'full', theme = 'dark', height = 52, className = '', style = {} }) {
  if (variant === 'icon') {
    return (
      <img
        src="/matchticket-icon.png"
        alt="Match Ticket Icon"
        height={height}
        width={height}
        className={className}
        style={{
          height: `${height}px`,
          width: `${height}px`,
          objectFit: 'contain',
          display: 'block',
          ...style,
        }}
      />
    );
  }

  // Full / horizontal variant (Navbar, Footer, etc.)
  return (
    <img
      src="/matchticket_logo_wide.png"
      alt="Match Ticket"
      height={height}
      className={className}
      style={{
        height: `${height}px`,
        width: 'auto',
        objectFit: 'contain',
        display: 'block',
        ...style,
      }}
    />
  );
}
