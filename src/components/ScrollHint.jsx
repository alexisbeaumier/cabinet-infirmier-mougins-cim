import { ChevronDown } from 'lucide-react';

export default function ScrollHint({ dark = false }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className={`text-xs font-medium tracking-widest uppercase ${dark ? 'text-white/60' : 'text-cim-deep/50'}`}>
        Scroll
      </span>
      <ChevronDown
        className={`w-6 h-6 ${dark ? 'text-white/60' : 'text-cim-pine'}`}
        style={{ animation: 'arrowBounce 1.5s ease-in-out infinite' }}
      />
      <style>{`
        @keyframes arrowBounce {
          0%, 100% { transform: translateY(0);   opacity: 1; }
          50%       { transform: translateY(6px); opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}