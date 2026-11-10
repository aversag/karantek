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
  { title: 'Gestion financière', text: 'Alignement strict de nos intérêts avec les vôtres, contrôle méthodique de la performance et transparence totale sur les coûts.' },
  { title: 'Gestion immobilière', text: 'Accès privilégié à des foncières dédiées et club deals exclusifs. Structuration de co-investissements et optimisation fiscale rigoureuse.' }
];

const cote: Item[] = [
  { title: 'Gestion personnalisée', text: 'Agilité tactique, intégration ESG et création de produits structurés sur-mesure.' },
  { title: 'Gestion déléguée', text: "Sélection d'experts via une architecture ouverte et mise en concurrence rigoureuse." }
];

const nonCote: Item[] = [
  { title: 'Fonds institutionnels', text: "Diversification optimale via l'accès privilégié aux grands fonds fermés (vintages et maturités)." },
  { title: 'Direct et niche', text: 'Exposition ciblée sur des thématiques porteuses (Tech, US, Santé) sans frais intermédiaires.' },
  { title: 'Club deals', text: 'Opérations tangibles confidentielles de PME et dette obligataire offrant une résilience asymétrique.' }
];

const suivi: Item[] = [
  { title: 'Marchés cotés', text: 'Contrôle drastique de la volatilité et respect strict des limites de risques imposées.' },
  { title: 'Private equity', text: 'Gestion centralisée des appels de fonds et modélisation précise des cash-flows futurs.' },
  { title: 'Immobilier', text: 'Pilotage pro-actif des conditions de crédit et consolidation globale des rendements nets.' }
];

const methode: Item[] = [
  { title: 'Posture protectrice', text: "Proximité stratégique d'un conseiller en gestion de patrimoine dédié exclusivement à vos intérêts." },
  { title: 'Sélection ouverte', text: "Sélection des meilleurs opérateurs mondiaux sans aucun biais d'affiliation." },
  { title: 'Consolidation', text: "Pilotage et agrégation fine de la performance sur toutes les classes d'actifs." }
];

const anchor = { scrollMarginTop: '7rem' };

const Services = () => {
  return (
    <section id="offre" className="section">
      <div className="container">
        <div className="ledger">
          <h2 className="ledger-title">Notre offre</h2>
          <Rows items={piliers} />
        </div>

        <figure className="quote">
          <blockquote>« Si belle que soit la stratégie, il faut de temps en temps regarder les résultats. »</blockquote>
          <figcaption>Winston Churchill</figcaption>
        </figure>

        <div id="investissement-cote" className="ledger ledger-sub" style={anchor}>
          <h3 className="ledger-title">Investissement coté</h3>
          <div>
            <p className="intro">Une approche rigoureuse et adaptable pour naviguer sereinement sur les marchés financiers.</p>
            <Rows items={cote} />
          </div>
        </div>

        <div id="investissement-non-cote" className="ledger ledger-sub" style={anchor}>
          <h3 className="ledger-title">Marchés privés et immobilier</h3>
          <div>
            <p className="intro">Accès exclusif et sélectif aux classes d'actifs décorrélées pour une création de valeur à long terme.</p>
            <Rows items={nonCote} />
          </div>
        </div>

        <div id="suivi-reporting" className="ledger ledger-sub" style={anchor}>
          <h3 className="ledger-title">Suivi et gouvernance</h3>
          <div>
            <p className="intro">Pour s'assurer que la stratégie décidée soit bien celle implémentée, nous imposons l'agrégation de vos comptes et un suivi rigoureux sur l'ensemble des actifs.</p>
            <Rows items={suivi} />
          </div>
        </div>

        <div id="synthese" className="ledger ledger-sub" style={anchor}>
          <h3 className="ledger-title">Notre méthode</h3>
          <div>
            <p className="intro">Un processus d'accompagnement structuré, de la définition de vos objectifs à la consolidation de vos performances globales.</p>
            <Rows items={methode} numbered />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
