import { useState } from 'react';
import { Stethoscope, Syringe, Shield, HandHeart, ArrowRight } from 'lucide-react';
import useScrollReveal from './useScrollReveal';
import ServiceModal from './ServiceModal';

export const careItems = [
  {
    id: 'pansements',
    icon: Stethoscope,
    label: 'Pansements et soins de plaies',
    desc: 'Suivi rigoureux et cicatrisation optimale.',
    detail: "Nous prenons en charge la réfection de pansements simples et complexes : plaies chirurgicales, ulcères veineux ou artériels, escarres, brûlures. Nous assurons un suivi photographique et un compte-rendu régulier à votre médecin pour garantir une cicatrisation dans les meilleures conditions.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=700&q=80",
  },
  {
    id: 'injections',
    icon: Syringe,
    label: 'Injections et bilans sanguins',
    desc: 'Prélèvements, injections, vaccinations à domicile.',
    detail: "Nous effectuons l'ensemble des actes techniques à votre domicile : injections intramusculaires et sous-cutanées, pose et surveillance de perfusions, prélèvements sanguins pour bilan biologique, et vaccinations. Les résultats sont transmis directement à votre médecin.",
    image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=700&q=80",
  },
  {
    id: 'surveillance',
    icon: Shield,
    label: 'Surveillance et prévention',
    desc: 'Suivi des traitements et éducation thérapeutique.',
    detail: "Nous assurons la surveillance de paramètres vitaux (tension, glycémie, saturation), la préparation et administration de traitements médicamenteux, la surveillance post-opératoire, et l'éducation thérapeutique du patient et de ses aidants. Nous sommes votre lien privilégié avec votre équipe médicale.",
    image: "https://media.base44.com/images/public/6a2091c60722d8d712f983eb/43199e1da_image_2026-06-08_154053376.png",
  },
  {
    id: 'palliatifs',
    icon: HandHeart,
    label: 'Soins palliatifs',
    desc: 'Accompagnement avec humanité et dignité.',
    detail: "Nous accompagnons les patients en fin de vie et leurs familles avec toute l'humanité et la bienveillance que mérite cette période. Soins de confort, gestion de la douleur, soutien moral, coordination avec l'équipe soignante et les services spécialisés (HAD, EMSP) — nous sommes à vos côtés.",
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=700&q=80",
  },
];

export default function Services() {
  const [selected, setSelected] = useState(null);
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="soins" className="py-24 md:py-32 bg-white">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      >
        <div className="space-y-4">
          {careItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelected(item)}
              className="w-full flex items-center gap-4 p-5 rounded-2xl bg-cim-mist/20 border border-cim-mist hover:bg-cim-mist/50 hover:border-cim-pine/30 hover:shadow-md transition-all duration-300 group text-left"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cim-mist flex items-center justify-center group-hover:bg-cim-pine transition-colors duration-300">
                <item.icon className="w-5 h-5 text-cim-pine group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-cim-deep">{item.label}</h3>
                <p className="text-sm text-cim-deep/60 mt-0.5">{item.desc}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-cim-pine/40 group-hover:text-cim-pine group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
            </button>
          ))}
        </div>
      </div>

      {selected && <ServiceModal item={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}