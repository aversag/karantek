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
    <section id="offre" className="section services-section py-24 lg:py-32">
      <div className="container max-w-7xl mx-auto px-6">
        
        {/* Intro */}
        <div className="text-center mb-20 fade-in">
          <h2 className="text-4xl lg:text-5xl font-heading text-[var(--color-white)] mb-6">Notre proposition de valeur</h2>
          <div className="w-24 h-1 bg-[var(--color-accent)] mx-auto opacity-50 rounded-full"></div>
        </div>

        {/* --- Section 1: Les Piliers --- */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-32">
          {/* Pilier 1 */}
          <div className="group relative flex flex-col">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[var(--color-accent)]/0 to-[var(--color-accent)]/0 group-hover:from-[var(--color-accent)]/5 group-hover:to-transparent transition-all duration-700 blur-xl"></div>
            <div className="relative flex-grow flex flex-col">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mr-5 group-hover:border-[var(--color-accent)]/30 transition-colors duration-500">
                  <Briefcase strokeWidth={1.5} size={28} className="text-[var(--color-accent)]" />
                </div>
                <h3 className="text-3xl lg:text-4xl text-[var(--color-white)] font-semibold font-heading leading-tight tracking-tight">Gestion<br/>Financière</h3>
              </div>
              <div className="w-12 h-[1px] bg-gradient-to-r from-[var(--color-accent)] to-transparent mb-6 opacity-50"></div>
              <p className="text-[17px] text-[var(--color-text-muted)] leading-relaxed font-light break-words">
                Alignement strict de nos intérêts avec les vôtres, contrôle méthodique de la performance et transparence totale sur les coûts.
              </p>
            </div>
          </div>

          {/* Pilier 2 */}
          <div className="group relative flex flex-col">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[var(--color-accent)]/0 to-[var(--color-accent)]/0 group-hover:from-[var(--color-accent)]/5 group-hover:to-transparent transition-all duration-700 blur-xl"></div>
            <div className="relative flex-grow flex flex-col">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mr-5 group-hover:border-[var(--color-accent)]/30 transition-colors duration-500">
                  <Building2 strokeWidth={1.5} size={28} className="text-[var(--color-accent)]" />
                </div>
                <h3 className="text-3xl lg:text-4xl text-[var(--color-white)] font-semibold font-heading leading-tight tracking-tight">Gestion<br/>Immobilière</h3>
              </div>
              <div className="w-12 h-[1px] bg-gradient-to-r from-[var(--color-accent)] to-transparent mb-6 opacity-50"></div>
              <p className="text-[17px] text-[var(--color-text-muted)] leading-relaxed font-light break-words">
                Accès privilégié à des foncières dédiées et club deals exclusifs. Structuration de co-investissements et optimisation fiscale rigoureuse.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-32 fade-in text-center px-4" style={{ padding: '2rem 0' }}>
          <blockquote className="text-2xl md:text-3xl italic text-[var(--color-white)] max-w-4xl mx-auto font-light leading-snug">
            "Que la stratégie soit belle, mais n'oubliez pas de regarder le résultat."
            <footer className="mt-8 text-[var(--color-accent)] font-semibold tracking-widest uppercase text-sm">— Winston Churchill</footer>
          </blockquote>
        </div>

        {/* --- Section 2: Investissement Coté --- */}
        <div id="investissement-cote" className="scroll-mt-32"></div>
        <div className="mb-32 fade-in relative">
          {/* Décoration asymétrique arrière-plan */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-[var(--color-accent)] opacity-[0.02] rounded-full blur-[100px] pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            {/* Colonne Titre (Gauche) */}
            <div className="lg:w-1/3 z-10">
              <h3 className="text-sm text-[var(--color-accent)] font-bold tracking-widest uppercase mb-4">Les Marchés Publics</h3>
              <h4 className="text-4xl lg:text-5xl font-heading text-[var(--color-white)] mb-6 leading-tight">L'Investissement<br/>Coté</h4>
              <p className="text-[17px] text-[var(--color-text-muted)] font-light leading-relaxed">
                Une approche rigoureuse et adaptable pour naviguer sereinement sur les marchés financiers.
              </p>
            </div>

            {/* Colonne Contenu (Droite) */}
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8 lg:gap-12 z-10 w-full">
              <div className="flex flex-col group relative">
                <div className="w-12 h-12 mb-6 text-[var(--color-accent)] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                  <SlidersHorizontal strokeWidth={1.5} size={40} />
                </div>
                <h5 className="text-2xl text-[var(--color-white)] font-semibold mb-4 tracking-tight">Gestion Personnalisée</h5>
                <p className="text-[var(--color-text-muted)] font-light leading-relaxed text-[16px]">
                  Agilité tactique, intégration ESG et création de produits structurés sur-mesure.
                </p>
              </div>

              <div className="flex flex-col group relative">
                <div className="w-12 h-12 mb-6 text-[var(--color-accent)] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                  <Users strokeWidth={1.5} size={40} />
                </div>
                <h5 className="text-2xl text-[var(--color-white)] font-semibold mb-4 tracking-tight">Gestion Déléguée</h5>
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
        
        <div className="mb-32 fade-in relative">
           {/* Décoration asymétrique arrière-plan */}
           <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--color-accent)] opacity-[0.02] rounded-full blur-[100px] pointer-events-none z-0"></div>

           <div className="relative z-10">
             <h3 className="text-sm text-[var(--color-accent)] font-bold tracking-widest uppercase mb-4 text-center">L'Économie Réelle</h3>
             <h4 className="text-4xl lg:text-5xl font-heading text-[var(--color-white)] mb-16 text-center">Les Marchés Privés & Immobiliers</h4>

             <div className="grid lg:grid-cols-3 gap-8 xl:gap-12">
               {/* Fonds Institutionnels */}
               <div className="group relative flex flex-col h-full">
                 <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-b from-[var(--color-accent)]/0 to-[var(--color-accent)]/0 group-hover:from-[var(--color-accent)]/5 group-hover:to-transparent transition-all duration-700 blur-xl"></div>
                 <div className="relative bg-[#161616]/40 backdrop-blur-md border border-white/5 rounded-[2.5rem] p-10 lg:p-12 flex-grow flex flex-col group-hover:border-[var(--color-accent)]/20 transition-colors duration-500">
                   <Target className="text-[var(--color-accent)] mb-8 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" strokeWidth={1.5} size={36}/>
                   <h5 className="text-2xl text-[var(--color-white)] font-semibold mb-6 tracking-tight">Fonds Institutionnels</h5>
                   <p className="text-[var(--color-text-muted)] font-light text-[16px] leading-relaxed flex-grow">
                     Diversification optimale via l'accès privilégié aux grands fonds fermés (vintages et maturités).
                   </p>
                 </div>
               </div>
               
               {/* Direct & Niche */}
               <div className="group relative flex flex-col h-full">
                 <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-b from-[var(--color-accent)]/0 to-[var(--color-accent)]/0 group-hover:from-[var(--color-accent)]/5 group-hover:to-transparent transition-all duration-700 blur-xl"></div>
                 <div className="relative bg-[#161616]/40 backdrop-blur-md border border-white/5 rounded-[2.5rem] p-10 lg:p-12 flex-grow flex flex-col group-hover:border-[var(--color-accent)]/20 transition-colors duration-500">
                   <TrendingUp className="text-[var(--color-accent)] mb-8 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" strokeWidth={1.5} size={36}/>
                   <h5 className="text-2xl text-[var(--color-white)] font-semibold mb-6 tracking-tight">Direct & Niche</h5>
                   <p className="text-[var(--color-text-muted)] font-light text-[16px] leading-relaxed flex-grow">
                     Exposition ciblée sur des thématiques porteuses (Tech, US, Santé) sans frais intermédiaires.
                   </p>
                 </div>
               </div>

               {/* Club-deals */}
               <div className="group relative flex flex-col h-full">
                 <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-b from-[var(--color-accent)]/0 to-[var(--color-accent)]/0 group-hover:from-[var(--color-accent)]/10 group-hover:to-transparent transition-all duration-700 blur-xl"></div>
                 <div className="relative bg-gradient-to-br from-[#161616]/80 to-[var(--color-accent)]/5 backdrop-blur-md border border-white/5 group-hover:border-[var(--color-accent)]/30 rounded-[2.5rem] p-10 lg:p-12 flex-grow flex flex-col transition-colors duration-500 overflow-hidden">
                   {/* Reflet subtil interne */}
                   <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)] opacity-[0.05] rounded-full blur-2xl"></div>
                   
                   <Crown className="text-[var(--color-white)] mb-8 opacity-90 group-hover:opacity-100 group-hover:scale-110 group-hover:text-[var(--color-accent)] transition-all duration-500" strokeWidth={1.5} size={36}/>
                   <h5 className="text-2xl text-white font-semibold mb-6 tracking-tight relative z-10">Club-deals Exclusifs</h5>
                   <div className="w-8 h-[1px] bg-[var(--color-accent)] mb-6 opacity-50"></div>
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
        <div className="mb-32 fade-in relative py-12">
          {/* Ligne très fine de séparation (Premium minimalisme) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start max-w-6xl mx-auto mt-16">
            {/* Colonne Gauche (Bloc Asymétrique) */}
            <div className="lg:w-5/12 sticky top-32 z-10">
              <h4 className="text-4xl lg:text-5xl font-heading text-[var(--color-white)] mb-8 leading-tight">Monitoring & <br className="hidden lg:block"/>Gouvernance</h4>
              <p className="text-[17px] text-[var(--color-text-muted)] font-light leading-relaxed">
                Pour s'assurer que la stratégie décidée soit bien celle implémentée, nous imposons l'agrégation de vos comptes et un suivi rigoureux sur l'ensemble des actifs.
              </p>
            </div>

            {/* Colonne Droite (Liste fluide sans boîtes) */}
            <div className="lg:w-7/12 flex flex-col gap-12 z-10">
              <div className="flex gap-6 group">
                <div className="w-12 h-12 shrink-0 rounded-full border border-white/5 flex items-center justify-center text-[var(--color-white)] group-hover:border-[var(--color-accent)]/30 group-hover:text-[var(--color-accent)] transition-colors duration-500">
                  <LineChart strokeWidth={1.5} size={20}/>
                </div>
                <div>
                  <h5 className="text-2xl text-[var(--color-white)] font-semibold mb-3 tracking-tight">Marchés Cotés</h5>
                  <p className="text-[var(--color-text-muted)] font-light text-[16px] leading-relaxed">Contrôle drastique de la volatilité et respect strict des limites de risques imposées.</p>
                </div>
              </div>
              
              <div className="w-full h-[1px] bg-white/5"></div>

              <div className="flex gap-6 group">
                <div className="w-12 h-12 shrink-0 rounded-full border border-white/5 flex items-center justify-center text-[var(--color-white)] group-hover:border-[var(--color-accent)]/30 group-hover:text-[var(--color-accent)] transition-colors duration-500">
                  <PieChart strokeWidth={1.5} size={20}/>
                </div>
                <div>
                  <h5 className="text-2xl text-[var(--color-white)] font-semibold mb-3 tracking-tight">Private Equity</h5>
                  <p className="text-[var(--color-text-muted)] font-light text-[16px] leading-relaxed">Gestion centralisée des appels de fonds et modélisation précise des cash-flows futurs.</p>
                </div>
              </div>

              <div className="w-full h-[1px] bg-white/5"></div>

              <div className="flex gap-6 group">
                <div className="w-12 h-12 shrink-0 rounded-full border border-white/5 flex items-center justify-center text-[var(--color-accent)] group-hover:border-[var(--color-accent)]/50 transition-colors duration-500">
                  <BarChart3 strokeWidth={1.5} size={20}/>
                </div>
                <div>
                  <h5 className="text-2xl text-[var(--color-white)] font-semibold mb-3 tracking-tight">Immobilier</h5>
                  <p className="text-[var(--color-text-muted)] font-light text-[16px] leading-relaxed">Pilotage pro-actif des conditions de crédit et consolidation globale des rendements nets.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Section 5: Synthèse --- */}
        <div id="synthese" className="scroll-mt-32"></div>
        <div className="fade-in max-w-5xl mx-auto mb-10 pt-16 relative">
           {/* Ligne très fine de séparation (Premium minimalisme) */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          <h3 className="text-sm text-[var(--color-accent)] font-bold tracking-widest uppercase mb-4 text-center mt-8">La Méthodologie</h3>
          <h4 className="text-4xl lg:text-5xl font-heading text-[var(--color-white)] mb-24 text-center">L'Écosystème Karantek</h4>
          
          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
             
             {/* Step 1 */}
             <div className="group relative flex flex-col h-full">
               <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-b from-[var(--color-accent)]/0 to-[var(--color-accent)]/0 group-hover:from-[var(--color-accent)]/5 group-hover:to-transparent transition-all duration-700 blur-xl"></div>
               <div className="relative bg-[#161616]/40 backdrop-blur-md border border-white/5 group-hover:border-[var(--color-accent)]/30 rounded-[2rem] p-10 flex-grow flex flex-col transition-colors duration-500 overflow-hidden">
                 <div className="absolute -right-4 -bottom-4 text-9xl font-heading font-bold text-white/[0.02] group-hover:text-[var(--color-accent)]/[0.08] transition-colors duration-500 pointer-events-none">01</div>
                 
                 <div className="w-14 h-14 mb-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:border-[var(--color-accent)]/30 transition-colors duration-500 relative z-10">
                   <ShieldCheck className="text-[var(--color-accent)]" strokeWidth={1.5} size={28}/>
                 </div>
                 
                 <h5 className="text-2xl text-[var(--color-white)] font-semibold mb-4 tracking-tight relative z-10">Posture Protectrice</h5>
                 <div className="w-8 h-[1px] bg-[var(--color-accent)] mb-6 opacity-50 relative z-10"></div>
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
                 
                 <div className="w-14 h-14 mb-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:border-[var(--color-accent)]/30 transition-colors duration-500 relative z-10">
                   <Layers className="text-[var(--color-accent)]" strokeWidth={1.5} size={28}/>
                 </div>
                 
                 <h5 className="text-2xl text-[var(--color-white)] font-semibold mb-4 tracking-tight relative z-10">Sélection Ouverte</h5>
                 <div className="w-8 h-[1px] bg-[var(--color-accent)] mb-6 opacity-50 relative z-10"></div>
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
                 
                 <div className="w-14 h-14 mb-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:border-[var(--color-accent)]/30 transition-colors duration-500 relative z-10">
                   <Target className="text-[var(--color-accent)]" strokeWidth={1.5} size={28}/>
                 </div>
                 
                 <h5 className="text-2xl text-[var(--color-white)] font-semibold mb-4 tracking-tight relative z-10">Consolidation</h5>
                 <div className="w-8 h-[1px] bg-[var(--color-accent)] mb-6 opacity-50 relative z-10"></div>
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
