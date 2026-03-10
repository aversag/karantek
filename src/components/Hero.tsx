
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
      </div>
      
      <div className="container hero-content">
        <div className="hero-text glass-panel fade-in delay-1">
          <span className="subtitle">Family Office</span>
          <h1 className="title">
            Karantek
            <br />
            <span className="highlight">Stratégies d'Investissements</span>
          </h1>
          <p className="description">
            Des solutions innovantes et sur-mesure pour donner vie à vos convictions dans un cadre optimal et performant.
          </p>
          <div className="hero-actions">
            <a href="#offre" className="btn btn-primary">
              Découvrir notre offre
            </a>
            <a href="#contact" className="btn btn-glass group">
              Nous contacter <ArrowRight size={18} className="icon-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
