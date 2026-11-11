type Item = { title: string; text: string };

const Rows = ({ items, numbered = false }: { items: Item[]; numbered?: boolean }) => (
  <dl className="rows">
    {items.map((item, i) => (
      <div key={item.title} className="row">
        <dt className="row-title">
          {numbered && <span className="row-step">Étape {i + 1}</span>}
          {item.title}
        </dt>
        <dd className="row-text">{item.text}</dd>
      </div>
    ))}
  </dl>
);

const piliers: Item[] = [
  { title: 'Gestion financière', text: 'Des intérêts alignés sur les vôtres, un contrôle méthodique de la performance et des coûts communiqués en détail.' },
  { title: 'Gestion immobilière', text: 'Accès à des foncières dédiées et à des club deals, structuration de co-investissements et optimisation fiscale.' }
];

const cote: Item[] = [
  { title: 'Gestion personnalisée', text: 'Ajustements tactiques, intégration des critères ESG et produits structurés conçus sur mesure.' },
  { title: 'Gestion déléguée', text: 'Sélection de gérants en architecture ouverte, régulièrement mis en concurrence.' }
];

const nonCote: Item[] = [
  { title: 'Fonds institutionnels', text: 'Diversification par l’accès à de grands fonds fermés, en variant millésimes et maturités.' },
  { title: 'Direct et niche', text: 'Exposition ciblée sur des thématiques identifiées : technologie, États-Unis, santé.' },
  { title: 'Club deals', text: 'Opérations confidentielles sur des PME et de la dette obligataire, adossées à des actifs tangibles.' }
];

const suivi: Item[] = [
  { title: 'Marchés cotés', text: 'Suivi de la volatilité et respect des limites de risque fixées ensemble.' },
  { title: 'Private equity', text: 'Gestion centralisée des appels de fonds et modélisation des flux de trésorerie à venir.' },
  { title: 'Immobilier', text: 'Pilotage proactif des conditions de crédit et consolidation des rendements nets.' }
];

const methode: Item[] = [
  { title: 'Bilan', text: 'Un premier entretien pour comprendre votre situation, vos objectifs et votre horizon de placement.' },
  { title: 'Stratégie', text: 'Une allocation construite en architecture ouverte, à partir des supports adaptés à votre situation.' },
  { title: 'Mise en œuvre', text: 'Sélection des gérants et des opérations, puis mise en place des investissements retenus.' },
  { title: 'Suivi', text: 'Agrégation de vos comptes, pilotage de la performance sur toutes les classes d’actifs et reporting trimestriel.' }
];

const Services = () => {
  return (
    <section id="offre" className="section">
      <div className="container">
        <div className="ledger">
          <h2 className="ledger-title">Notre offre</h2>
          <div>
            <p className="lede">Deux métiers, la gestion financière et la gestion immobilière, conduits selon les mêmes principes.</p>
            <Rows items={piliers} />
          </div>
        </div>

        <figure className="quote">
          <blockquote>«&nbsp;Si belle que soit la stratégie, il faut de temps en temps regarder les résultats.&nbsp;»</blockquote>
          <figcaption>Winston Churchill</figcaption>
        </figure>

        <div id="investissement-cote" className="ledger ledger-sub">
          <h3 className="ledger-title">Investissement coté</h3>
          <div>
            <p className="intro">Une approche rigoureuse et adaptable pour investir sur les marchés financiers.</p>
            <Rows items={cote} />
          </div>
        </div>

        <div id="investissement-non-cote" className="ledger ledger-sub">
          <h3 className="ledger-title">Marchés privés et immobilier</h3>
          <div>
            <p className="intro">Un accès sélectif à des classes d’actifs peu corrélées aux marchés cotés, pour créer de la valeur sur le long terme.</p>
            <Rows items={nonCote} />
          </div>
        </div>

        <div id="suivi-reporting" className="ledger ledger-sub">
          <h3 className="ledger-title">Suivi et gouvernance</h3>
          <div>
            <p className="intro">Pour vérifier que la stratégie décidée est bien celle mise en œuvre, nous agrégeons l’ensemble de vos comptes et suivons chaque actif dans la durée.</p>
            <Rows items={suivi} />
          </div>
        </div>

        <div id="synthese" className="ledger ledger-sub">
          <h3 className="ledger-title">Notre méthode</h3>
          <div>
            <p className="intro">Un accompagnement en quatre temps, de la définition de vos objectifs au suivi de vos investissements.</p>
            <Rows items={methode} numbered />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
