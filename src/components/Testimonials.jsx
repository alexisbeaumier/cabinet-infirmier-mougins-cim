import { useState, useRef, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import useScrollReveal from './useScrollReveal';

const testimonials = [
  {
    name: 'Martine B.',
    duration: 'Patiente depuis 2 ans',
    text: 'Une équipe exceptionnelle, toujours disponible et à l\'écoute. Les soins sont réalisés avec beaucoup de douceur et de professionnalisme. Je recommande vivement le cabinet.',
    rating: 5,
    initials: 'MB',
    color: 'bg-cim-pine',
  },
  {
    name: 'Jean-Pierre L.',
    duration: 'Prise en charge post-opératoire',
    text: 'Suite à mon opération, j\'ai bénéficié de soins quotidiens à domicile. La ponctualité et la gentillesse de toute l\'équipe m\'ont permis de récupérer sereinement.',
    rating: 5,
    initials: 'JL',
    color: 'bg-cim-deep',
  },
  {
    name: 'Sylvie M.',
    duration: 'Aidante familiale',
    text: 'Pour ma mère âgée, trouver des infirmiers de confiance était essentiel. L\'équipe du cabinet est parfaite : professionnelle, humaine et rassurante. Un grand merci !',
    rating: 5,
    initials: 'SM',
    color: 'bg-orange-500',
  },
  {
    name: 'Robert D.',
    duration: 'Soins réguliers diabète',
    text: 'Suivi rigoureux, toujours dans les temps, et des explications claires sur mon traitement. Ces infirmiers font vraiment partie de mon quotidien avec bienveillance.',
    rating: 5,
    initials: 'RD',
    color: 'bg-cim-pine',
  },
  {
    name: 'Catherine F.',
    duration: 'Patiente depuis 6 mois',
    text: 'Je n\'avais jamais eu recours à des soins à domicile auparavant. Quelle découverte ! Confort, qualité et sympathie sont au rendez-vous à chaque visite.',
    rating: 5,
    initials: 'CF',
    color: 'bg-cim-deep',
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'fill-orange-400 text-orange-400' : 'text-gray-200'}`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef(null);
  const { ref, isVisible } = useScrollReveal();

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  // Auto-advance
  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, []);

  // Touch/drag
  const onPointerDown = (e) => { dragStart.current = e.clientX; setDragging(false); };
  const onPointerMove = (e) => { if (dragStart.current !== null && Math.abs(e.clientX - dragStart.current) > 8) setDragging(true); };
  const onPointerUp = (e) => {
    if (dragStart.current !== null) {
      const delta = e.clientX - dragStart.current;
      if (Math.abs(delta) > 40) delta < 0 ? next() : prev();
    }
    dragStart.current = null;
  };

  const t = testimonials[active];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      >
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-cim-pine font-semibold text-sm tracking-widest uppercase">Avis patients</span>
          <h2 className="mt-4 font-heading font-bold text-3xl md:text-4xl text-cim-deep leading-tight">
            Ce que disent <span className="text-cim-pine">nos patients</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
              ))}
            </div>
            <span className="font-bold text-cim-deep text-lg">4.9</span>
            <span className="text-cim-deep/50 text-sm">· {testimonials.length} avis Google</span>
          </div>
        </div>

        {/* Card */}
        <div
          className="relative select-none cursor-grab active:cursor-grabbing"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          <div
            key={active}
            className="bg-cim-mist/40 rounded-3xl p-8 md:p-12 border border-cim-mist shadow-sm"
            style={{ animation: 'fadeSlideIn 0.4s ease forwards' }}
          >
            <Quote className="w-10 h-10 text-cim-pine/20 mb-4" />
            <p className="text-xl md:text-2xl text-cim-deep leading-relaxed font-light mb-8">
              "{t.text}"
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-cim-deep">{t.name}</p>
                  <p className="text-sm text-cim-deep/50">{t.duration}</p>
                </div>
              </div>
              <StarRating rating={t.rating} />
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-cim-deep hover:text-cim-pine hover:shadow-lg transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-cim-deep hover:text-cim-pine hover:shadow-lg transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                i === active ? 'w-6 h-2.5 bg-cim-pine' : 'w-2.5 h-2.5 bg-cim-mist hover:bg-cim-pine/40'
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}