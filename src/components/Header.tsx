import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Target, TrendingUp, Building, Rocket, BarChart3, LayoutDashboard } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOffresOpenMobile, setIsOffresOpenMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <a href="#" className="logo">
          KARANTEK
        </a>
        
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#expertise" className="nav-item" onClick={() => setIsMenuOpen(false)}>Expertise</a>
          <a href="#valeurs" className="nav-item" onClick={() => setIsMenuOpen(false)}>Valeurs</a>
          
          <div className="relative group w-full md:w-auto">
            <a href="#offre" className="nav-item flex items-center justify-between md:justify-start gap-1 w-full md:w-auto" onClick={(e) => {
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
            <div className="absolute top-[calc(100%+1.5rem)] right-0 w-[800px] lg:w-[1000px] bg-[#0A0F1C]/85 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] p-16 lg:p-24 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 translate-y-4 group-hover:translate-y-0 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.05)] z-50 hidden md:block before:absolute before:-top-10 before:left-0 before:w-full before:h-10">
              
              <div className="grid grid-cols-3 gap-x-16 gap-y-16">
                <a href="#offre" className="flex flex-col items-start gap-5 p-6 rounded-[2rem] transition-all duration-300 hover:bg-white/[0.02] group/item cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#0A0F1C] border border-white/[0.05] text-white/40 group-hover/item:text-[var(--color-accent)] group-hover/item:border-[var(--color-accent)]/20 transition-all duration-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
                    <Target size={26} strokeWidth={1.2} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[17px] font-medium text-white mb-2 group-hover/item:text-[var(--color-accent)] transition-colors duration-300">Approche Globale</span>
                    <p className="text-[14px] text-white/40 leading-relaxed font-light">
                      Une vision 360° pour une stratégie sur-mesure et pérenne.
                    </p>
                  </div>
                </a>

                <a href="#investissement-cote" className="flex flex-col items-start gap-5 p-6 rounded-[2rem] transition-all duration-300 hover:bg-white/[0.02] group/item cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#0A0F1C] border border-white/[0.05] text-white/40 group-hover/item:text-[var(--color-accent)] group-hover/item:border-[var(--color-accent)]/20 transition-all duration-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
                    <TrendingUp size={26} strokeWidth={1.2} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[17px] font-medium text-white mb-2 group-hover/item:text-[var(--color-accent)] transition-colors duration-300">Investissement Coté</span>
                    <p className="text-[14px] text-white/40 leading-relaxed font-light">
                      Accédez aux marchés avec une gestion parfaitement transparente.
                    </p>
                  </div>
                </a>

                <a href="#investissement-immobilier" className="flex flex-col items-start gap-5 p-6 rounded-[2rem] transition-all duration-300 hover:bg-white/[0.02] group/item cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#0A0F1C] border border-white/[0.05] text-white/40 group-hover/item:text-[var(--color-accent)] group-hover/item:border-[var(--color-accent)]/20 transition-all duration-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
                    <Building size={26} strokeWidth={1.2} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[17px] font-medium text-white mb-2 group-hover/item:text-[var(--color-accent)] transition-colors duration-300">Immobilier</span>
                    <p className="text-[14px] text-white/40 leading-relaxed font-light">
                      Opportunités tangibles choisies rigoureusement pour leur rendement.
                    </p>
                  </div>
                </a>

                <a href="#investissement-non-cote" className="flex flex-col items-start gap-5 p-6 rounded-[2rem] transition-all duration-300 hover:bg-white/[0.02] group/item cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#0A0F1C] border border-white/[0.05] text-white/40 group-hover/item:text-[var(--color-accent)] group-hover/item:border-[var(--color-accent)]/20 transition-all duration-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
                    <Rocket size={26} strokeWidth={1.2} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[17px] font-medium text-white mb-2 group-hover/item:text-[var(--color-accent)] transition-colors duration-300">Non Coté</span>
                    <p className="text-[14px] text-white/40 leading-relaxed font-light">
                      Diversifiez vos actifs en soutenant activement l'économie réelle.
                    </p>
                  </div>
                </a>

                <a href="#suivi-reporting" className="flex flex-col items-start gap-5 p-6 rounded-[2rem] transition-all duration-300 hover:bg-white/[0.02] group/item cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#0A0F1C] border border-white/[0.05] text-white/40 group-hover/item:text-[var(--color-accent)] group-hover/item:border-[var(--color-accent)]/20 transition-all duration-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
                    <BarChart3 size={26} strokeWidth={1.2} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[17px] font-medium text-white mb-2 group-hover/item:text-[var(--color-accent)] transition-colors duration-300">Suivi & Reporting</span>
                    <p className="text-[14px] text-white/40 leading-relaxed font-light">
                      Un accompagnement continu et des rapports précis et détaillés.
                    </p>
                  </div>
                </a>

                <a href="#synthese" className="flex flex-col items-start gap-5 p-6 rounded-[2rem] transition-all duration-300 hover:bg-white/[0.02] group/item cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#0A0F1C] border border-white/[0.05] text-white/40 group-hover/item:text-[var(--color-accent)] group-hover/item:border-[var(--color-accent)]/20 transition-all duration-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
                    <LayoutDashboard size={26} strokeWidth={1.2} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[17px] font-medium text-white mb-2 group-hover/item:text-[var(--color-accent)] transition-colors duration-300">Synthèse Globale</span>
                    <p className="text-[14px] text-white/40 leading-relaxed font-light">
                      Une vue d'ensemble claire pour prendre vos décisions en toute confiance.
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
