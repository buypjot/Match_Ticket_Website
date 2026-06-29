import React from 'react';

// Standalone Mark component (defined outside Logo to comply with React hook rules)
const Mark = ({ size = 100, c, gradId }) => {
  return (
    <g transform={`scale(${size / 100})`}>
      <defs>
        <linearGradient id={gradId} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="49.8%" stopColor={c.puzzleWhite} />
          <stop offset="50.2%" stopColor={c.puzzleLime} />
        </linearGradient>
      </defs>
      
      {/* Puzzle piece path */}
      <path
        d="M 25 25 L 43 25 C 42 22, 36 21, 36 15 C 36 8, 41 7, 50 7 C 59 7, 64 8, 64 15 C 64 21, 58 22, 57 25 L 75 25 L 75 43 C 72 42, 71 36, 65 36 C 57 36, 58 41, 58 50 C 58 59, 57 64, 65 64 C 71 64, 72 58, 75 57 L 75 75 L 57 75 C 58 72, 64 71, 64 65 C 64 57, 59 58, 50 58 C 41 58, 36 57, 36 65 C 36 71, 42 72, 43 75 L 25 75 L 25 57 C 22 58, 21 64, 15 64 C 7 64, 8 59, 8 50 C 8 41, 7 36, 15 36 C 21 36, 22 42, 25 43 Z"
        fill={`url(#${gradId})`}
        stroke={c.puzzleBorder !== 'none' ? c.puzzleBorder : undefined}
        strokeWidth={c.puzzleBorder !== 'none' ? 1.5 : undefined}
      />

      {/* Player silhouette */}
      <circle cx="44.5" cy="31.1" r="3.6" fill={c.player} />
      <path
        d="M 37.8,37.5 C 36.6,38.8 35.8,40.7 35.7,42.7 C 35.5,45.3 36.6,48.0 38.0,50.3 C 39.5,52.6 41.5,54.6 43.6,56.5 C 41.8,60.1 39.5,63.5 36.4,65.8 C 35.4,66.6 34.1,67.3 34.0,68.7 C 33.8,70.5 35.9,71.2 37.3,71.5 C 39.3,71.9 41.2,71.0 42.6,69.5 C 44.7,67.3 46.1,64.4 47.3,61.5 C 49.3,62.5 51.5,63.4 53.8,64.2 C 56.4,65.1 59.2,65.8 61.9,66.1 C 63.3,66.3 65.2,66.8 66.2,65.6 C 67.2,64.4 65.9,62.8 65.0,62.0 C 62.9,60.1 60.5,58.6 57.9,57.4 C 55.4,56.2 52.8,55.3 50.1,54.7 C 49.5,52.3 49.0,49.8 48.7,47.3 C 48.4,44.9 48.3,42.3 47.9,39.9 C 47.6,38.4 46.8,36.5 45.1,36.1 C 43.5,35.7 42.1,36.9 40.9,37.8 Z"
        fill={c.player}
      />
      
      {/* Left arm */}
      <path
        d="M 34.0,38.5 C 31.0,40.0 27.5,41.2 24.5,43.0 C 23.5,43.6 22.1,44.5 22.5,45.9 C 22.8,47.1 24.4,47.0 25.4,46.5 C 28.1,45.1 30.7,43.5 33.3,42.0 C 34.5,41.3 35.7,40.1 35.1,38.8 C 34.8,38.1 34.4,38.3 34.0,38.5 Z"
        fill={c.player}
      />

      {/* Right arm */}
      <path
        d="M 46.5,37.0 C 49.0,36.0 51.5,34.5 54.0,33.0 C 55.0,32.4 56.5,31.5 57.5,32.5 C 58.5,33.5 57.5,35.0 56.5,36.0 C 54.0,38.5 51.0,41.0 48.0,43.0 Z"
        fill={c.player}
      />

      {/* Ball */}
      <circle cx="70" cy="64" r="3.5" fill={c.ball} />
    </g>
  );
};

/**
 * Match Ticket Logo SVG Component (New Puzzle Piece Design)
 */
export default function Logo({ variant = 'full', theme = 'dark', height = 40 }) {
  // Call useId at the top level of the component unconditionally
  const rawId = React.useId();
  const gradId = `puzzle-grad-${rawId.replace(/:/g, '')}`;

  const T = {
    dark: {
      puzzleWhite: '#ffffff',
      puzzleLime: '#CAFF00',
      player: '#000000',
      ball: '#000000',
      matchText: '#ffffff',
      ticketText: '#CAFF00',
      tagText: 'rgba(255, 255, 255, 0.45)',
      tagDot: '#CAFF00',
      bannerBg: '#ffffff',
      bannerText: '#000000',
      bannerLine: '#CAFF00',
      puzzleBorder: 'none',
    },
    light: {
      puzzleWhite: '#ffffff',
      puzzleLime: '#CAFF00',
      player: '#060610',
      ball: '#060610',
      matchText: '#060610',
      ticketText: '#CAFF00',
      tagText: 'rgba(6, 6, 16, 0.55)',
      tagDot: '#CAFF00',
      bannerBg: '#060610',
      bannerText: '#ffffff',
      bannerLine: '#CAFF00',
      puzzleBorder: '#d4d4d8',
    },
    lime: {
      puzzleWhite: '#ffffff',
      puzzleLime: '#060610',
      player: '#CAFF00',
      ball: '#CAFF00',
      matchText: '#060610',
      ticketText: '#060610',
      tagText: 'rgba(6, 6, 16, 0.65)',
      tagDot: '#060610',
      bannerBg: '#060610',
      bannerText: '#CAFF00',
      bannerLine: '#ffffff',
      puzzleBorder: 'none',
    },
  };

  const c = T[theme] || T.dark;

  // 1. Icon Only variant (Square)
  if (variant === 'icon') {
    return (
      <svg width={height} height={height} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Match Ticket" role="img" style={{ display: 'block' }}>
        <title>Match Ticket Icon</title>
        <Mark size={100} c={c} gradId={gradId} />
      </svg>
    );
  }

  // 2. Stacked variant (Vertical)
  if (variant === 'stacked') {
    const W = height * 1.25;
    const H = height;
    return (
      <svg width={W} height={H} viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg" aria-label="Match Ticket" role="img" style={{ display: 'block' }}>
        <title>Match Ticket — India's Turf Booking Platform</title>
        {/* Centered Mark */}
        <g transform="translate(90, 10)">
          <Mark size={120} c={c} gradId={gradId} />
        </g>
        
        {/* Wordmark (Skewed italic) */}
        <g transform="skewX(-12)">
          <text x={150 + 35} y={165} fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="36" letterSpacing="0.5" textAnchor="middle">
            <tspan fill={c.matchText}>MATCH</tspan>
            <tspan fill={c.ticketText}>TICKET</tspan>
          </text>
        </g>

        {/* Tagline */}
        <g>
          <text x={150} y={190} fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700" fontSize="12" letterSpacing="1.2" fill={c.tagText} textAnchor="middle">
            List<tspan fill={c.tagDot} fontWeight="900">.</tspan> Manage<tspan fill={c.tagDot} fontWeight="900">.</tspan> Earn<tspan fill={c.tagDot} fontWeight="900">.</tspan>
          </text>
          <line x1="35" y1="186" x2="95" y2="186" stroke={c.tagText} strokeWidth="1" opacity="0.3" />
          <line x1="205" y1="186" x2="265" y2="186" stroke={c.tagText} strokeWidth="1" opacity="0.3" />
        </g>

        {/* Sub-tagline Slanted Banner */}
        <g>
          <polygon points="15,205 285,205 279,223 9,223" fill={c.bannerBg} />
          <line x1="7" y1="227" x2="275" y2="227" stroke={c.bannerLine} strokeWidth="2.5" />
          <text x="147" y="217" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="8" letterSpacing="0.8" fill={c.bannerText} textAnchor="middle">
            ALL-IN-ONE GROUND BOOKING MANAGEMENT APP
          </text>
        </g>
      </svg>
    );
  }

  // 3. Full variant (Horizontal layout)
  const aspect = 3.8;
  const W = height * aspect;
  return (
    <svg width={W} height={height} viewBox="0 0 380 100" xmlns="http://www.w3.org/2000/svg" aria-label="Match Ticket" role="img" style={{ display: 'block' }}>
      <title>Match Ticket — India's Turf Booking Platform</title>
      
      {/* Icon Mark */}
      <g transform="translate(5, 5)">
        <Mark size={90} c={c} gradId={gradId} />
      </g>

      {/* Wordmark (Skewed italic) */}
      <g transform="skewX(-12)">
        <text x={115 + 10} y={42} fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="34" letterSpacing="0.5">
          <tspan fill={c.matchText}>MATCH</tspan>
          <tspan fill={c.ticketText}>TICKET</tspan>
        </text>
      </g>

      {/* Tagline */}
      <g>
        <text x={242.5} y={62} fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700" fontSize="11" letterSpacing="1.2" fill={c.tagText} textAnchor="middle">
          List<tspan fill={c.tagDot} fontWeight="900">.</tspan> Manage<tspan fill={c.tagDot} fontWeight="900">.</tspan> Earn<tspan fill={c.tagDot} fontWeight="900">.</tspan>
        </text>
        <line x1="115" y1="58" x2="185" y2="58" stroke={c.tagText} strokeWidth="1" opacity="0.3" />
        <line x1="300" y1="58" x2="370" y2="58" stroke={c.tagText} strokeWidth="1" opacity="0.3" />
      </g>

      {/* Sub-tagline Slanted Banner */}
      <g>
        <polygon points="40,72 350,72 344,90 34,90" fill={c.bannerBg} />
        <line x1="32" y1="94" x2="340" y2="94" stroke={c.bannerLine} strokeWidth="2.5" />
        <text x="192" y="84" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="8.2" letterSpacing="0.8" fill={c.bannerText} textAnchor="middle">
          ALL-IN-ONE GROUND BOOKING MANAGEMENT APP
        </text>
      </g>
    </svg>
  );
}
