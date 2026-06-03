import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';

export default function MentionsLegales() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar />

      <main className="pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-cim-pine hover:text-cim-deep transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>

          <h1 className="font-heading font-bold text-3xl md:text-4xl text-cim-deep mb-12">
            Mentions légales
          </h1>

          <div className="prose prose-lg max-w-none text-cim-deep/80 space-y-8">
            <section>
              <h2 className="font-heading font-bold text-xl text-cim-deep">Éditeur du site</h2>
              <p>
                <strong>Cabinet Infirmier Mougins (CIM)</strong><br />
                1279 boulevard Georges Courteline<br />
                06250 Mougins<br />
                Téléphone : <a href="tel:+33612345678" className="text-cim-pine hover:underline">06 12 34 56 78</a><br />
                Email : <a href="mailto:contact@cabinet-infirmier-mougins.fr" className="text-cim-pine hover:underline">contact@cabinet-infirmier-mougins.fr</a>
              </p>
              <p>
                Profession réglementée : Infirmier(e) Diplômé(e) d'État<br />
                Inscrit(e) à l'Ordre National des Infirmiers
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-cim-deep">Hébergeur</h2>
              <p>
                Netlify, Inc.<br />
                2325 3rd Street, Suite 296<br />
                San Francisco, California 94107<br />
                États-Unis
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-cim-deep">Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes) 
                est la propriété exclusive du Cabinet Infirmier Mougins, sauf mention contraire. 
                Toute reproduction, distribution, modification ou utilisation de ces contenus 
                sans autorisation préalable est strictement interdite.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-cim-deep">Protection des données personnelles</h2>
              <p>
                Les informations recueillies via le formulaire de contact sont destinées 
                exclusivement au Cabinet Infirmier Mougins dans le cadre de la prise en charge 
                de votre demande de soins. Conformément au Règlement Général sur la Protection 
                des Données (RGPD) et à la loi « Informatique et Libertés », vous disposez 
                d'un droit d'accès, de rectification, de suppression et d'opposition aux données 
                vous concernant. Pour exercer ces droits, vous pouvez nous contacter à l'adresse : 
                <a href="mailto:contact@cabinet-infirmier-mougins.fr" className="text-cim-pine hover:underline"> contact@cabinet-infirmier-mougins.fr</a>.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-cim-deep">Cookies</h2>
              <p>
                Ce site n'utilise pas de cookies de tracking ou de publicité. 
                Seuls des cookies techniques strictement nécessaires au fonctionnement 
                du site peuvent être utilisés.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-cim-deep">Responsabilité</h2>
              <p>
                Le Cabinet Infirmier Mougins s'efforce d'assurer l'exactitude des informations 
                diffusées sur ce site. Toutefois, il ne peut garantir l'exactitude, la complétude 
                et l'actualité de ces informations. Le cabinet se réserve le droit de modifier 
                le contenu du site à tout moment et sans préavis.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}