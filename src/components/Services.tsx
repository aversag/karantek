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
        <div className="text-center fade-in" style={{ marginBottom: '5rem' }}>
          <h2 className="text-4xl lg:text-5xl font-heading text-[var(--color-white)]" style={{ marginBottom: '1.5rem' }}>Notre proposition de valeur</h2>
          <div className="bg-[var(--color-accent)] opacity-50 rounded-full" style={{ width: '6rem', height: '4px', margin: '0 auto' }}></div>
        </div>

        {/* --- Section 1: Les Piliers --- */}
        <div className="grid md:grid-cols-2" style={{ gap: '2rem', marginBottom: '8rem' }}>
          {/* Pilier 1 */}
          <div className="group relative flex flex-col h-full">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[var(--color-accent)]/0 to-[var(--color-accent)]/0 group-hover:from-[var(--color-accent)]/5 group-hover:to-transparent transition-all duration-700 blur-xl"></div>
            <div className="relative bg-[#161616]/40 backdrop-blur-md border border-white/5 group-hover:border-[var(--color-accent)]/30 rounded-[2rem] flex-grow flex flex-col transition-colors duration-500 p-8 sm:p-10">
              <div className="flex items-center" style={{ marginBottom: '1.5rem' }}>
                <div className="shrink-0 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:border-[var(--color-accent)]/30 transition-colors duration-500" style={{ width: '3.5rem', height: '3.5rem', marginRight: '1.25rem' }}>
                  <Briefcase strokeWidth={1.5} size={28} className="text-[var(--color-accent)] group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-3xl lg:text-4xl text-[var(--color-white)] font-semibold font-heading leading-tight tracking-tight">Gestion<br/>Financière</h3>
              </div>
              <div className="bg-gradient-to-r from-[var(--color-accent)] to-transparent opacity-50" style={{ width: '3rem', height: '1px', marginBottom: '1.5rem' }}></div>
              <p className="text-[var(--color-text-muted)] leading-relaxed font-light" style={{ fontSize: '17px' }}>
                Alignement strict de nos intérêts avec les vôtres, contrôle méthodique de la performance et transparence totale sur les coûts.
              </p>
            </div>
          </div>

          {/* Pilier 2 */}
          <div className="group relative flex flex-col h-full">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[var(--color-accent)]/0 to-[var(--color-accent)]/0 group-hover:from-[var(--color-accent)]/5 group-hover:to-transparent transition-all duration-700 blur-xl"></div>
            <div className="relative bg-[#161616]/40 backdrop-blur-md border border-white/5 group-hover:border-[var(--color-accent)]/30 rounded-[2rem] flex-grow flex flex-col transition-colors duration-500 p-8 sm:p-10">
              <div className="flex items-center" style={{ marginBottom: '1.5rem' }}>
                <div className="shrink-0 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:border-[var(--color-accent)]/30 transition-colors duration-500" style={{ width: '3.5rem', height: '3.5rem', marginRight: '1.25rem' }}>
                  <Building2 strokeWidth={1.5} size={28} className="text-[var(--color-accent)] group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-3xl lg:text-4xl text-[var(--color-white)] font-semibold font-heading leading-tight tracking-tight">Gestion<br/>Immobilière</h3>
              </div>
              <div className="bg-gradient-to-r from-[var(--color-accent)] to-transparent opacity-50" style={{ width: '3rem', height: '1px', marginBottom: '1.5rem' }}></div>
              <p className="text-[var(--color-text-muted)] leading-relaxed font-light" style={{ fontSize: '17px' }}>
                Accès privilégié à des foncières dédiées et club deals exclusifs. Structuration de co-investissements et optimisation fiscale rigoureuse.
              </p>
            </div>
          </div>
        </div>

        {/* Citation */}
        <div className="fade-in text-center" style={{ marginBottom: '8rem', paddingTop: '2rem', paddingBottom: '2rem' }}>
          <blockquote className="italic text-[var(--color-white)] max-w-4xl mx-auto font-light leading-snug" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 1.875rem)' }}>
            "Que la stratégie soit belle, mais n'oubliez pas de regarder le résultat."
            <footer className="text-[var(--color-accent)] font-semibold tracking-widest uppercase" style={{ fontSize: '0.875rem', marginTop: '2rem' }}>— Winston Churchill</footer>
          </blockquote>
        </div>

        {/* --- Section 2: Investissement Coté --- */}
        <div id="investissement-cote" style={{ scrollMarginTop: '8rem' }}></div>
        <div className="fade-in relative" style={{ marginBottom: '8rem' }}>
          <div className="absolute -top-20 -right-20 bg-[var(--color-accent)] opacity-[0.02] rounded-full blur-[100px] pointer-events-none" style={{ width: '24rem', height: '24rem' }}></div>

          <div className="flex flex-col lg:flex-row items-stretch" style={{ gap: '2rem' }}>
            {/* Colonne Titre (Gauche) */}
            <div className="lg:w-1/3 relative flex flex-col justify-center" style={{ zIndex: 10 }}>
              <h3 className="text-[var(--color-accent)] font-bold tracking-widest uppercase" style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>Les Marchés Publics</h3>
              <h4 className="font-heading text-[var(--color-white)] leading-tight" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1.5rem' }}>L'Investissement<br/>Coté</h4>
              <p className="text-[var(--color-text-muted)] font-light leading-relaxed" style={{ fontSize: '17px' }}>
                Une approche rigoureuse et adaptable pour naviguer sereinement sur les marchés financiers.
              </p>
            </div>

            {/* Colonne Contenu (Droite) */}
            <div className="lg:w-2/3 grid sm:grid-cols-2 w-full" style={{ gap: '2rem', zIndex: 10 }}>
              <div className="group relative flex flex-col h-full">
                <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[var(--color-accent)]/0 to-[var(--color-accent)]/0 group-hover:from-[var(--color-accent)]/5 group-hover:to-transparent transition-all duration-700 blur-xl"></div>
                <div className="relative bg-[#161616]/40 backdrop-blur-md border border-white/5 group-hover:border-[var(--color-accent)]/30 rounded-[2rem] flex-grow flex flex-col transition-colors duration-500 p-8 overflow-hidden">
                  <div className="absolute top-0 right-0 bg-[var(--color-accent)] opacity-[0.05] rounded-full blur-2xl" style={{ width: '8rem', height: '8rem' }}></div>
                  
                  <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] group-hover:border-[var(--color-accent)]/30 flex items-center justify-center transition-colors duration-500 relative" style={{ width: '3.5rem', height: '3.5rem', marginBottom: '1.5rem', zIndex: 10 }}>
                    <SlidersHorizontal className="text-[var(--color-accent)] group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} size={28} />
                  </div>
                  
                  <h5 className="text-[var(--color-white)] font-semibold tracking-tight relative z-10" style={{ fontSize: '1.5rem', marginBottom: '1.25rem' }}>Gestion Personnalisée</h5>
                  
                  <div className="relative z-10 bg-gradient-to-r from-[var(--color-accent)] to-transparent opacity-50" style={{ width: '3rem', height: '1px', marginBottom: '1.25rem' }}></div>
                  
                  <p className="text-[var(--color-text-muted)] font-light leading-relaxed flex-grow relative z-10" style={{ fontSize: '1rem' }}>
                    Agilité tactique, intégration ESG et création de produits structurés sur-mesure.
                  </p>
                </div>
              </div>

              <div className="group relative flex flex-col h-full">
                <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[var(--color-accent)]/0 to-[var(--color-accent)]/0 group-hover:from-[var(--color-accent)]/5 group-hover:to-transparent transition-all duration-700 blur-xl"></div>
                <div className="relative bg-[#161616]/40 backdrop-blur-md border border-white/5 group-hover:border-[var(--color-accent)]/30 rounded-[2rem] flex-grow flex flex-col transition-colors duration-500 p-8 overflow-hidden">
                  <div className="absolute top-0 right-0 bg-[var(--color-accent)] opacity-[0.05] rounded-full blur-2xl" style={{ width: '8rem', height: '8rem' }}></div>

                  <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] group-hover:border-[var(--color-accent)]/30 flex items-center justify-center transition-colors duration-500 relative" style={{ width: '3.5rem', height: '3.5rem', marginBottom: '1.5rem', zIndex: 10 }}>
                    <Users className="text-[var(--color-accent)] group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} size={28} />
                  </div>
                  
                  <h5 className="text-[var(--color-white)] font-semibold tracking-tight relative z-10" style={{ fontSize: '1.5rem', marginBottom: '1.25rem' }}>Gestion Déléguée</h5>
                  
                  <div className="relative z-10 bg-gradient-to-r from-[var(--color-accent)] to-transparent opacity-50" style={{ width: '3rem', height: '1px', marginBottom: '1.25rem' }}></div>
                  
                  <p className="text-[var(--color-text-muted)] font-light leading-relaxed flex-grow relative z-10" style={{ fontSize: '1rem' }}>
                    Sélection d'experts via une architecture ouverte et mise en concurrence rigoureuse.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Section 3: Actifs Privés (Non Coté & Immobilier) --- */}
        <div id="investissement-non-cote" style={{ scrollMarginTop: '8rem' }}></div>
        <div id="investissement-immobilier" style={{ scrollMarginTop: '8rem' }}></div>
        
        <div className="fade-in relative" style={{ marginBottom: '8rem' }}>
           <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-[var(--color-accent)] opacity-[0.02] rounded-full blur-[100px] pointer-events-none" style={{ width: '24rem', height: '24rem', zIndex: 0 }}></div>

           <div className="relative" style={{ zIndex: 10 }}>
             <h3 className="text-[var(--color-accent)] font-bold tracking-widest uppercase text-center" style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>L'Économie Réelle</h3>
             <h4 className="font-heading text-[var(--color-white)] text-center" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '3rem' }}>Les Marchés Privés & Immobiliers</h4>

             <div className="grid lg:grid-cols-3" style={{ gap: '2rem' }}>
               {/* Fonds Institutionnels */}
               <div className="group relative flex flex-col h-full">
                 <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[var(--color-accent)]/0 to-[var(--color-accent)]/0 group-hover:from-[var(--color-accent)]/5 group-hover:to-transparent transition-all duration-700 blur-xl"></div>
                 <div className="relative bg-[#161616]/40 backdrop-blur-md border border-white/5 group-hover:border-[var(--color-accent)]/30 rounded-[2rem] flex-grow flex flex-col transition-colors duration-500 p-8 overflow-hidden">
                   <div className="absolute top-0 right-0 bg-[var(--color-accent)] opacity-[0.05] rounded-full blur-2xl" style={{ width: '8rem', height: '8rem' }}></div>
                   
                   <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] group-hover:border-[var(--color-accent)]/30 flex items-center justify-center transition-colors duration-500 relative" style={{ width: '3.5rem', height: '3.5rem', marginBottom: '1.5rem', zIndex: 10 }}>
                     <Target className="text-[var(--color-accent)] group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} size={28}/>
                   </div>
                   
                   <h5 className="text-[var(--color-white)] font-semibold tracking-tight relative z-10" style={{ fontSize: '1.35rem', marginBottom: '1.25rem' }}>Fonds Institutionnels</h5>
                   
                   <div className="relative z-10 bg-gradient-to-r from-[var(--color-accent)] to-transparent opacity-50" style={{ width: '3rem', height: '1px', marginBottom: '1.25rem' }}></div>
                   
                   <p className="text-[var(--color-text-muted)] font-light leading-relaxed flex-grow relative z-10" style={{ fontSize: '1rem' }}>
                     Diversification optimale via l'accès privilégié aux grands fonds fermés (vintages et maturités).
                   </p>
                 </div>
               </div>
               
               {/* Direct & Niche */}
               <div className="group relative flex flex-col h-full">
                 <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[var(--color-accent)]/0 to-[var(--color-accent)]/0 group-hover:from-[var(--color-accent)]/5 group-hover:to-transparent transition-all duration-700 blur-xl"></div>
                 <div className="relative bg-[#161616]/40 backdrop-blur-md border border-white/5 group-hover:border-[var(--color-accent)]/30 rounded-[2rem] flex-grow flex flex-col transition-colors duration-500 p-8 overflow-hidden">
                   <div className="absolute top-0 right-0 bg-[var(--color-accent)] opacity-[0.05] rounded-full blur-2xl" style={{ width: '8rem', height: '8rem' }}></div>
                   
                   <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] group-hover:border-[var(--color-accent)]/30 flex items-center justify-center transition-colors duration-500 relative" style={{ width: '3.5rem', height: '3.5rem', marginBottom: '1.5rem', zIndex: 10 }}>
                     <TrendingUp className="text-[var(--color-accent)] group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} size={28}/>
                   </div>
                   
                   <h5 className="text-[var(--color-white)] font-semibold tracking-tight relative z-10" style={{ fontSize: '1.35rem', marginBottom: '1.25rem' }}>Direct & Niche</h5>
                   
                   <div className="relative z-10 bg-gradient-to-r from-[var(--color-accent)] to-transparent opacity-50" style={{ width: '3rem', height: '1px', marginBottom: '1.25rem' }}></div>
                   
                   <p className="text-[var(--color-text-muted)] font-light leading-relaxed flex-grow relative z-10" style={{ fontSize: '1rem' }}>
                     Exposition ciblée sur des thématiques porteuses (Tech, US, Santé) sans frais intermédiaires.
                   </p>
                 </div>
               </div>

               {/* Club-deals */}
               <div className="group relative flex flex-col h-full">
                 <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[var(--color-accent)]/0 to-[var(--color-accent)]/0 group-hover:from-[var(--color-accent)]/5 group-hover:to-transparent transition-all duration-700 blur-xl"></div>
                 <div className="relative bg-[#161616]/40 backdrop-blur-md border border-white/5 group-hover:border-[var(--color-accent)]/30 rounded-[2rem] flex-grow flex flex-col transition-colors duration-500 p-8 overflow-hidden">
                   <div className="absolute top-0 right-0 bg-[var(--color-accent)] opacity-[0.05] rounded-full blur-2xl" style={{ width: '8rem', height: '8rem' }}></div>
                   
                   <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] group-hover:border-[var(--color-accent)]/30 flex items-center justify-center transition-colors duration-500 relative" style={{ width: '3.5rem', height: '3.5rem', marginBottom: '1.5rem', zIndex: 10 }}>
                     <Crown className="text-[var(--color-accent)] group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} size={28}/>
                   </div>
                   
                   <h5 className="text-white font-semibold tracking-tight relative z-10" style={{ fontSize: '1.35rem', marginBottom: '1.25rem' }}>Club-deals Exclusifs</h5>
                   
                   <div className="relative z-10 bg-gradient-to-r from-[var(--color-accent)] to-transparent opacity-50" style={{ width: '3rem', height: '1px', marginBottom: '1.25rem' }}></div>
                   
                   <p className="text-[var(--color-text-muted)] font-light leading-relaxed flex-grow relative z-10" style={{ fontSize: '1rem' }}>
                     Opérations tangibles confidentielles de PME et dette obligataire offrant une résilience asymétrique.
                   </p>
                 </div>
               </div>
             </div>
           </div>
        </div>

        {/* --- Section 4: Suivi et Reporting --- */}
        <div id="suivi-reporting" style={{ scrollMarginTop: '8rem' }}></div>
        <div className="fade-in relative" style={{ marginBottom: '8rem', paddingTop: '3rem', paddingBottom: '3rem' }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl bg-gradient-to-r from-transparent via-white/10 to-transparent" style={{ height: '1px' }}></div>

          <div className="flex flex-col lg:flex-row items-stretch max-w-6xl mx-auto" style={{ gap: '2rem', marginTop: '4rem' }}>
            {/* Colonne Gauche */}
            <div className="lg:w-5/12 flex flex-col justify-center" style={{ zIndex: 10 }}>
              <h4 className="font-heading text-[var(--color-white)] leading-tight" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '2rem' }}>Monitoring & <br className="hidden lg:block"/>Gouvernance</h4>
              <p className="text-[var(--color-text-muted)] font-light leading-relaxed" style={{ fontSize: '17px' }}>
                Pour s'assurer que la stratégie décidée soit bien celle implémentée, nous imposons l'agrégation de vos comptes et un suivi rigoureux sur l'ensemble des actifs.
              </p>
            </div>

            {/* Colonne Droite */}
            <div className="lg:w-7/12 grid grid-cols-1" style={{ gap: '1rem', zIndex: 10 }}>
              
              <div className="group relative flex flex-col">
                <div className="absolute -inset-2 rounded-[1.5rem] bg-gradient-to-br from-[var(--color-accent)]/0 to-[var(--color-accent)]/0 group-hover:from-[var(--color-accent)]/5 group-hover:to-transparent transition-all duration-700 blur-lg"></div>
                <div className="relative bg-[#161616]/40 backdrop-blur-md border border-white/5 group-hover:border-[var(--color-accent)]/30 rounded-2xl p-6 transition-colors duration-500 flex items-start gap-4">
                  <div className="shrink-0 rounded-2xl bg-white/[0.03] border border-white/[0.08] group-hover:border-[var(--color-accent)]/30 flex items-center justify-center transition-colors duration-500" style={{ width: '3.5rem', height: '3.5rem' }}>
                    <LineChart strokeWidth={1.5} size={24} className="text-[var(--color-accent)] group-hover:scale-110 transition-transform duration-500"/>
                  </div>
                  <div>
                    <h5 className="text-[var(--color-white)] font-semibold tracking-tight" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Marchés Cotés</h5>
                    <p className="text-[var(--color-text-muted)] font-light leading-relaxed" style={{ fontSize: '1rem' }}>Contrôle drastique de la volatilité et respect strict des limites de risques imposées.</p>
                  </div>
                </div>
              </div>
              
              <div className="group relative flex flex-col">
                <div className="absolute -inset-2 rounded-[1.5rem] bg-gradient-to-br from-[var(--color-accent)]/0 to-[var(--color-accent)]/0 group-hover:from-[var(--color-accent)]/5 group-hover:to-transparent transition-all duration-700 blur-lg"></div>
                <div className="relative bg-[#161616]/40 backdrop-blur-md border border-white/5 group-hover:border-[var(--color-accent)]/30 rounded-2xl p-6 transition-colors duration-500 flex items-start gap-4">
                  <div className="shrink-0 rounded-2xl bg-white/[0.03] border border-white/[0.08] group-hover:border-[var(--color-accent)]/30 flex items-center justify-center transition-colors duration-500" style={{ width: '3.5rem', height: '3.5rem' }}>
                    <PieChart strokeWidth={1.5} size={24} className="text-[var(--color-accent)] group-hover:scale-110 transition-transform duration-500"/>
                  </div>
                  <div>
                    <h5 className="text-[var(--color-white)] font-semibold tracking-tight" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Private Equity</h5>
                    <p className="text-[var(--color-text-muted)] font-light leading-relaxed" style={{ fontSize: '1rem' }}>Gestion centralisée des appels de fonds et modélisation précise des cash-flows futurs.</p>
                  </div>
                </div>
              </div>

              <div className="group relative flex flex-col">
                <div className="absolute -inset-2 rounded-[1.5rem] bg-gradient-to-br from-[var(--color-accent)]/0 to-[var(--color-accent)]/0 group-hover:from-[var(--color-accent)]/5 group-hover:to-transparent transition-all duration-700 blur-lg"></div>
                <div className="relative bg-[#161616]/40 backdrop-blur-md border border-white/5 group-hover:border-[var(--color-accent)]/30 rounded-2xl p-6 transition-colors duration-500 flex items-start gap-4">
                  <div className="shrink-0 rounded-2xl bg-white/[0.03] border border-white/[0.08] group-hover:border-[var(--color-accent)]/30 flex items-center justify-center transition-colors duration-500" style={{ width: '3.5rem', height: '3.5rem' }}>
                    <BarChart3 strokeWidth={1.5} size={24} className="text-[var(--color-accent)] group-hover:scale-110 transition-transform duration-500"/>
                  </div>
                  <div>
                    <h5 className="text-[var(--color-white)] font-semibold tracking-tight" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Immobilier</h5>
                    <p className="text-[var(--color-text-muted)] font-light leading-relaxed" style={{ fontSize: '1rem' }}>Pilotage pro-actif des conditions de crédit et consolidation globale des rendements nets.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* --- Section 5: Synthèse --- */}
        <div id="synthese" style={{ scrollMarginTop: '8rem' }}></div>
        <div className="fade-in max-w-5xl mx-auto relative" style={{ paddingTop: '4rem', marginBottom: '2.5rem' }}>
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" style={{ height: '1px' }}></div>

          <h3 className="text-[var(--color-accent)] font-bold tracking-widest uppercase text-center" style={{ fontSize: '0.875rem', marginBottom: '1rem', marginTop: '2rem' }}>La Méthodologie</h3>
          <h4 className="font-heading text-[var(--color-white)] text-center" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '3rem' }}>L'Écosystème Karantek</h4>
          
          <div className="grid lg:grid-cols-3 relative" style={{ gap: '2rem', zIndex: 10 }}>
             {/* Step 1 */}
             <div className="group relative flex flex-col h-full">
               <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[var(--color-accent)]/0 to-[var(--color-accent)]/0 group-hover:from-[var(--color-accent)]/5 group-hover:to-transparent transition-all duration-700 blur-xl"></div>
               <div className="relative bg-[#161616]/40 backdrop-blur-md border border-white/5 group-hover:border-[var(--color-accent)]/30 rounded-[2rem] flex-grow flex flex-col transition-colors duration-500 p-8 overflow-hidden">
                 <div className="absolute -right-4 -bottom-4 font-heading font-bold text-white/[0.02] group-hover:text-[var(--color-accent)]/[0.08] transition-colors duration-500 pointer-events-none" style={{ fontSize: '8rem' }}>01</div>
                 <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] group-hover:border-[var(--color-accent)]/30 flex items-center justify-center transition-colors duration-500 relative" style={{ width: '3.5rem', height: '3.5rem', marginBottom: '1.5rem', zIndex: 10 }}>
                   <ShieldCheck className="text-[var(--color-accent)] group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} size={28}/>
                 </div>
                 <h5 className="text-[var(--color-white)] font-semibold tracking-tight relative" style={{ fontSize: '1.35rem', marginBottom: '1rem', zIndex: 10 }}>Posture Protectrice</h5>
                 <p className="text-[var(--color-text-muted)] font-light leading-relaxed relative flex-grow" style={{ fontSize: '1rem', zIndex: 10 }}>
                   Proximité stratégique d'un Family Office dédiée exclusivement à vos intérêts.
                 </p>
               </div>
             </div>

             {/* Step 2 */}
             <div className="group relative flex flex-col h-full">
               <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[var(--color-accent)]/0 to-[var(--color-accent)]/0 group-hover:from-[var(--color-accent)]/5 group-hover:to-transparent transition-all duration-700 blur-xl"></div>
               <div className="relative bg-[#161616]/40 backdrop-blur-md border border-white/5 group-hover:border-[var(--color-accent)]/30 rounded-[2rem] flex-grow flex flex-col transition-colors duration-500 p-8 overflow-hidden">
                 <div className="absolute -right-4 -bottom-4 font-heading font-bold text-white/[0.02] group-hover:text-[var(--color-accent)]/[0.08] transition-colors duration-500 pointer-events-none" style={{ fontSize: '8rem' }}>02</div>
                 <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] group-hover:border-[var(--color-accent)]/30 flex items-center justify-center transition-colors duration-500 relative" style={{ width: '3.5rem', height: '3.5rem', marginBottom: '1.5rem', zIndex: 10 }}>
                   <Layers className="text-[var(--color-accent)] group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} size={28}/>
                 </div>
                 <h5 className="text-[var(--color-white)] font-semibold tracking-tight relative" style={{ fontSize: '1.35rem', marginBottom: '1rem', zIndex: 10 }}>Sélection Ouverte</h5>
                 <p className="text-[var(--color-text-muted)] font-light leading-relaxed relative flex-grow" style={{ fontSize: '1rem', zIndex: 10 }}>
                   Sélection des meilleurs opérateurs mondiaux sans aucun biais d'affiliation.
                 </p>
               </div>
             </div>

             {/* Step 3 */}
             <div className="group relative flex flex-col h-full">
               <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[var(--color-accent)]/0 to-[var(--color-accent)]/0 group-hover:from-[var(--color-accent)]/5 group-hover:to-transparent transition-all duration-700 blur-xl"></div>
               <div className="relative bg-[#161616]/40 backdrop-blur-md border border-white/5 group-hover:border-[var(--color-accent)]/30 rounded-[2rem] flex-grow flex flex-col transition-colors duration-500 p-8 overflow-hidden">
                 <div className="absolute -right-4 -bottom-4 font-heading font-bold text-white/[0.02] group-hover:text-[var(--color-accent)]/[0.08] transition-colors duration-500 pointer-events-none" style={{ fontSize: '8rem' }}>03</div>
                 <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] group-hover:border-[var(--color-accent)]/30 flex items-center justify-center transition-colors duration-500 relative" style={{ width: '3.5rem', height: '3.5rem', marginBottom: '1.5rem', zIndex: 10 }}>
                   <Target className="text-[var(--color-accent)] group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} size={28}/>
                 </div>
                 <h5 className="text-[var(--color-white)] font-semibold tracking-tight relative" style={{ fontSize: '1.35rem', marginBottom: '1rem', zIndex: 10 }}>Consolidation</h5>
                 <p className="text-[var(--color-text-muted)] font-light leading-relaxed relative flex-grow" style={{ fontSize: '1rem', zIndex: 10 }}>
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
