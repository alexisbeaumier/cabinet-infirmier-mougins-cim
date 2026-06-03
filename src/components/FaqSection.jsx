import { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import useScrollReveal from './useScrollReveal';

const faqs = [
  {
    q: 'Comment prendre rendez-vous avec le cabinet ?',
    a: 'Vous pouvez nous contacter par téléphone au 06 12 34 56 78, par email ou via le formulaire de contact sur notre site. Nous vous rappelons dans les plus brefs délais pour convenir d\'un horaire de passage.',
  },
  {
    q: 'Les soins à domicile sont-ils remboursés par la Sécurité Sociale ?',
    a: 'Oui, les soins infirmiers à domicile sont pris en charge par l\'Assurance Maladie sur prescription médicale. Selon votre situation, une prise en charge à 100% est possible (ALD, maternité, etc.). Nous sommes conventionnés secteur 1.',
  },
  {
    q: 'Dans quelle zone géographique intervenez-vous ?',
    a: 'Nous intervenons sur l\'ensemble de la commune de Mougins (06250) et ses environs immédiats. N\'hésitez pas à nous contacter pour vérifier si votre adresse est dans notre secteur d\'intervention.',
  },
  {
    q: 'Intervenez-vous le week-end et les jours fériés ?',
    a: 'Nous assurons nos soins du lundi au vendredi de 8h à 19h, et le samedi de 9h à 12h. Pour les urgences en dehors de ces horaires, nous vous orienterons vers les services adaptés.',
  },
  {
    q: 'Que faire si j\'ai besoin d\'une prescription pour les soins ?',
    a: 'La plupart des soins infirmiers nécessitent une ordonnance de votre médecin traitant. Nous pouvons vous aider à préparer la liste des soins à lui soumettre. Certains actes préventifs peuvent être réalisés sans ordonnance.',
  },
];

function FaqItem({ faq, isOpen, onToggle }) {
  const contentRef = useRef(null);

  return (
    <div className="border border-cim-mist rounded-2xl overflow-hidden bg-white">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-cim-mist/20 transition-colors duration-200"
      >
        <span className="font-semibold text-cim-deep pr-4">{faq.q}</span>
        <ChevronDown
          className={`flex-shrink-0 w-5 h-5 text-cim-pine transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
          transition: 'max-height 0.35s ease',
          overflow: 'hidden',
        }}
      >
        <p className="px-6 pb-6 text-cim-deep/70 leading-relaxed">{faq.a}</p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 bg-cim-sand/40">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      >
        <div className="text-center mb-14">
          <span className="text-cim-pine font-semibold text-sm tracking-widest uppercase">FAQ</span>
          <h2 className="mt-4 font-heading font-bold text-3xl md:text-4xl text-cim-deep leading-tight">
            Questions <span className="text-cim-pine">fréquentes</span>
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}