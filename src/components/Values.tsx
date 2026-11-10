const values = [
  {
    title: 'Transparence',
    description: "Nous pratiquons une tarification claire et transparente. L'ensemble des frais perçus, honoraires ou frais de gestion, sont communiqués, de manière détaillée, en amont des investissements et lors de nos reportings trimestriels."
  },
  {
    title: 'Performance',
    description: 'Seule une gestion de conviction, réactive peut créer de la valeur. Une approche institutionnelle innovante, décorrélée des marchés financiers, nous distingue des établissements bancaires classiques.'
  },
  {
    title: 'Confiance',
    description: "La confiance se gagne dans la durée. Le meilleur gage de confiance que nous pouvons vous donner est d'investir, dans la mesure du possible, nos propres capitaux dans les mêmes investissements proposés."
  }
];

const Values = () => {
  return (
    <section id="valeurs" className="section">
      <div className="container ledger">
        <h2 className="ledger-title">Nos valeurs</h2>

        <dl className="rows" style={{ marginTop: 0 }}>
          {values.map((value) => (
            <div key={value.title} className="row">
              <dt className="row-title">{value.title}</dt>
              <dd className="row-text">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Values;
