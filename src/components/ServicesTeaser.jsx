import { Link } from 'react-router-dom';
import { Heart, Stethoscope, Syringe, Shield, HandHeart, ArrowRight } from 'lucide-react';
import useScrollReveal from './useScrollReveal';

const careItems = [
  { icon: Heart, label: 'Soins d\'hygiène et de confort' },
  { icon: Stethoscope, label: 'Pansements et soins de plaies' },
  { icon: Syringe, label: 'Injections et bilans sanguins' },
  { icon: Shield, label: 'Surveillance et prévention' },
  { icon: HandHeart, label: 'Soins palliatifs' },
];

export default function ServicesTeaser() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 bg-cim-sand/40">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      >
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-cim-pine font-semibold text-sm tracking-widest uppercase">
            Nos soins
          </span>
          <h2 className="mt-4 font-heading font-bold text-3xl md:text-4xl text-cim-deep leading-tight">
            Des soins à domicile,
            <span className="text-cim-pine"> adaptés à chacun</span>
          </h2>
          <p className="mt-4 text-lg text-cim-deep/70">
            Notre équipe d'infirmiers diplômés d'État réalise tous les soins prescrits par votre médecin, 
            directement à votre domicile sur Mougins.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {careItems.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-cim-mist flex items-center justify-center mx-auto mb-4 group-hover:bg-cim-pine transition-colors duration-300">
                <item.icon className="w-5 h-5 text-cim-pine group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-sm font-medium text-cim-deep text-center leading-snug">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/nos-soins"
            className="inline-flex items-center gap-3 bg-cim-pine text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-cim-deep transition-all duration-300 hover:shadow-lg hover:shadow-cim-pine/20"
          >
            Découvrir tous nos soins
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}