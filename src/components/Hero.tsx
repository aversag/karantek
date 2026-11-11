const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">Conseil en gestion de patrimoine, Lyon</p>
          <h1 className="hero-title">Stratégies d'investissements</h1>
          <p className="hero-lead">
            Un cabinet indépendant, fondé par un ancien banquier privé, pour construire et piloter votre patrimoine en dehors de l'offre classique des banques privées.
          </p>
          <div className="hero-actions">
            <a href="#contact-form" className="btn btn-solid">Prendre rendez-vous</a>
            <a href="#offre" className="link-quiet">Découvrir l'offre</a>
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
