import { Clock, Eye, HeartHandshake } from 'lucide-react';
import useScrollReveal from './useScrollReveal';

const COMMITMENT_IMAGE = "https://media.base44.com/images/public/6a2091c60722d8d712f983eb/b882a9527_generated_ceea3614.png";

const values = [
  {
    icon: Eye,
    title: 'Discrétion',
    desc: 'Nous intervenons en toute confidentialité, dans le respect de votre vie privée et de celle de vos proches.',
  },
  {
    icon: Clock,
    title: 'Ponctualité',
    desc: 'Votre temps est précieux. Nous nous engageons à respecter les horaires convenus pour chaque passage.',
  },
  {
    icon: HeartHandshake,
    title: 'Écoute',
    desc: 'Chaque patient mérite une attention particulière. Nous prenons le temps d\'écouter et de comprendre vos besoins.',
  },
];

export default function Commitment() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="engagement" className="py-24 md:py-32 bg-cim-sand/50">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      >
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-cim-pine font-semibold text-sm tracking-widest uppercase">
            Notre engagement
          </span>
          <h2 className="mt-4 font-heading font-bold text-3xl md:text-4xl text-cim-deep leading-tight">
            Des valeurs au cœur de <span className="text-cim-pine">notre pratique</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-cim-mist flex items-center justify-center mb-6 group-hover:bg-cim-pine transition-colors duration-300">
                <v.icon className="w-7 h-7 text-cim-pine group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-bold text-xl text-cim-deep mb-3">{v.title}</h3>
              <p className="text-cim-deep/65 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="relative rounded-3xl overflow-hidden max-w-4xl mx-auto">
          <img
            src={COMMITMENT_IMAGE}
            alt="Infirmière souriante accompagnant un patient à domicile"
            className="w-full object-cover aspect-[3/2]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cim-deep/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <p className="text-white text-lg md:text-xl font-medium leading-relaxed max-w-xl">
              « Nous croyons que des soins de qualité commencent par une relation de confiance. 
              Votre bien-être est notre priorité, chaque jour. »
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}