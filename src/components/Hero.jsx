import { Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollHint from './ScrollHint';

const HERO_IMAGE = "https://media.base44.com/images/public/6a2091c60722d8d712f983eb/0e9db6967_generated_d02f9faa.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Infirmière accompagnant une personne âgée à domicile"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/30" />
      </div>

      <div className="relative z-10 max-w-7xl px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cim-mist/80 backdrop-blur-sm text-cim-pine text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-cim-pine" />
            Mougins (06250)
          </div>

          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cim-deep leading-tight tracking-tight">
            Cabinet Infirmier
            <span className="block text-cim-pine">Mougins</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-cim-deep/70 leading-relaxed max-w-lg">
            Soins infirmiers à domicile sur Mougins. Une équipe à votre écoute, 
            pour des soins de qualité dans le confort de votre foyer.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+33612345678"
              className="inline-flex items-center justify-center gap-3 bg-cim-pine text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-400/30 hover:bg-cim-deep"
            >
              <Phone className="w-5 h-5" />
              Appeler maintenant
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 bg-white/80 backdrop-blur-sm text-cim-deep border-2 border-cim-deep/15 px-8 py-4 rounded-full text-lg font-semibold hover:border-cim-pine hover:text-cim-pine transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Nous contacter
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <ScrollHint />
      </div>
    </section>
  );
}