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

        <dl className="hero-facts">
          <div>
            <dt>Cabinet</dt>
            <dd>Lyon</dd>
          </div>
          <div>
            <dt>Expérience</dt>
            <dd>Indosuez, Lazard, HSBC Private Bank, family offices</dd>
          </div>
          <div>
            <dt>Immatriculation ORIAS</dt>
            <dd>22005549</dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default Hero;
