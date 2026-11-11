import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const offres = [
  { to: '/#offre', id: 'offre', label: 'Notre offre' },
  { to: '/#investissement-cote', id: 'investissement-cote', label: 'Investissement coté' },
  { to: '/#investissement-non-cote', id: 'investissement-non-cote', label: 'Marchés privés et immobilier' },
  { to: '/#suivi-reporting', id: 'suivi-reporting', label: 'Suivi et gouvernance' },
  { to: '/#synthese', id: 'synthese', label: 'Notre méthode' },
];

const offreIds = offres.map((o) => o.id);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOffresOpen, setIsOffresOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
      }
    );

    const relevantIds = ['hero', 'expertise', 'valeurs', 'contact', 'contact-form', ...offreIds];
    relevantIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOffresOpen(false);
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeAll = () => {
    setIsMenuOpen(false);
    setIsOffresOpen(false);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  const isActive = (id: string) => (pathname === '/' && activeSection === id ? 'active' : '');

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="container header-content">
        <Link to="/" className="logo" aria-label="Karantek, accueil" onClick={closeAll}>
          <img src="/logo-karantek.png" alt="" width={155} height={180} />
          <span className="logo-text">KARANTEK</span>
        </Link>

        <nav id="site-nav" aria-label="Navigation principale" className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/#expertise" className={`nav-item mobile-nav-main ${isActive('expertise')}`} onClick={closeAll}>Le cabinet</Link>
          <Link to="/#valeurs" className={`nav-item mobile-nav-main ${isActive('valeurs')}`} onClick={closeAll}>Valeurs</Link>

          <div className="nav-group">
            <Link
              to="/#offre"
              className={`nav-item ${pathname === '/' && offreIds.includes(activeSection) ? 'active' : ''}`}
              onClick={closeAll}
            >
              Offres
            </Link>
            <button
              type="button"
              className="nav-group-toggle"
              aria-expanded={isOffresOpen}
              aria-controls="offres-menu"
              aria-label={isOffresOpen ? 'Masquer le détail des offres' : 'Afficher le détail des offres'}
              onClick={() => setIsOffresOpen(!isOffresOpen)}
            >
              <ChevronDown size={16} aria-hidden="true" />
            </button>

            <ul id="offres-menu" className={`nav-dropdown ${isOffresOpen ? 'open' : ''}`}>
              {offres.map((o) => (
                <li key={o.id}>
                  <Link to={o.to} onClick={closeAll}>{o.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <Link to="/#contact-form" className="btn btn-accent" onClick={closeAll}>
            Prendre rendez-vous
          </Link>
        </nav>

        <button
          type="button"
          className="mobile-menu-btn"
          aria-expanded={isMenuOpen}
          aria-controls="site-nav"
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
};

export default Header;
