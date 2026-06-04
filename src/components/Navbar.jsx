import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Accueil', to: '/' },
  { label: 'Nos soins', to: '/nos-soins' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-[3px] left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-1">
            <img
              src="https://media.base44.com/images/public/6a2091c60722d8d712f983eb/0cefa2985_generated_image.png"
              alt="Logo Cabinet Infirmier Mougins"
              className="w-16 h-16 rounded-full object-cover"
            />
            <span className="font-heading font-semibold text-lg hidden sm:block text-cim-deep">
              Cabinet <span className="text-cim-pine">Infirmier</span> Mougins
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative text-sm font-medium transition-colors group ${
                  location.pathname === link.to
                    ? 'text-orange-500 font-semibold'
                    : 'text-cim-deep/70 hover:text-orange-500'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-orange-500 transition-all duration-300 rounded-full ${
                    location.pathname === link.to ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
            <a
              href="tel:+33612345678"
              className="flex items-center gap-2 bg-cim-pine text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-cim-deep transition-colors"
            >
              <Phone className="w-4 h-4" />
              06 12 34 56 78
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-cim-deep"
            aria-label="Menu"
          >
            <span className="flex items-center gap-2">
              <span className="text-sm font-medium">Menu</span>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-cim-mist">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`block w-full text-left text-base font-medium py-2 transition-colors ${
                  location.pathname === link.to ? 'text-cim-pine' : 'text-cim-deep hover:text-cim-pine'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+33612345678"
              className="flex items-center justify-center gap-2 bg-cim-pine text-white px-5 py-3 rounded-full text-base font-semibold mt-2"
            >
              <Phone className="w-4 h-4" />
              06 12 34 56 78
            </a>
          </div>
        </div>
      )}
    </header>
  );
}