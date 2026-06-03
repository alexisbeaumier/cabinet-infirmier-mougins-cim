import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    if (!isHome) return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Nos soins', id: 'soins' },
    { label: 'Notre engagement', id: 'engagement' },
    { label: 'Localisation', id: 'localisation' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-[3px] left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://media.base44.com/images/public/6a2091c60722d8d712f983eb/0cefa2985_generated_image.png"
              alt="Logo Cabinet Infirmier Mougins"
              className="w-12 h-12 rounded-full object-cover"
            />
            <span className="font-heading font-semibold text-lg hidden sm:block text-cim-deep">
              Cabinet <span className="text-cim-pine">Infirmier</span> Mougins
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              isHome ? (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm font-medium text-cim-deep/70 hover:text-cim-pine transition-colors"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.id}
                  to={`/#${link.id}`}
                  className="text-sm font-medium text-cim-deep/70 hover:text-cim-pine transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
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
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-cim-mist">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-base font-medium text-cim-deep py-2 hover:text-cim-pine transition-colors"
              >
                {link.label}
              </button>
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