const values = [
  {
    title: 'Transparence',
    description: 'Nous pratiquons une tarification claire. L’ensemble des frais perçus, honoraires ou frais de gestion, vous est communiqué en détail avant tout investissement, puis lors de nos reportings trimestriels.'
  },
  {
    title: 'Performance',
    description: 'Seule une gestion de conviction, réactive, peut créer de la valeur. Une approche d’inspiration institutionnelle, décorrélée des marchés financiers, nous distingue des établissements bancaires classiques.'
  },
  {
    title: 'Confiance',
    description: 'La confiance se gagne dans la durée. Le meilleur gage que nous puissions vous donner est d’investir, dans la mesure du possible, nos propres capitaux dans les investissements que nous vous proposons.'
  }
];

const Values = () => {
  return (
    <section id="valeurs" className="section">
      <div className="container ledger">
        <h2 className="ledger-title">Nos valeurs</h2>

        <dl className="rows">
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
