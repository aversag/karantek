const Expertise = () => {
  return (
    <section id="expertise" className="section">
      <div className="container ledger">
        <h2 className="ledger-title">Parcours</h2>

        <div>
          <p className="lede">
            Karantek est un cabinet de conseil en gestion de patrimoine qui se distingue de l'offre classique des banques privées.
          </p>
          <div className="prose">
            <p>
              Après plusieurs expériences au sein d'établissements bancaires de premier rang
              (Indosuez, Lazard, HSBC Private Bank) mais également au sein de single et multi family offices
              nationaux (SGPA, Sycomore Family Office), j'ai décidé de créer Karantek.
            </p>
            <p>
              Travailler en tant que conseiller financier auprès de groupes familiaux m'a permis
              de mieux comprendre leurs besoins et d'avoir une vision globale de la gestion de
              patrimoine. J'ai souhaité mettre cette expérience au profit de mes clients dans une
              relation de confiance mutuelle.
            </p>
          </div>

          <dl className="rows">
            <div className="row">
              <dt className="row-title">Banques privées</dt>
              <dd className="row-text">Indosuez, Lazard, HSBC Private Bank</dd>
            </div>
            <div className="row">
              <dt className="row-title">Family offices</dt>
              <dd className="row-text">SGPA, Sycomore Family Office</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
