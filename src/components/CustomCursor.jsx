import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const raf = useRef(null);

  useEffect(() => {
    // Only activate on pointer:fine devices (desktop)
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      ringPos.current.x = lerp(ringPos.current.x, pos.current.x, 0.13);
      ringPos.current.y = lerp(ringPos.current.y, pos.current.y, 0.13);
      ring.style.left = ringPos.current.x + 'px';
      ring.style.top = ringPos.current.y + 'px';
      raf.current = requestAnimationFrame(animate);
    };

    const onEnterLink = () => {
      dot.classList.add('scale-150');
      ring.classList.add('!w-12', '!h-12', '!border-cim-pine', '!opacity-60');
    };

    const onLeaveLink = () => {
      dot.classList.remove('scale-150');
      ring.classList.remove('!w-12', '!h-12', '!border-cim-pine', '!opacity-60');
    };

    document.addEventListener('mousemove', onMove);
    raf.current = requestAnimationFrame(animate);

    // Hover effects on interactive elements
    const interactives = document.querySelectorAll('a, button, [role="button"]');
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onEnterLink);
      el.addEventListener('mouseleave', onLeaveLink);
    });

    // Observe new elements
    const observer = new MutationObserver(() => {
      document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
        el.removeEventListener('mouseenter', onEnterLink);
        el.removeEventListener('mouseleave', onLeaveLink);
        el.addEventListener('mouseenter', onEnterLink);
        el.addEventListener('mouseleave', onLeaveLink);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Small solid dot */}
      <div
        ref={dotRef}
        id="custom-cursor"
        className="w-2.5 h-2.5 rounded-full bg-cim-pine transition-transform duration-150"
        style={{ position: 'fixed', pointerEvents: 'none', zIndex: 9999, transform: 'translate(-50%, -50%)' }}
      />
      {/* Lagging ring */}
      <div
        ref={ringRef}
        id="custom-cursor"
        className="w-8 h-8 rounded-full border-2 border-cim-pine/40 opacity-40 transition-all duration-200"
        style={{ position: 'fixed', pointerEvents: 'none', zIndex: 9998, transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
}