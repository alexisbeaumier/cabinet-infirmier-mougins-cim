import { Star } from 'lucide-react';
import useScrollReveal from './useScrollReveal';

const testimonials = [
  {
    name: 'Marie-Hélène B.',
    since: 'Patiente depuis 2 ans',
    text: 'Une équipe remarquable, toujours ponctuelle et très professionnelle. Les soins sont réalisés avec douceur et bienveillance. Je recommande vivement le Cabinet Infirmier Mougins.',
    stars: 5,
  },
  {
    name: 'Jean-Pierre F.',
    since: 'Patiente depuis 1 an',
    text: 'Après mon opération, j\'ai bénéficié de soins à domicile pendant plusieurs semaines. L\'équipe a été d\'un soutien précieux, toujours disponible et à l\'écoute. Merci infiniment.',
    stars: 5,
  },
  {
    name: 'Claudette M.',
    since: 'Patiente depuis 3 ans',
    text: 'Mon mari est suivi régulièrement pour ses injections et bilans sanguins. Nous apprécions beaucoup la gentillesse et le professionnalisme de toute l\'équipe. Un grand merci.',
    stars: 5,
  },
  {
    name: 'Robert T.',
    since: 'Patient depuis 6 mois',
    text: 'Très satisfait de la prise en charge. Les infirmières sont discrètes, efficaces et toujours souriantes. C\'est rassurant de pouvoir compter sur une telle équipe près de chez soi.',
    stars: 5,
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 bg-white">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      >
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-cim-pine font-semibold text-sm tracking-widest uppercase">
            Témoignages
          </span>
          <h2 className="mt-4 font-heading font-bold text-3xl md:text-4xl text-cim-deep leading-tight">
            Ce que disent <span className="text-cim-pine">nos patients</span>
          </h2>
          <p className="mt-4 text-lg text-cim-deep/70">
            La confiance de nos patients est notre plus belle récompense.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-cim-mist/30 border border-cim-mist rounded-3xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-cim-pine text-cim-pine" />
                ))}
              </div>
              <p className="text-cim-deep/80 leading-relaxed italic mb-6">
                « {t.text} »
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cim-pine flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-cim-deep">{t.name}</p>
                  <p className="text-xs text-cim-deep/50">{t.since}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}