export default function ScrollHint({ dark = false }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <span className={`text-xs font-medium tracking-widest uppercase ${dark ? 'text-white/50' : 'text-cim-deep/40'}`}>
        Scroll
      </span>
      <div className={`w-6 h-9 rounded-full border-2 flex items-start justify-center pt-1.5 ${dark ? 'border-white/30' : 'border-cim-deep/25'}`}>
        <div className={`w-1 h-2 rounded-full ${dark ? 'bg-white/60' : 'bg-cim-pine'}`}
          style={{ animation: 'scrollDot 1.6s ease-in-out infinite' }}
        />
      </div>
      <style>{`
        @keyframes scrollDot {
          0%   { transform: translateY(0);   opacity: 1; }
          60%  { transform: translateY(10px); opacity: 0; }
          61%  { transform: translateY(0);   opacity: 0; }
          100% { transform: translateY(0);   opacity: 1; }
        }
      `}</style>
    </div>
  );
}