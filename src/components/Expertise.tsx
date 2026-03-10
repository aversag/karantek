

const Expertise = () => {
  return (
    <section id="expertise" className="section expertise-section">
      <div className="container">
        <h2 className="section-title fade-in">Parcours & Expertise</h2>
        
        <div className="expertise-content">
          <div className="expertise-text glass-panel fade-in delay-1">
            <p>
              Après plusieurs expériences au sein d'établissements bancaires de premier rang 
              (Indosuez, Lazard, HSBC Private Bank) mais également au sein de single et multi family offices 
              nationaux (SGPA, Sycomore Family Office), j'ai décidé de créer Karantek.
            </p>
            <p className="highlight-text">
              Karantek est un family office qui propose des solutions innovantes, se 
              différenciant de l'offre classique des banques privées.
            </p>
            <p>
              Travailler en tant que conseiller financier auprès de groupes familiaux m'a permis 
              de mieux comprendre leurs besoins et d'avoir une vision globale de la gestion de 
              patrimoine. J'ai souhaité mettre cette expérience au profit de mes clients dans une 
              relation de confiance mutuelle.
            </p>
          </div>
          
          <div className="founder-info fade-in delay-2">
            <div className="founder-card glass-panel">
              <div className="founder-avatar">
                <img src="/romain_guitelmacher.png" alt="Romain Guitelmacher" className="avatar-image" />
              </div>
              <h3>Romain Guitelmacher</h3>
              <span className="role">Fondateur</span>
            </div>
            
            <div className="experience-timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Banques de premier rang</h4>
                  <p>Indosuez, Lazard, HSBC Private Bank</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Family Offices Nationaux</h4>
                  <p>SGPA, Sycomore Family Office</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
