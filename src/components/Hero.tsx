const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">Stratégies d’investissement, Lyon</p>
          <h1 className="hero-title">Le conseil patrimonial, hors des banques privées.</h1>
          <p className="hero-lead">
            Karantek, cabinet lyonnais fondé par un ancien banquier privé, construit et pilote votre stratégie d’investissement en architecture ouverte.
          </p>
          <div className="hero-actions">
            <a href="#contact-form" className="btn btn-solid">Prendre rendez-vous</a>
            <a href="#offre" className="link-quiet">Découvrir l’offre</a>
          </div>
        </div>

        <nav className="hero-facts" aria-label="Notre offre">
          <a href="#investissement-cote">
            <span className="fact-title">Investissement coté</span>
            <span className="fact-text">Gestion personnalisée ou déléguée, en architecture ouverte.</span>
          </a>
          <a href="#investissement-non-cote">
            <span className="fact-title">Marchés privés et immobilier</span>
            <span className="fact-text">Fonds institutionnels, club deals et foncières dédiées.</span>
          </a>
          <a href="#suivi-reporting">
            <span className="fact-title">Suivi et gouvernance</span>
            <span className="fact-text">Agrégation de vos comptes et contrôle de la stratégie dans la durée.</span>
          </a>
        </nav>
      </div>
    </section>
  );
};

export default Hero;
