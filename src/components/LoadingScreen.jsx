import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const shown = sessionStorage.getItem('cim_loading_shown');
    if (shown) {
      setVisible(false);
      return;
    }
    const timer1 = setTimeout(() => setFadeOut(true), 1400);
    const timer2 = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem('cim_loading_shown', '1');
    }, 2000);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-4 animate-fade-in-up">
        <img
          src="https://media.base44.com/images/public/6a2091c60722d8d712f983eb/fae523cee_ChatGPTImageJun8202603_36_08PM.png"
          alt="Logo CIM"
          className="w-20 h-20 object-contain"
        />
        <p className="font-heading font-semibold text-cim-deep text-lg tracking-wide">
          Cabinet <span className="text-cim-pine">Infirmier</span> Mougins
        </p>
      </div>
    </div>
  );
}