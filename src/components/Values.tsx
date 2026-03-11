
import { ShieldCheck, TrendingUp, Handshake } from 'lucide-react';

const Values = () => {
  const values = [
    {
      title: 'Transparence',
      icon: <ShieldCheck size={32} className="value-icon" />,
      description: 'Nous pratiquons une tarification claire et transparente. L\'ensemble des frais perçus, honoraires ou frais de gestion, sont communiqués, de manière détaillée, en amont des investissements et lors de nos reportings trimestriels.'
    },
    {
      title: 'Performance',
      icon: <TrendingUp size={32} className="value-icon" />,
      description: 'Seule une gestion de conviction, réactive peut créer de la valeur. Une approche institutionnelle innovante, décorrélée des marchés financiers, nous distingue des établissements bancaires classiques.'
    },
    {
      title: 'Confiance',
      icon: <Handshake size={32} className="value-icon" />,
      description: 'La confiance se gagne dans la durée. Le meilleur gage de confiance que nous pouvons vous donner est d\'investir, dans la mesure du possible, nos propres capitaux dans les mêmes investissements proposés.'
    }
  ];

  return (
    <section id="valeurs" className="section values-section">
      <div className="container">
        <div className="text-left">
          <h2 className="section-title fade-in">Nos Valeurs</h2>
        </div>
        
        <div className="values-grid">
          {values.map((value, index) => (
            <div 
              key={index} 
              className={`value-card glass-panel fade-in delay-${index + 1}`}
            >
              <div className="icon-wrapper">
                {value.icon}
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Values;
