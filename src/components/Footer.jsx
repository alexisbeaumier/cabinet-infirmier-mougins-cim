import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-cim-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-cim-pine flex items-center justify-center">
                <span className="text-white font-bold text-xs">CIMS</span>
              </div>
              <span className="font-heading font-bold text-lg">Cabinet Infirmier Mouginois</span>
            </div>
            <p className="text-white/60 leading-relaxed">
              Soins infirmiers à domicile sur Mougins et ses environs. 
              Une équipe diplômée d'État, à votre écoute et à votre service.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact</h4>
            <div className="space-y-4">
              <a href="tel:+33612345678" className="flex items-center gap-3 text-white/70 hover:text-cim-pine transition-colors">
                <Phone className="w-4 h-4" />
                06 12 34 56 78
              </a>
              <a href="mailto:contact@cabinet-infirmier-mougins.fr" className="flex items-center gap-3 text-white/70 hover:text-cim-pine transition-colors">
                <Mail className="w-4 h-4" />
                contact@cabinet-infirmier-mougins.fr
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>1279 bd Georges Courteline<br />06250 Mougins</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Informations</h4>
            <div className="space-y-3">
              <Link to="/mentions-legales" className="block text-white/70 hover:text-cim-pine transition-colors">
                Mentions légales
              </Link>
              <p className="text-white/50 text-sm mt-6">
                Horaires : Lun–Ven 8h–19h, Sam 9h–12h
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Cabinet Infirmier Mouginois. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}