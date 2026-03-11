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
      <div className="container max-w-7xl mx-auto px-6">
        
        {/* Intro */}
        <div className="text-center fade-in" style={{ marginBottom: '5rem' }}>
          <h2 className="text-4xl lg:text-5xl font-heading text-[var(--color-white)]" style={{ marginBottom: '1.5rem' }}>Notre proposition de valeur</h2>
          <div className="w-24 h-1 bg-[var(--color-accent)] mx-auto opacity-50 rounded-full"></div>
        </div>

        {/* --- Section 1: Les Piliers --- */}
        <div className="grid md:grid-cols-2" style={{ gap: '3rem', marginBottom: '8rem' }}>
          {/* Pilier 1 */}
          <div className="group relative flex flex-col">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[var(--color-accent)]/0 to-[var(--color-accent)]/0 group-hover:from-[var(--color-accent)]/5 group-hover:to-transparent transition-all duration-700 blur-xl"></div>
            <div className="relative flex-grow flex flex-col">
              <div className="flex items-center" style={{ marginBottom: '1.5rem' }}>
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mr-5 group-hover:border-[var(--color-accent)]/30 transition-colors duration-500">
                  <Briefcase strokeWidth={1.5} size={28} className="text-[var(--color-accent)]" />
                </div>
                <h3 className="text-3xl lg:text-4xl text-[var(--color-white)] font-semibold font-heading leading-tight tracking-tight">Gestion<br/>Financière</h3>
              </div>
              <div className="w-12 h-[1px] bg-gradient-to-r from-[var(--color-accent)] to-transparent opacity-50" style={{ marginBottom: '1.5rem' }}></div>
              <p className="text-[17px] text-[var(--color-text-muted)] leading-relaxed font-light break-words">
                Alignement strict de nos intérêts avec les vôtres, contrôle méthodique de la performance et transparence totale sur les coûts.
              </p>
            </div>
          </div>

          {/* Pilier 2 */}
          <div className="group relative flex flex-col">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[var(--color-accent)]/0 to-[var(--color-accent)]/0 group-hover:from-[var(--color-accent)]/5 group-hover:to-transparent transition-all duration-700 blur-xl"></div>
            <div className="relative flex-grow flex flex-col">
              <div className="flex items-center" style={{ marginBottom: '1.5rem' }}>
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mr-5 group-hover:border-[var(--color-accent)]/30 transition-colors duration-500">
                  <Building2 strokeWidth={1.5} size={28} className="text-[var(--color-accent)]" />
                </div>
                <h3 className="text-3xl lg:text-4xl text-[var(--color-white)] font-semibold font-heading leading-tight tracking-tight">Gestion<br/>Immobilière</h3>
              </div>
              <div className="w-12 h-[1px] bg-gradient-to-r from-[var(--color-accent)] to-transparent opacity-50" style={{ marginBottom: '1.5rem' }}></div>
              <p className="text-[17px] text-[var(--color-text-muted)] leading-relaxed font-light break-words">
                Accès privilégié à des foncières dédiées et club deals exclusifs. Structuration de co-investissements et optimisation fiscale rigoureuse.
              </p>
            </div>
          </div>
        </div>

        {/* Citation */}
        <div className="fade-in text-center" style={{ marginBottom: '8rem', paddingTop: '2rem', paddingBottom: '2rem' }}>
          <blockquote className="text-2xl md:text-3xl italic text-[var(--color-white)] max-w-4xl mx-auto font-light leading-snug">
            "Que la stratégie soit belle, mais n'oubliez pas de regarder le résultat."
            <footer className="text-[var(--color-accent)] font-semibold tracking-widest uppercase text-sm" style={{ marginTop: '2rem' }}>— Winston Churchill</footer>
          </blockquote>
        </div>

        {/* --- Section 2: Investissement Coté --- */}
        <div id="investissement-cote" className="scroll-mt-32"></div>
        <div className="fade-in relative" style={{ marginBottom: '8rem' }}>
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-[var(--color-accent)] opacity-[0.02] rounded-full blur-[100px] pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row items-start" style={{ gap: '4rem' }}>
            {/* Colonne Titre (Gauche) */}
            <div className="lg:w-1/3 z-10">
              <h3 className="text-sm text-[var(--color-accent)] font-bold tracking-widest uppercase" style={{ marginBottom: '1rem' }}>Les Marchés Publics</h3>
              <h4 className="text-4xl lg:text-5xl font-heading text-[var(--color-white)] leading-tight" style={{ marginBottom: '1.5rem' }}>L'Investissement<br/>Coté</h4>
              <p className="text-[17px] text-[var(--color-text-muted)] font-light leading-relaxed">
                Une approche rigoureuse et adaptable pour naviguer sereinement sur les marchés financiers.
              </p>
            </div>

            {/* Colonne Contenu (Droite) */}
            <div className="lg:w-2/3 grid sm:grid-cols-2 z-10 w-full" style={{ gap: '2.5rem' }}>
              <div className="flex flex-col group relative">
                <div className="w-12 h-12 text-[var(--color-accent)] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" style={{ marginBottom: '1.5rem' }}>
                  <SlidersHorizontal strokeWidth={1.5} size={40} />
                </div>
                <h5 className="text-2xl text-[var(--color-white)] font-semibold tracking-tight" style={{ marginBottom: '1rem' }}>Gestion Personnalisée</h5>
                <p className="text-[var(--color-text-muted)] font-light leading-relaxed text-[16px]">
                  Agilité tactique, intégration ESG et création de produits structurés sur-mesure.
                </p>
              </div>

              <div className="flex flex-col group relative">
                <div className="w-12 h-12 text-[var(--color-accent)] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" style={{ marginBottom: '1.5rem' }}>
                  <Users strokeWidth={1.5} size={40} />
                </div>
                <h5 className="text-2xl text-[var(--color-white)] font-semibold tracking-tight" style={{ marginBottom: '1rem' }}>Gestion Déléguée</h5>
                <p className="text-[var(--color-text-muted)] font-light leading-relaxed text-[16px]">
                  Sélection d'experts via une architecture ouverte et mise en concurrence rigoureuse.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Section 3: Actifs Privés (Non Coté & Immobilier) --- */}
        <div id="investissement-non-cote" className="scroll-mt-32"></div>
        <div id="investissement-immobilier" className="scroll-mt-32"></div>
        
        <div className="fade-in relative" style={{ marginBottom: '8rem' }}>
           <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--color-accent)] opacity-[0.02] rounded-full blur-[100px] pointer-events-none z-0"></div>

           <div className="relative z-10">
             <h3 className="text-sm text-[var(--color-accent)] font-bold tracking-widest uppercase text-center" style={{ marginBottom: '1rem' }}>L'Économie Réelle</h3>
             <h4 className="text-4xl lg:text-5xl font-heading text-[var(--color-white)] text-center" style={{ marginBottom: '4rem' }}>Les Marchés Privés & Immobiliers</h4>

             <div className="grid lg:grid-cols-3" style={{ gap: '2rem' }}>
               {/* Fonds Institutionnels */}
               <div className="group relative flex flex-col h-full">
                 <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-b from-[var(--color-accent)]/0 to-[var(--color-accent)]/0 group-hover:from-[var(--color-accent)]/5 group-hover:to-transparent transition-all duration-700 blur-xl"></div>
                 <div className="relative bg-[#161616]/40 backdrop-blur-md border border-white/5 rounded-[2.5rem] p-10 lg:p-12 flex-grow flex flex-col group-hover:border-[var(--color-accent)]/20 transition-colors duration-500">
                   <Target className="text-[var(--color-accent)] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" strokeWidth={1.5} size={36} style={{ marginBottom: '2rem' }}/>
                   <h5 className="text-2xl text-[var(--color-white)] font-semibold tracking-tight" style={{ marginBottom: '1.5rem' }}>Fonds Institutionnels</h5>
                   <p className="text-[var(--color-text-muted)] font-light text-[16px] leading-relaxed flex-grow">
                     Diversification optimale via l'accès privilégié aux grands fonds fermés (vintages et maturités).
                   </p>
                 </div>
               </div>
               
               {/* Direct & Niche */}
               <div className="group relative flex flex-col h-full">
                 <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-b from-[var(--color-accent)]/0 to-[var(--color-accent)]/0 group-hover:from-[var(--color-accent)]/5 group-hover:to-transparent transition-all duration-700 blur-xl"></div>
                 <div className="relative bg-[#161616]/40 backdrop-blur-md border border-white/5 rounded-[2.5rem] p-10 lg:p-12 flex-grow flex flex-col group-hover:border-[var(--color-accent)]/20 transition-colors duration-500">
                   <TrendingUp className="text-[var(--color-accent)] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" strokeWidth={1.5} size={36} style={{ marginBottom: '2rem' }}/>
                   <h5 className="text-2xl text-[var(--color-white)] font-semibold tracking-tight" style={{ marginBottom: '1.5rem' }}>Direct & Niche</h5>
                   <p className="text-[var(--color-text-muted)] font-light text-[16px] leading-relaxed flex-grow">
                     Exposition ciblée sur des thématiques porteuses (Tech, US, Santé) sans frais intermédiaires.
                   </p>
                 </div>
               </div>

               {/* Club-deals */}
               <div className="group relative flex flex-col h-full">
                 <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-b from-[var(--color-accent)]/0 to-[var(--color-accent)]/0 group-hover:from-[var(--color-accent)]/10 group-hover:to-transparent transition-all duration-700 blur-xl"></div>
                 <div className="relative bg-gradient-to-br from-[#161616]/80 to-[var(--color-accent)]/5 backdrop-blur-md border border-white/5 group-hover:border-[var(--color-accent)]/30 rounded-[2.5rem] p-10 lg:p-12 flex-grow flex flex-col transition-colors duration-500 overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)] opacity-[0.05] rounded-full blur-2xl"></div>
                   <Crown className="text-[var(--color-white)] opacity-90 group-hover:opacity-100 group-hover:scale-110 group-hover:text-[var(--color-accent)] transition-all duration-500" strokeWidth={1.5} size={36} style={{ marginBottom: '2rem' }}/>
                   <h5 className="text-2xl text-white font-semibold tracking-tight relative z-10" style={{ marginBottom: '1.5rem' }}>Club-deals Exclusifs</h5>
                   <div className="w-8 h-[1px] bg-[var(--color-accent)] opacity-50" style={{ marginBottom: '1.5rem' }}></div>
                   <p className="text-[var(--color-text-muted)] font-light text-[16px] leading-relaxed flex-grow relative z-10">
                     Opérations tangibles confidentielles de PME et dette obligataire offrant une résilience asymétrique.
                   </p>
                 </div>
               </div>
             </div>
           </div>
        </div>

        {/* --- Section 4: Suivi et Reporting --- */}
        <div id="suivi-reporting" className="scroll-mt-32"></div>
        <div className="fade-in relative" style={{ marginBottom: '8rem', paddingTop: '3rem', paddingBottom: '3rem' }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          <div className="flex flex-col lg:flex-row items-start max-w-6xl mx-auto" style={{ gap: '4rem', marginTop: '4rem' }}>
            {/* Colonne Gauche */}
            <div className="lg:w-5/12 z-10">
              <h4 className="text-4xl lg:text-5xl font-heading text-[var(--color-white)] leading-tight" style={{ marginBottom: '2rem' }}>Monitoring & <br className="hidden lg:block"/>Gouvernance</h4>
              <p className="text-[17px] text-[var(--color-text-muted)] font-light leading-relaxed">
                Pour s'assurer que la stratégie décidée soit bien celle implémentée, nous imposons l'agrégation de vos comptes et un suivi rigoureux sur l'ensemble des actifs.
              </p>
            </div>

            {/* Colonne Droite */}
            <div className="lg:w-7/12 flex flex-col z-10" style={{ gap: '3rem' }}>
              <div className="flex group" style={{ gap: '1.5rem' }}>
                <div className="w-12 h-12 shrink-0 rounded-full border border-white/5 flex items-center justify-center text-[var(--color-white)] group-hover:border-[var(--color-accent)]/30 group-hover:text-[var(--color-accent)] transition-colors duration-500">
                  <LineChart strokeWidth={1.5} size={20}/>
                </div>
                <div>
                  <h5 className="text-2xl text-[var(--color-white)] font-semibold tracking-tight" style={{ marginBottom: '0.75rem' }}>Marchés Cotés</h5>
                  <p className="text-[var(--color-text-muted)] font-light text-[16px] leading-relaxed">Contrôle drastique de la volatilité et respect strict des limites de risques imposées.</p>
                </div>
              </div>
              
              <div className="w-full h-[1px] bg-white/5"></div>

              <div className="flex group" style={{ gap: '1.5rem' }}>
                <div className="w-12 h-12 shrink-0 rounded-full border border-white/5 flex items-center justify-center text-[var(--color-white)] group-hover:border-[var(--color-accent)]/30 group-hover:text-[var(--color-accent)] transition-colors duration-500">
                  <PieChart strokeWidth={1.5} size={20}/>
                </div>
                <div>
                  <h5 className="text-2xl text-[var(--color-white)] font-semibold tracking-tight" style={{ marginBottom: '0.75rem' }}>Private Equity</h5>
                  <p className="text-[var(--color-text-muted)] font-light text-[16px] leading-relaxed">Gestion centralisée des appels de fonds et modélisation précise des cash-flows futurs.</p>
                </div>
              </div>

              <div className="w-full h-[1px] bg-white/5"></div>

              <div className="flex group" style={{ gap: '1.5rem' }}>
                <div className="w-12 h-12 shrink-0 rounded-full border border-white/5 flex items-center justify-center text-[var(--color-accent)] group-hover:border-[var(--color-accent)]/50 transition-colors duration-500">
                  <BarChart3 strokeWidth={1.5} size={20}/>
                </div>
                <div>
                  <h5 className="text-2xl text-[var(--color-white)] font-semibold tracking-tight" style={{ marginBottom: '0.75rem' }}>Immobilier</h5>
                  <p className="text-[var(--color-text-muted)] font-light text-[16px] leading-relaxed">Pilotage pro-actif des conditions de crédit et consolidation globale des rendements nets.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Section 5: Synthèse --- */}
        <div id="synthese" className="scroll-mt-32"></div>
        <div className="fade-in max-w-5xl mx-auto relative" style={{ paddingTop: '4rem', marginBottom: '2.5rem' }}>
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          <h3 className="text-sm text-[var(--color-accent)] font-bold tracking-widest uppercase text-center" style={{ marginBottom: '1rem', marginTop: '2rem' }}>La Méthodologie</h3>
          <h4 className="text-4xl lg:text-5xl font-heading text-[var(--color-white)] text-center" style={{ marginBottom: '4rem' }}>L'Écosystème Karantek</h4>
          
          <div className="grid lg:grid-cols-3 relative z-10" style={{ gap: '2rem' }}>
             {/* Step 1 */}
             <div className="group relative flex flex-col h-full">
               <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-b from-[var(--color-accent)]/0 to-[var(--color-accent)]/0 group-hover:from-[var(--color-accent)]/5 group-hover:to-transparent transition-all duration-700 blur-xl"></div>
               <div className="relative bg-[#161616]/40 backdrop-blur-md border border-white/5 group-hover:border-[var(--color-accent)]/30 rounded-[2rem] p-10 flex-grow flex flex-col transition-colors duration-500 overflow-hidden">
                 <div className="absolute -right-4 -bottom-4 text-9xl font-heading font-bold text-white/[0.02] group-hover:text-[var(--color-accent)]/[0.08] transition-colors duration-500 pointer-events-none">01</div>
                 <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:border-[var(--color-accent)]/30 transition-colors duration-500 relative z-10" style={{ marginBottom: '2rem' }}>
                   <ShieldCheck className="text-[var(--color-accent)]" strokeWidth={1.5} size={28}/>
                 </div>
                 <h5 className="text-2xl text-[var(--color-white)] font-semibold tracking-tight relative z-10" style={{ marginBottom: '1rem' }}>Posture Protectrice</h5>
                 <div className="w-8 h-[1px] bg-[var(--color-accent)] opacity-50 relative z-10" style={{ marginBottom: '1.5rem' }}></div>
                 <p className="text-[var(--color-text-muted)] font-light text-[16px] leading-relaxed relative z-10">
                   Proximité stratégique d'un Family Office dédiée exclusivement à vos intérêts.
                 </p>
               </div>
             </div>

             {/* Step 2 */}
             <div className="group relative flex flex-col h-full">
               <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-b from-[var(--color-accent)]/0 to-[var(--color-accent)]/0 group-hover:from-[var(--color-accent)]/5 group-hover:to-transparent transition-all duration-700 blur-xl"></div>
               <div className="relative bg-[#161616]/40 backdrop-blur-md border border-white/5 group-hover:border-[var(--color-accent)]/30 rounded-[2rem] p-10 flex-grow flex flex-col transition-colors duration-500 overflow-hidden">
                 <div className="absolute -right-4 -bottom-4 text-9xl font-heading font-bold text-white/[0.02] group-hover:text-[var(--color-accent)]/[0.08] transition-colors duration-500 pointer-events-none">02</div>
                 <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:border-[var(--color-accent)]/30 transition-colors duration-500 relative z-10" style={{ marginBottom: '2rem' }}>
                   <Layers className="text-[var(--color-accent)]" strokeWidth={1.5} size={28}/>
                 </div>
                 <h5 className="text-2xl text-[var(--color-white)] font-semibold tracking-tight relative z-10" style={{ marginBottom: '1rem' }}>Sélection Ouverte</h5>
                 <div className="w-8 h-[1px] bg-[var(--color-accent)] opacity-50 relative z-10" style={{ marginBottom: '1.5rem' }}></div>
                 <p className="text-[var(--color-text-muted)] font-light text-[16px] leading-relaxed relative z-10">
                   Sélection des meilleurs opérateurs mondiaux sans aucun biais d'affiliation.
                 </p>
               </div>
             </div>

             {/* Step 3 */}
             <div className="group relative flex flex-col h-full">
               <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-b from-[var(--color-accent)]/0 to-[var(--color-accent)]/0 group-hover:from-[var(--color-accent)]/5 group-hover:to-transparent transition-all duration-700 blur-xl"></div>
               <div className="relative bg-[#161616]/40 backdrop-blur-md border border-white/5 group-hover:border-[var(--color-accent)]/30 rounded-[2rem] p-10 flex-grow flex flex-col transition-colors duration-500 overflow-hidden">
                 <div className="absolute -right-4 -bottom-4 text-9xl font-heading font-bold text-white/[0.02] group-hover:text-[var(--color-accent)]/[0.08] transition-colors duration-500 pointer-events-none">03</div>
                 <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:border-[var(--color-accent)]/30 transition-colors duration-500 relative z-10" style={{ marginBottom: '2rem' }}>
                   <Target className="text-[var(--color-accent)]" strokeWidth={1.5} size={28}/>
                 </div>
                 <h5 className="text-2xl text-[var(--color-white)] font-semibold tracking-tight relative z-10" style={{ marginBottom: '1rem' }}>Consolidation</h5>
                 <div className="w-8 h-[1px] bg-[var(--color-accent)] opacity-50 relative z-10" style={{ marginBottom: '1.5rem' }}></div>
                 <p className="text-[var(--color-text-muted)] font-light text-[16px] leading-relaxed relative z-10">
                   Agrégation comptable pointue via notre ingénierie de reporting sur-mesure.
                 </p>
               </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
