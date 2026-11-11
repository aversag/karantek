const Expertise = () => {
  return (
    <section id="expertise" className="section">
      <div className="container ledger">
        <h2 className="ledger-title">Le cabinet</h2>

        <div>
          <p className="lede">
            Karantek est un cabinet de conseil en gestion de patrimoine qui se distingue de l’offre classique des banques privées.
          </p>
          <div className="prose">
            <p>
              Son fondateur, Romain Guitelmacher, a exercé au sein d’établissements bancaires de premier rang
              (Indosuez, Lazard, HSBC Private Bank), puis de single et multi family offices nationaux
              (SGPA, Sycomore Family Office), avant de créer Karantek.
            </p>
            <p>
              Conseiller des groupes familiaux nous a appris à comprendre leurs besoins et à considérer
              le patrimoine dans son ensemble. C’est cette expérience que nous mettons au service de nos
              clients, dans une relation de confiance mutuelle.
            </p>
          </div>

          <figure className="signature">
            <img src="/romain-guitelmacher.jpg" alt="Portrait de Romain Guitelmacher" width={160} height={200} loading="lazy" />
            <figcaption>
              <span className="signature-name">Romain Guitelmacher</span>
              <span className="signature-role">Président et fondateur</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
