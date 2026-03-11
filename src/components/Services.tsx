import { 
  Briefcase, 
  Building2, 
  SlidersHorizontal, 
  Users, 
  Crown, 
  TrendingUp, 
  Target, 
  LineChart, 
  PieChart, 
  BarChart3,
  Layers,
  ShieldCheck
} from 'lucide-react';

const Services = () => {
  return (
    <section id="offre" className="section services-section">
      <div className="container max-w-7xl mx-auto" style={{ padding: '0 1.5rem' }}>
        
        {/* Intro */}
        <div className="text-left fade-in" style={{ marginBottom: '5rem' }}>
          <h2 className="text-4xl lg:text-5xl font-heading text-[var(--color-white)]" style={{ marginBottom: '1.5rem' }}>Notre proposition de valeur</h2>
          <div className="bg-[var(--color-accent)] opacity-50 rounded-full" style={{ width: '6rem', height: '4px', margin: '0' }}></div>
        </div>

        {/* --- Section 1: Les Piliers --- */}
        <div className="grid md:grid-cols-2" style={{ gap: '2rem', marginBottom: '8rem' }}>
          {/* Pilier 1 */}
          <div className="value-card glass-panel fade-in group h-full flex flex-col justify-start">
            <div className="icon-wrapper">
              <Briefcase className="value-icon" strokeWidth={1.5} size={28} />
            </div>
            <h3 className="text-3xl lg:text-4xl font-heading leading-tight tracking-tight mb-6">Gestion<br/>Financière</h3>
            <p className="flex-grow">
              Alignement strict de nos intérêts avec les vôtres, contrôle méthodique de la performance et transparence totale sur les coûts.
            </p>
          </div>

          {/* Pilier 2 */}
          <div className="value-card glass-panel fade-in group h-full flex flex-col justify-start">
            <div className="icon-wrapper">
              <Building2 className="value-icon" strokeWidth={1.5} size={28} />
            </div>
            <h3 className="text-3xl lg:text-4xl font-heading leading-tight tracking-tight mb-6">Gestion<br/>Immobilière</h3>
            <p className="flex-grow">
              Accès privilégié à des foncières dédiées et club deals exclusifs. Structuration de co-investissements et optimisation fiscale rigoureuse.
            </p>
          </div>
        </div>

        {/* Citation */}
        <div className="fade-in text-left" style={{ marginBottom: '8rem', paddingTop: '2rem', paddingBottom: '2rem' }}>
          <blockquote className="italic text-[var(--color-white)] max-w-4xl mx-auto font-light leading-snug text-left" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 1.875rem)' }}>
            &quot;Que la stratégie soit belle, <br />
            mais n'oubliez pas de regarder le résultat.&quot;
            <footer className="text-[var(--color-accent)] font-semibold tracking-widest uppercase text-left" style={{ fontSize: '0.875rem', marginTop: '2rem' }}>— Winston Churchill</footer>
          </blockquote>
        </div>

        {/* --- Section 2: Investissement Coté --- */}
        <div id="investissement-cote" style={{ scrollMarginTop: '8rem' }}></div>
        <div className="fade-in relative" style={{ marginBottom: '8rem', paddingTop: '3rem', paddingBottom: '3rem' }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl bg-gradient-to-r from-transparent via-white/10 to-transparent" style={{ height: '1px' }}></div>

          <div className="flex flex-col items-start max-w-6xl mx-auto" style={{ marginTop: '4rem' }}>
            {/* Title Section */}
            <div className="w-full flex flex-col items-start text-left max-w-3xl" style={{ zIndex: 10, marginBottom: '2.5rem' }}>
              <h3 className="text-[var(--color-accent)] font-bold tracking-widest uppercase" style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>Les Marchés Publics</h3>
              <h4 className="font-heading text-[var(--color-white)] leading-tight" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1.5rem' }}>L'Investissement Coté</h4>
              <p className="text-[var(--color-text-muted)] font-light leading-relaxed" style={{ fontSize: '17px' }}>
                Une approche rigoureuse et adaptable pour naviguer sereinement sur les marchés financiers.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="w-full grid md:grid-cols-2" style={{ gap: '2rem', zIndex: 10 }}>
              
              <div className="value-card glass-panel fade-in group h-full flex flex-col justify-start">
                <div className="icon-wrapper">
                  <SlidersHorizontal className="value-icon" strokeWidth={1.5} size={28} />
                </div>
                <h3>Gestion Personnalisée</h3>
                <p className="flex-grow">Agilité tactique, intégration ESG et création de produits structurés sur-mesure.</p>
              </div>
              
              <div className="value-card glass-panel fade-in group h-full flex flex-col justify-start">
                <div className="icon-wrapper">
                  <Users className="value-icon" strokeWidth={1.5} size={28} />
                </div>
                <h3>Gestion Déléguée</h3>
                <p className="flex-grow">Sélection d'experts via une architecture ouverte et mise en concurrence rigoureuse.</p>
              </div>

            </div>
          </div>
        </div>

        {/* --- Section 3: Actifs Privés (Non Coté & Immobilier) --- */}
        <div id="investissement-non-cote" style={{ scrollMarginTop: '8rem' }}></div>
        <div id="investissement-immobilier" style={{ scrollMarginTop: '8rem' }}></div>
        
        <div className="fade-in relative" style={{ marginBottom: '8rem', paddingTop: '3rem', paddingBottom: '3rem' }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl bg-gradient-to-r from-transparent via-white/10 to-transparent" style={{ height: '1px' }}></div>

          <div className="flex flex-col items-start max-w-6xl mx-auto" style={{ marginTop: '4rem' }}>
            {/* Title Section */}
            <div className="w-full flex flex-col items-start text-left max-w-3xl" style={{ zIndex: 10, marginBottom: '2.5rem' }}>
              <h3 className="text-[var(--color-accent)] font-bold tracking-widest uppercase" style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>L'Économie Réelle</h3>
              <h4 className="font-heading text-[var(--color-white)] leading-tight" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1.5rem' }}>Les Marchés Privés & Immobiliers</h4>
              <p className="text-[var(--color-text-muted)] font-light leading-relaxed" style={{ fontSize: '17px' }}>
                Accès exclusif et sélectif aux classes d'actifs décorrélées pour une création de valeur à long terme.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="w-full grid md:grid-cols-3" style={{ gap: '2rem', zIndex: 10 }}>
              
              <div className="value-card glass-panel fade-in group h-full flex flex-col justify-start">
                <div className="icon-wrapper">
                  <Target className="value-icon" strokeWidth={1.5} size={28} />
                </div>
                <h3>Fonds Institutionnels</h3>
                <p className="flex-grow">Diversification optimale via l'accès privilégié aux grands fonds fermés (vintages et maturités).</p>
              </div>
              
              <div className="value-card glass-panel fade-in group h-full flex flex-col justify-start">
                <div className="icon-wrapper">
                  <TrendingUp className="value-icon" strokeWidth={1.5} size={28} />
                </div>
                <h3>Direct & Niche</h3>
                <p className="flex-grow">Exposition ciblée sur des thématiques porteuses (Tech, US, Santé) sans frais intermédiaires.</p>
              </div>

              <div className="value-card glass-panel fade-in group h-full flex flex-col justify-start">
                <div className="icon-wrapper">
                  <Crown className="value-icon" strokeWidth={1.5} size={28} />
                </div>
                <h3>Club-deals Exclusifs</h3>
                <p className="flex-grow">Opérations tangibles confidentielles de PME et dette obligataire offrant une résilience asymétrique.</p>
              </div>

            </div>
          </div>
        </div>

        {/* --- Section 4: Suivi et Reporting --- */}
        <div id="suivi-reporting" style={{ scrollMarginTop: '8rem' }}></div>
        <div className="fade-in relative" style={{ marginBottom: '8rem', paddingTop: '3rem', paddingBottom: '3rem' }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl bg-gradient-to-r from-transparent via-white/10 to-transparent" style={{ height: '1px' }}></div>

          <div className="flex flex-col items-start max-w-6xl mx-auto" style={{ marginTop: '4rem' }}>
            {/* Title Section */}
            <div className="w-full flex flex-col items-start text-left max-w-3xl" style={{ zIndex: 10, marginBottom: '2.5rem' }}>
              <h3 className="text-[var(--color-accent)] font-bold tracking-widest uppercase" style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>Contrôle & Sécurité</h3>
              <h4 className="font-heading text-[var(--color-white)] leading-tight" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1.5rem' }}>Monitoring & Gouvernance</h4>
              <p className="text-[var(--color-text-muted)] font-light leading-relaxed" style={{ fontSize: '17px' }}>
                Pour s'assurer que la stratégie décidée soit bien celle implémentée, nous imposons l'agrégation de vos comptes et un suivi rigoureux sur l'ensemble des actifs.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="w-full grid md:grid-cols-3" style={{ gap: '2rem', zIndex: 10 }}>
              
              <div className="value-card glass-panel fade-in group h-full flex flex-col justify-start">
                <div className="icon-wrapper">
                  <LineChart className="value-icon" strokeWidth={1.5} size={28} />
                </div>
                <h3>Marchés Cotés</h3>
                <p className="flex-grow">Contrôle drastique de la volatilité et respect strict des limites de risques imposées.</p>
              </div>
              
              <div className="value-card glass-panel fade-in group h-full flex flex-col justify-start">
                <div className="icon-wrapper">
                  <PieChart className="value-icon" strokeWidth={1.5} size={28} />
                </div>
                <h3>Private Equity</h3>
                <p className="flex-grow">Gestion centralisée des appels de fonds et modélisation précise des cash-flows futurs.</p>
              </div>

              <div className="value-card glass-panel fade-in group h-full flex flex-col justify-start">
                <div className="icon-wrapper">
                  <BarChart3 className="value-icon" strokeWidth={1.5} size={28} />
                </div>
                <h3>Immobilier</h3>
                <p className="flex-grow">Pilotage pro-actif des conditions de crédit et consolidation globale des rendements nets.</p>
              </div>

            </div>
          </div>
        </div>

        {/* --- Section 5: Synthèse --- */}
        <div id="synthese" style={{ scrollMarginTop: '8rem' }}></div>
        <div className="fade-in relative" style={{ marginBottom: '8rem', paddingTop: '3rem', paddingBottom: '3rem' }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl bg-gradient-to-r from-transparent via-white/10 to-transparent" style={{ height: '1px' }}></div>

          <div className="flex flex-col items-start max-w-6xl mx-auto" style={{ marginTop: '4rem' }}>
            {/* Title Section */}
            <div className="w-full flex flex-col items-start text-left max-w-3xl" style={{ zIndex: 10, marginBottom: '2.5rem' }}>
              <h3 className="text-[var(--color-accent)] font-bold tracking-widest uppercase text-left" style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>La Méthodologie</h3>
              <h4 className="font-heading text-[var(--color-white)] text-left leading-tight" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1.5rem' }}>L'Écosystème Karantek</h4>
              <p className="text-[var(--color-text-muted)] font-light leading-relaxed" style={{ fontSize: '17px' }}>
                Un processus d'accompagnement structuré, de la définition de vos objectifs à la consolidation de vos performances globales.
              </p>
            </div>
          
            {/* Cards Grid */}
            <div className="w-full grid md:grid-cols-3" style={{ gap: '2rem', zIndex: 10 }}>
             {/* Step 1 */}
             <div className="value-card glass-panel fade-in group h-full flex flex-col justify-start overflow-hidden relative">
               <div className="absolute -right-4 -bottom-4 font-heading font-bold text-white/[0.02] group-hover:text-[var(--color-accent)]/[0.08] transition-colors duration-500 pointer-events-none" style={{ fontSize: '8rem' }}>01</div>
               <div className="icon-wrapper relative z-10">
                 <ShieldCheck className="value-icon" strokeWidth={1.5} size={28} />
               </div>
               <h3 className="relative z-10">Posture Protectrice</h3>
               <p className="flex-grow relative z-10">Proximité stratégique d'un Family Office dédiée exclusivement à vos intérêts.</p>
             </div>

             {/* Step 2 */}
             <div className="value-card glass-panel fade-in group h-full flex flex-col justify-start overflow-hidden relative">
               <div className="absolute -right-4 -bottom-4 font-heading font-bold text-white/[0.02] group-hover:text-[var(--color-accent)]/[0.08] transition-colors duration-500 pointer-events-none" style={{ fontSize: '8rem' }}>02</div>
               <div className="icon-wrapper relative z-10">
                 <Layers className="value-icon" strokeWidth={1.5} size={28} />
               </div>
               <h3 className="relative z-10">Sélection Ouverte</h3>
               <p className="flex-grow relative z-10">Sélection des meilleurs opérateurs mondiaux sans aucun biais d'affiliation.</p>
             </div>

             {/* Step 3 */}
             <div className="value-card glass-panel fade-in group h-full flex flex-col justify-start overflow-hidden relative">
               <div className="absolute -right-4 -bottom-4 font-heading font-bold text-white/[0.02] group-hover:text-[var(--color-accent)]/[0.08] transition-colors duration-500 pointer-events-none" style={{ fontSize: '8rem' }}>03</div>
               <div className="icon-wrapper relative z-10">
                 <Target className="value-icon" strokeWidth={1.5} size={28} />
               </div>
               <h3 className="relative z-10">Consolidation</h3>
               <p className="flex-grow relative z-10">Pilotage et agrégation fine sur toutes les classes d'actifs de la performance.</p>
             </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
