import { Heart, Stethoscope, Syringe, Shield, HandHeart } from 'lucide-react';
import useScrollReveal from './useScrollReveal';

const SERVICES_IMAGE = "https://media.base44.com/images/public/6a2091c60722d8d712f983eb/20083d328_generated_bc0f7adc.png";

const careItems = [
  { icon: Heart, label: 'Soins d\'hygiène et de confort', desc: 'Toilette, lever, coucher — dans le respect de votre intimité.' },
  { icon: Stethoscope, label: 'Pansements et soins de plaies', desc: 'Suivi rigoureux et cicatrisation optimale.' },
  { icon: Syringe, label: 'Injections et bilans sanguins', desc: 'Prélèvements, injections, vaccinations à domicile.' },
  { icon: Shield, label: 'Surveillance et prévention', desc: 'Suivi des traitements et éducation thérapeutique.' },
  { icon: HandHeart, label: 'Soins palliatifs', desc: 'Accompagnement avec humanité et dignité.' },
];

export default function Services() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="soins" className="py-24 md:py-32 bg-white">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-cim-pine font-semibold text-sm tracking-widest uppercase">
              Nos soins
            </span>
            <h2 className="mt-4 font-heading font-bold text-3xl md:text-4xl text-cim-deep leading-tight">
              Des soins infirmiers complets,
              <span className="text-cim-pine"> à votre domicile</span>
            </h2>
            <p className="mt-6 text-lg text-cim-deep/70 leading-relaxed">
              Notre équipe d'infirmiers diplômés d'État intervient à votre domicile sur l'ensemble 
              de la commune de Mougins. Nous réalisons tous les soins prescrits par votre médecin, 
              avec professionnalisme et bienveillance. Chaque patient est unique, et nous adaptons 
              notre prise en charge à vos besoins spécifiques.
            </p>

            <div className="mt-10 space-y-5">
              {careItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-cim-mist/50 transition-all duration-300 group cursor-default"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-cim-mist flex items-center justify-center group-hover:bg-cim-pine group-hover:text-white transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-cim-pine group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cim-deep">{item.label}</h3>
                    <p className="text-sm text-cim-deep/60 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-cim-mist rounded-full blur-3xl opacity-60" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-cim-sand rounded-full blur-3xl opacity-60" />
            <img
              src={SERVICES_IMAGE}
              alt="Matériel médical professionnel pour soins infirmiers"
              className="relative rounded-3xl shadow-xl w-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}