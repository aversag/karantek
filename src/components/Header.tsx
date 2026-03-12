import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Target, TrendingUp, Building, Rocket, BarChart3, LayoutDashboard } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOffresOpenMobile, setIsOffresOpenMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
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

    const sections = document.querySelectorAll('section[id], div[id]');
    const relevantIds = [
      'hero', 'expertise', 'valeurs', 'offre', 'contact', 'contact-form',
      'investissement-cote', 'investissement-immobilier', 'investissement-non-cote', 'suivi-reporting', 'synthese'
    ];
    sections.forEach((section) => {
      if (relevantIds.includes(section.id)) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <a href="#" className="logo flex items-center gap-2">
          <img src="/logo-karentek.png" alt="Logo Karantek" className="h-8 md:h-10 w-auto" />
          <span>KARANTEK</span>
        </a>
        
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#expertise" className={`nav-item ${activeSection === 'expertise' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Expertise</a>
          <a href="#valeurs" className={`nav-item ${activeSection === 'valeurs' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Valeurs</a>
          
          <div className="relative group w-full md:w-auto">
            <a href="#offre" className={`nav-item flex items-center justify-between md:justify-start gap-1 w-full md:w-auto ${['offre', 'investissement-cote', 'investissement-immobilier', 'investissement-non-cote', 'suivi-reporting', 'synthese'].includes(activeSection) ? 'active' : ''}`} onClick={(e) => {
              if (window.innerWidth < 768) {
                e.preventDefault();
                setIsOffresOpenMobile(!isOffresOpenMobile);
              } else {
                setIsMenuOpen(false);
              }
            }}>
              Offres <ChevronDown size={14} className={`transition-transform duration-300 md:group-hover:rotate-180 ${isOffresOpenMobile ? 'rotate-180' : ''}`} />
            </a>
            
            {/* Desktop Dropdown */}
            <div 
              style={{ padding: '64px', maxWidth: '850px' }}
              className="fixed top-[80px] left-1/2 -translate-x-1/2 w-[90vw] bg-[#101830]/95 backdrop-blur-2xl border border-[rgba(255,255,255,0.08)] rounded-[2rem] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-400 translate-y-2 group-hover:translate-y-0 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.05)] z-50 hidden md:block before:absolute before:-top-6 before:left-0 before:w-full before:h-6"
            >
              
              <div style={{ columnGap: '64px', rowGap: '40px' }} className="grid grid-cols-2">
                <a href="#offre" className="flex items-start gap-4 p-4 rounded-xl transition-all duration-200 hover:bg-white/[0.05] group/item cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                  <div className="w-11 h-11 rounded-lg flex-shrink-0 flex items-center justify-center bg-white/[0.05] border border-white/[0.08] text-white/50 group-hover/item:text-[var(--color-accent)] group-hover/item:border-[var(--color-accent)]/30 transition-all duration-300">
                    <Target size={20} strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[15px] font-medium text-white/90 group-hover/item:text-[var(--color-accent)] transition-colors duration-200">Approche Globale</span>
                    <p className="text-[13px] text-white/40 leading-relaxed mt-1">
                      Vision 360° pour une stratégie sur-mesure.
                    </p>
                  </div>
                </a>

                <a href="#investissement-cote" className="flex items-start gap-4 p-4 rounded-xl transition-all duration-200 hover:bg-white/[0.05] group/item cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                  <div className="w-11 h-11 rounded-lg flex-shrink-0 flex items-center justify-center bg-white/[0.05] border border-white/[0.08] text-white/50 group-hover/item:text-[var(--color-accent)] group-hover/item:border-[var(--color-accent)]/30 transition-all duration-300">
                    <TrendingUp size={20} strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[15px] font-medium text-white/90 group-hover/item:text-[var(--color-accent)] transition-colors duration-200">Investissement Coté</span>
                    <p className="text-[13px] text-white/40 leading-relaxed mt-1">
                      Gestion transparente sur les marchés.
                    </p>
                  </div>
                </a>

                <a href="#investissement-immobilier" className="flex items-start gap-4 p-4 rounded-xl transition-all duration-200 hover:bg-white/[0.05] group/item cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                  <div className="w-11 h-11 rounded-lg flex-shrink-0 flex items-center justify-center bg-white/[0.05] border border-white/[0.08] text-white/50 group-hover/item:text-[var(--color-accent)] group-hover/item:border-[var(--color-accent)]/30 transition-all duration-300">
                    <Building size={20} strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[15px] font-medium text-white/90 group-hover/item:text-[var(--color-accent)] transition-colors duration-200">Immobilier</span>
                    <p className="text-[13px] text-white/40 leading-relaxed mt-1">
                      Opportunités tangibles à haut rendement.
                    </p>
                  </div>
                </a>

                <a href="#investissement-non-cote" className="flex items-start gap-4 p-4 rounded-xl transition-all duration-200 hover:bg-white/[0.05] group/item cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                  <div className="w-11 h-11 rounded-lg flex-shrink-0 flex items-center justify-center bg-white/[0.05] border border-white/[0.08] text-white/50 group-hover/item:text-[var(--color-accent)] group-hover/item:border-[var(--color-accent)]/30 transition-all duration-300">
                    <Rocket size={20} strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[15px] font-medium text-white/90 group-hover/item:text-[var(--color-accent)] transition-colors duration-200">Non Coté</span>
                    <p className="text-[13px] text-white/40 leading-relaxed mt-1">
                      Diversification dans l'économie réelle.
                    </p>
                  </div>
                </a>

                <a href="#suivi-reporting" className="flex items-start gap-4 p-4 rounded-xl transition-all duration-200 hover:bg-white/[0.05] group/item cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                  <div className="w-11 h-11 rounded-lg flex-shrink-0 flex items-center justify-center bg-white/[0.05] border border-white/[0.08] text-white/50 group-hover/item:text-[var(--color-accent)] group-hover/item:border-[var(--color-accent)]/30 transition-all duration-300">
                    <BarChart3 size={20} strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[15px] font-medium text-white/90 group-hover/item:text-[var(--color-accent)] transition-colors duration-200">Suivi & Reporting</span>
                    <p className="text-[13px] text-white/40 leading-relaxed mt-1">
                      Rapports précis et accompagnement continu.
                    </p>
                  </div>
                </a>

                <a href="#synthese" className="flex items-start gap-4 p-4 rounded-xl transition-all duration-200 hover:bg-white/[0.05] group/item cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                  <div className="w-11 h-11 rounded-lg flex-shrink-0 flex items-center justify-center bg-white/[0.05] border border-white/[0.08] text-white/50 group-hover/item:text-[var(--color-accent)] group-hover/item:border-[var(--color-accent)]/30 transition-all duration-300">
                    <LayoutDashboard size={20} strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[15px] font-medium text-white/90 group-hover/item:text-[var(--color-accent)] transition-colors duration-200">Synthèse Globale</span>
                    <p className="text-[13px] text-white/40 leading-relaxed mt-1">
                      Vue d'ensemble pour décider en confiance.
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Mobile nested links - only visible on mobile when menu is open */}
            <div className={`flex-col pl-4 mt-2 space-y-4 border-l-2 border-[rgba(255,255,255,0.1)] md:hidden overflow-hidden transition-all duration-300 ${isOffresOpenMobile ? 'max-h-[500px] opacity-100 flex pb-4' : 'max-h-0 opacity-0 hidden'}`}>
              <a href="#offre" className="text-[15px] text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors py-1 block" onClick={() => setIsMenuOpen(false)}>Approche Globale</a>
              <a href="#investissement-cote" className="text-[15px] text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors py-1 block" onClick={() => setIsMenuOpen(false)}>Investissement Coté</a>
              <a href="#investissement-immobilier" className="text-[15px] text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors py-1 block" onClick={() => setIsMenuOpen(false)}>Investissement Immobilier</a>
              <a href="#investissement-non-cote" className="text-[15px] text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors py-1 block" onClick={() => setIsMenuOpen(false)}>Investissement Non Coté</a>
              <a href="#suivi-reporting" className="text-[15px] text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors py-1 block" onClick={() => setIsMenuOpen(false)}>Suivi et Reporting</a>
              <a href="#synthese" className="text-[15px] text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors py-1 block" onClick={() => setIsMenuOpen(false)}>Synthèse</a>
            </div>
          </div>

          <a href="#contact" className="btn btn-glass mt-4 md:mt-0" onClick={() => setIsMenuOpen(false)}>
            Nous Contacter
          </a>
        </nav>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} color="#fff" /> : <Menu size={24} color="#fff" />}
        </button>
      </div>
    </header>
  );
};

export default Header;
