import { useRef } from 'react';

const items = [
  { icon: '🕐', label: 'Soins 7j/7' },
  { icon: '✅', label: 'Conventionné Secteur 1' },
  { icon: '⭐', label: '4.9/5 sur Google' },
  { icon: '📍', label: 'Mougins & alentours' },
  { icon: '🩺', label: 'Infirmiers diplômés d\'État' },
  { icon: '💊', label: 'Prises en charge 100%' },
  { icon: '🤝', label: 'Suivi personnalisé' },
  { icon: '📋', label: 'Sur prescription médicale' },
];

// Duplicate for seamless loop
const track = [...items, ...items];

export default function TrustBar() {
  return (
    <div className="relative overflow-hidden bg-cim-deep py-3 border-t border-white/5">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-cim-deep to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-cim-deep to-transparent z-10 pointer-events-none" />

      <div
        className="flex gap-0"
        style={{
          display: 'flex',
          width: 'max-content',
          animation: 'trust-scroll 32s linear infinite',
        }}
      >
        {track.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-6 text-sm font-medium text-white/80 whitespace-nowrap select-none"
          >
            <span className="text-base">{item.icon}</span>
            <span>{item.label}</span>
            <span className="ml-6 text-cim-pine/60">•</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes trust-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}