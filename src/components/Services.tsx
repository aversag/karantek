import { 
  Briefcase, 
  Building2, 
  CheckCircle2, 
  SlidersHorizontal, 
  Users, 
  Landmark, 
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
      <div className="container">
        
        {/* Slide: Notre offre */}
        <h2 className="section-title fade-in">Notre offre</h2>
        <div className="services-grid mb-12">
          <div className="bg-white/[0.02] rounded-3xl p-10 fade-in delay-1">
            <div className="service-header flex items-center mb-6">
              <Briefcase size={40} className="service-icon mr-4 text-[var(--color-accent)]" />
              <div>
                <span className="text-sm text-[var(--color-accent)] font-bold tracking-widest uppercase">01</span>
                <h3>Une gestion financière sur-mesure</h3>
              </div>
            </div>
            <ul className="service-list flex flex-col mt-4">
              <li className="flex items-start py-5">
                <CheckCircle2 size={16} className="check-icon flex-shrink-0 mt-1 mr-4 text-[var(--color-accent)] opacity-60" />
                <span className="font-light text-base leading-relaxed">Construire ensemble un portefeuille sur-mesure et diversifié</span>
              </li>
              <li className="flex items-start py-5">
                <CheckCircle2 size={16} className="check-icon flex-shrink-0 mt-1 mr-4 text-[var(--color-accent)] opacity-60" />
                <span className="font-light text-base leading-relaxed">Alignement d'intérêt / totale transparence de nos investissements</span>
              </li>
              <li className="flex items-start py-5">
                <CheckCircle2 size={16} className="check-icon flex-shrink-0 mt-1 mr-4 text-[var(--color-accent)] opacity-60" />
                <span className="font-light text-base leading-relaxed">Investissements en direct sur les marchés financiers internationaux</span>
              </li>
              <li className="flex items-start py-5">
                <CheckCircle2 size={16} className="check-icon flex-shrink-0 mt-1 mr-4 text-[var(--color-accent)] opacity-60" />
                <span className="font-light text-base leading-relaxed">Contrôle des coûts et des performances bancaires / Reporting consolidé</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/[0.02] rounded-3xl p-10 fade-in delay-2">
            <div className="service-header flex items-center mb-6">
              <Building2 size={40} className="service-icon mr-4 text-[var(--color-accent)]" />
              <div>
                <span className="text-sm text-[var(--color-accent)] font-bold tracking-widest uppercase">02</span>
                <h3>Une gestion immobilière innovante</h3>
              </div>
            </div>
            <ul className="service-list flex flex-col mt-4">
              <li className="flex items-start py-5">
                <CheckCircle2 size={16} className="check-icon flex-shrink-0 mt-1 mr-4 text-[var(--color-accent)] opacity-60" />
                <span className="font-light text-base leading-relaxed">Clubs deals dédiés (18/24 mois) / Foncière dédiée (horizon long terme / transmission)</span>
              </li>
              <li className="flex items-start py-5">
                <CheckCircle2 size={16} className="check-icon flex-shrink-0 mt-1 mr-4 text-[var(--color-accent)] opacity-60" />
                <span className="font-light text-base leading-relaxed">Co-investissements en direct, aux côtés d'opérateurs immobiliers de premier rang, dans le cadre du Pacte Dutreil</span>
              </li>
              <li className="flex items-start py-5">
                <CheckCircle2 size={16} className="check-icon flex-shrink-0 mt-1 mr-4 text-[var(--color-accent)] opacity-60" />
                <span className="font-light text-base leading-relaxed">Investissements diversifiés (hôtels, camping, bureaux...) dans le cadre de l'article 150-O B ter</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="quote-container fade-in delay-3 mb-20 text-right pr-8">
          <blockquote className="text-xl italic text-[var(--color-text-muted)] border-l-0 border-r-4 border-[var(--color-accent)] pr-4">
            "Que la stratégie soit belle, mais n'oubliez pas de regarder le résultat"
            <footer className="mt-2 text-[var(--color-text)] font-semibold">— Winston Churchill</footer>
          </blockquote>
        </div>

        {/* Slide: Une double approche de l'investissement coté */}
        <div id="investissement-cote" className="scroll-mt-24"></div>
        <h3 className="text-3xl font-heading text-[var(--color-white)] mb-8 fade-in mt-16">Une double approche de l'investissement coté</h3>
        <div className="grid md:grid-cols-2 gap-12 mb-20 fade-in delay-1">
          <div className="bg-white/[0.02] rounded-3xl p-10">
            <div className="flex items-center justify-center mb-6">
              <SlidersHorizontal size={48} className="text-[var(--color-accent)]" />
            </div>
            <h4 className="text-2xl text-center mb-6 text-[var(--color-white)]">Une gestion personnalisée</h4>
            <p className="mb-8 text-[var(--color-text-muted)] text-[15px] leading-relaxed italic min-h-[60px]">
              Karantek recommande des investissements et vous décidez d'investir. C'est une partition à quatre mains, l'opportunité pour un investisseur de donner vie à ses convictions dans un cadre optimal et performant.
            </p>
            <ul className="flex flex-col mt-4 space-y-2">
              <li className="flex items-start py-5"><Target size={16} className="mr-5 mt-1 text-[var(--color-accent)] flex-shrink-0 opacity-60"/> <span className="leading-relaxed font-light text-base">Opportunisme thématique, 100% libre et flexible</span></li>
              <li className="flex items-start py-5"><TrendingUp size={16} className="mr-5 mt-1 text-[var(--color-accent)] flex-shrink-0 opacity-60"/> <span className="leading-relaxed font-light text-base">Opportunisme en fonction des conditions de marché</span></li>
              <li className="flex items-start py-5"><Layers size={16} className="mr-5 mt-1 text-[var(--color-accent)] flex-shrink-0 opacity-60"/> <span className="leading-relaxed font-light text-base">Produits Structurés 100% sur mesure</span></li>
              <li className="flex items-start py-5"><ShieldCheck size={16} className="mr-5 mt-1 text-[var(--color-accent)] flex-shrink-0 opacity-60"/> <span className="leading-relaxed font-light text-base">Une gestion ESG sur mesure</span></li>
            </ul>
          </div>
          <div className="bg-white/[0.02] rounded-3xl p-10">
            <div className="flex items-center justify-center mb-6">
              <Users size={48} className="text-[var(--color-accent)]" />
            </div>
            <h4 className="text-2xl text-center mb-6 text-[var(--color-white)]">La gestion déléguée</h4>
            <p className="mb-8 text-[var(--color-text-muted)] text-[15px] leading-relaxed italic min-h-[60px]">
              En donnant différents mandats de gestion à plusieurs Asset Manager, Karantek permet de :
            </p>
            <ul className="flex flex-col mt-4 space-y-2">
              <li className="flex items-start py-5"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 mr-5 opacity-40 flex-shrink-0"></span><span className="leading-relaxed font-light text-base">Challenger les gérants entre eux</span></li>
              <li className="flex items-start py-5"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 mr-5 opacity-40 flex-shrink-0"></span><span className="leading-relaxed font-light text-base">Chercher différentes expertises (sectorielles, géographiques, ISR)</span></li>
              <li className="flex items-start py-5"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 mr-5 opacity-40 flex-shrink-0"></span><span className="leading-relaxed font-light text-base">Mixer les tailles de sociétés de gestion (agilité des équipes)</span></li>
              <li className="flex items-start py-5"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 mr-5 opacity-40 flex-shrink-0"></span><span className="leading-relaxed font-light text-base">Mettre en place un reporting consolidé</span></li>
              <li className="flex items-start py-5"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 mr-5 opacity-40 flex-shrink-0"></span><span className="leading-relaxed font-light text-base">Améliorer les conditions financières proposées par les banques (appels d'offres)</span></li>
              <li className="flex items-start py-5"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 mr-5 opacity-40 flex-shrink-0"></span><span className="leading-relaxed font-light text-base">S'associer les services de Gérants Stars</span></li>
            </ul>
          </div>
        </div>

        {/* Slide: Une double approche de l'investissement Immobilier */}
        <div id="investissement-immobilier" className="scroll-mt-24"></div>
        <h3 className="text-3xl font-heading text-[var(--color-white)] mb-4 fade-in mt-16">Une double approche de l'investissement Immobilier</h3>
        <p className="text-center text-[var(--color-accent)] text-lg mb-12 uppercase tracking-widest font-semibold fade-in">Deux services de conseils complémentaires</p>
        <div className="grid md:grid-cols-2 gap-12 mb-20 fade-in delay-1">
          <div className="bg-white/[0.02] rounded-3xl border-l-4 border-l-[var(--color-accent)] p-10">
            <h4 className="text-2xl text-[var(--color-white)] mb-8 flex items-center font-semibold"><Landmark className="mr-3 text-[var(--color-accent)]"/> Fonds Institutionnels</h4>
            <ul className="flex flex-col mt-4 text-[var(--color-text-muted)] text-base space-y-2">
              <li className="flex items-start py-5"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 mr-5 flex-shrink-0 opacity-40"></div> <span className="leading-relaxed font-light">Bénéficier d'une importante diversification</span></li>
              <li className="flex items-start py-5"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 mr-5 flex-shrink-0 opacity-40"></div> <span className="leading-relaxed font-light">Mixer les stratégies</span></li>
              <li className="flex items-start py-5"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 mr-5 flex-shrink-0 opacity-40"></div> <span className="leading-relaxed font-light">Se construire un fonds de portefeuille résilient</span></li>
              <li className="flex items-start py-5"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 mr-5 flex-shrink-0 opacity-40"></div> <span className="leading-relaxed font-light">Adresser des marchés internationaux</span></li>
              <li className="flex items-start py-5"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 mr-5 flex-shrink-0 opacity-40"></div> <span className="leading-relaxed font-light">Participer à des opérations dont les montants excluent les interventions en direct</span></li>
            </ul>
          </div>
          <div className="bg-white/[0.02] rounded-3xl border-l-4 border-l-[var(--color-white)] p-10">
            <h4 className="text-2xl text-[var(--color-white)] mb-8 flex items-center font-semibold"><Crown className="mr-3 text-[var(--color-white)]"/> Club-Deal exclusifs</h4>
            <ul className="flex flex-col mt-4 text-[var(--color-text-muted)] text-base space-y-2">
              <li className="flex items-start py-5"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-white)] mt-2 mr-5 flex-shrink-0 opacity-30"></div> <span className="leading-relaxed font-light">Être conseillé sur des opérations immobilières dédiées dans un cadre fiscal avantageux (remploi, pacte Dutreil)</span></li>
              <li className="flex items-start py-5"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-white)] mt-2 mr-5 flex-shrink-0 opacity-30"></div> <span className="leading-relaxed font-light">Accéder à des investissements sur-mesure et confidentiels (dette obligataire court terme, bridge)</span></li>
            </ul>
          </div>
        </div>

        {/* Slide: Une triple approche de l'investissement non coté */}
        <div id="investissement-non-cote" className="scroll-mt-24"></div>
        <h3 className="text-3xl font-heading text-[var(--color-white)] mb-8 fade-in mt-16">Une triple approche de l'investissement non coté</h3>
        <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-12 mb-20 relative">
          {/* subtle line behind */}
          <div className="hidden lg:block absolute top-[55px] left-10 right-10 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-20 -z-10"></div>
          
          <div className="bg-white/[0.02] rounded-3xl p-12 fade-in delay-1 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[var(--color-bg)] border-2 border-[var(--color-accent)] flex items-center justify-center text-[var(--color-accent)] font-bold text-lg">1</div>
            <h4 className="text-xl text-center text-[var(--color-accent)] font-bold uppercase tracking-wide py-2 mb-10 mt-6">Mandat de gestion</h4>
            <ul className="flex flex-col mt-4 text-base text-[var(--color-text-muted)] space-y-2">
              <li className="flex items-start py-5"><span className="text-[var(--color-accent)] opacity-40 mr-4 font-mono select-none">›</span> <span className="leading-relaxed font-light">Accéder à des fonds réservés aux Institutionnels</span></li>
              <li className="flex items-start py-5"><span className="text-[var(--color-accent)] opacity-40 mr-4 font-mono select-none">›</span> <span className="leading-relaxed font-light">Bénéficier d'une large diversification de stratégies</span></li>
              <li className="flex items-start py-5"><span className="text-[var(--color-accent)] opacity-40 mr-4 font-mono select-none">›</span> <span className="leading-relaxed font-light">Panacher son risque (plusieurs millésimes)</span></li>
              <li className="flex items-start py-5"><span className="text-[var(--color-accent)] opacity-40 mr-4 font-mono select-none">›</span> <span className="leading-relaxed font-light">Investir aux cotés des Banques</span></li>
            </ul>
          </div>
          <div className="bg-white/[0.02] rounded-3xl p-12 fade-in delay-2 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[var(--color-bg)] border-2 border-[var(--color-accent)] flex items-center justify-center text-[var(--color-accent)] font-bold text-lg">2</div>
            <h4 className="text-xl text-center text-[var(--color-accent)] font-bold uppercase tracking-wide py-2 mb-8 mt-6">Stock picking</h4>
            <ul className="flex flex-col mt-4 text-base text-[var(--color-text-muted)] space-y-2">
              <li className="flex items-start py-5"><span className="text-[var(--color-accent)] opacity-40 mr-4 font-mono select-none">›</span> <span className="leading-relaxed font-light">Avoir la liberté de choisir ses investissements</span></li>
              <li className="flex items-start py-5"><span className="text-[var(--color-accent)] opacity-40 mr-4 font-mono select-none">›</span> <span className="leading-relaxed font-light">Accéder à des stratégies non adressées par les Banques</span></li>
              <li className="flex items-start py-5"><span className="text-[var(--color-accent)] opacity-40 mr-4 font-mono select-none">›</span> <span className="leading-relaxed font-light">Meilleure couverture de la zone US</span></li>
              <li className="flex items-start py-5"><span className="text-[var(--color-accent)] opacity-40 mr-4 font-mono select-none">›</span> <span className="leading-relaxed font-light">Avoir une stratégie plus pure</span></li>
              <li className="flex items-start py-5"><span className="text-[var(--color-accent)] opacity-40 mr-4 font-mono select-none">›</span> <span className="leading-relaxed font-light">Optimiser les frais (économie des frais de mandats)</span></li>
            </ul>
          </div>
          <div className="bg-white/[0.02] rounded-3xl p-12 fade-in delay-3 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[var(--color-bg)] border-2 border-[var(--color-accent)] flex items-center justify-center text-[var(--color-accent)] font-bold text-lg">3</div>
            <h4 className="text-xl text-center text-[var(--color-accent)] font-bold uppercase tracking-wide py-2 mb-8 mt-6">Club-Deal exclusifs</h4>
            <ul className="flex flex-col mt-4 text-base text-[var(--color-text-muted)] space-y-2">
              <li className="flex items-start py-5"><span className="text-[var(--color-accent)] opacity-40 mr-4 font-mono select-none">›</span> <span className="leading-relaxed font-light">Construire des investissements plus tangibles</span></li>
              <li className="flex items-start py-5"><span className="text-[var(--color-accent)] opacity-40 mr-4 font-mono select-none">›</span> <span className="leading-relaxed font-light">Diversifier les moteurs de performance</span></li>
              <li className="flex items-start py-5"><span className="text-[var(--color-accent)] opacity-40 mr-4 font-mono select-none">›</span> <span className="leading-relaxed font-light">Être plus immiscé dans les opérations</span></li>
              <li className="flex items-start py-5"><span className="text-[var(--color-accent)] opacity-40 mr-4 font-mono select-none">›</span> <span className="leading-relaxed font-light">S'exposer à des stratégies non couvertes par les grands institutionnels (PME / Start-up)</span></li>
            </ul>
          </div>
        </div>

        {/* Slide: Suivi et reporting sur-mesure */}
        <div id="suivi-reporting" className="scroll-mt-24"></div>
        <h3 className="text-3xl font-heading text-[var(--color-white)] mb-8 fade-in mt-16">Suivi et reporting sur-mesure</h3>
        <div className="grid md:grid-cols-3 gap-16 mb-12">
          <div className="bg-white/[0.02] rounded-3xl p-10 fade-in delay-1 flex flex-col items-center text-center group hover:bg-white/[0.04] transition-colors duration-300">
            <div className="w-16 h-16 rounded-full bg-[rgba(235,94,40,0.1)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <LineChart className="text-[var(--color-accent)]" size={32} />
            </div>
            <h4 className="text-[var(--color-white)] font-bold text-xl mb-6">Actifs cotés</h4>
            <ul className="flex flex-col text-base text-[var(--color-text-muted)] text-left w-full mt-2 space-y-2">
              <li className="py-5 font-light flex items-start"><span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full mt-1.5 mr-4 opacity-30 flex-shrink-0"></span><span className="leading-relaxed">Point Trimestriel avec les gérants</span></li>
              <li className="py-5 font-light flex items-start"><span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full mt-1.5 mr-4 opacity-30 flex-shrink-0"></span><span className="leading-relaxed">Contexte Macro Economique</span></li>
              <li className="py-5 font-light flex items-start"><span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full mt-1.5 mr-4 opacity-30 flex-shrink-0"></span><span className="leading-relaxed">Analyse technique des marchés</span></li>
              <li className="py-5 font-light flex items-start"><span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full mt-1.5 mr-4 opacity-30 flex-shrink-0"></span><span className="leading-relaxed">Suivi des performances et des coûts</span></li>
              <li className="py-5 font-light flex items-start"><span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full mt-1.5 mr-4 opacity-30 flex-shrink-0"></span><span className="leading-relaxed">Contrôle de la volatilité</span></li>
              <li className="py-5 font-light flex items-start"><span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full mt-1.5 mr-4 opacity-30 flex-shrink-0"></span><span className="leading-relaxed">Respect du risque déterminé</span></li>
              <li className="py-5 font-light flex items-start"><span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full mt-1.5 mr-4 opacity-30 flex-shrink-0"></span><span className="leading-relaxed">Calendrier de remboursement</span></li>
            </ul>
          </div>
          <div className="bg-white/[0.02] rounded-3xl p-10 fade-in delay-2 flex flex-col items-center text-center group hover:bg-white/[0.04] transition-colors duration-300">
            <div className="w-16 h-16 rounded-full bg-[rgba(235,94,40,0.1)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <PieChart className="text-[var(--color-accent)]" size={32} />
            </div>
            <h4 className="text-[var(--color-white)] font-bold text-xl mb-6">Actifs non cotés</h4>
            <ul className="flex flex-col text-base text-[var(--color-text-muted)] text-left w-full mt-2 space-y-2">
              <li className="py-5 font-light flex items-start"><span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full mt-1.5 mr-4 opacity-30 flex-shrink-0"></span><span className="leading-relaxed">Analyse des reportings (fonds institutionnels)</span></li>
              <li className="py-5 font-light flex items-start"><span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full mt-1.5 mr-4 opacity-30 flex-shrink-0"></span><span className="leading-relaxed">Point de gestion avec les gérants (fonds entrepreneuriaux)</span></li>
              <li className="py-5 font-light flex items-start"><span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full mt-1.5 mr-4 opacity-30 flex-shrink-0"></span><span className="leading-relaxed">Calendrier des déploiements (et des retours)</span></li>
              <li className="py-5 font-light flex items-start"><span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full mt-1.5 mr-4 opacity-30 flex-shrink-0"></span><span className="leading-relaxed">Suivi et contrôle du respect des politiques d'investissement</span></li>
              <li className="py-5 font-light flex items-start"><span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full mt-1.5 mr-4 opacity-30 flex-shrink-0"></span><span className="leading-relaxed">Suivi de la vie des participations</span></li>
            </ul>
          </div>
          <div className="bg-white/[0.02] rounded-3xl p-10 fade-in delay-3 flex flex-col items-center text-center group hover:bg-white/[0.04] transition-colors duration-300">
            <div className="w-16 h-16 rounded-full bg-[rgba(235,94,40,0.1)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <BarChart3 className="text-[var(--color-accent)]" size={32} />
            </div>
            <h4 className="text-[var(--color-white)] font-bold text-xl mb-6">Actifs Immobiliers</h4>
            <ul className="flex flex-col text-base text-[var(--color-text-muted)] text-left w-full mt-2 space-y-2">
              <li className="py-5 font-light flex items-start"><span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full mt-1.5 mr-4 opacity-30 flex-shrink-0"></span><span className="leading-relaxed">Analyse des reportings (fonds institutionnels)</span></li>
              <li className="py-5 font-light flex items-start"><span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full mt-1.5 mr-4 opacity-30 flex-shrink-0"></span><span className="leading-relaxed">Point de gestion avec les opérateurs</span></li>
              <li className="py-5 font-light flex items-start"><span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full mt-1.5 mr-4 opacity-30 flex-shrink-0"></span><span className="leading-relaxed">Suivi des opérations pour les investissements en direct</span></li>
              <li className="py-5 font-light flex items-start"><span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full mt-1.5 mr-4 opacity-30 flex-shrink-0"></span><span className="leading-relaxed">Calendrier des déploiements</span></li>
              <li className="py-5 font-light flex items-start"><span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full mt-1.5 mr-4 opacity-30 flex-shrink-0"></span><span className="leading-relaxed">Pilotage des enveloppes de crédit</span></li>
            </ul>
          </div>
        </div>
        <div className="bg-white/[0.02] rounded-3xl p-10 sm:p-12 text-center fade-in delay-4 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)] opacity-10 blur-3xl rounded-full"></div>
          <p className="mb-4 text-lg font-semibold text-[var(--color-white)] relative z-10">Tous les items doivent être agrégés pour s'insérer dans le monitoring du Tableau de Bord général, reflet de la Stratégie Globale.</p>
          <p className="text-[var(--color-accent)] font-medium italic relative z-10 text-xl"><Target size={20} className="inline mr-2 -mt-1"/> Seul un suivi pointu permet d'opérer les bons arbitrages.</p>
        </div>

        {/* Slide: Synthèse */}
        <div id="synthese" className="scroll-mt-24"></div>
        <h3 className="text-3xl font-heading text-[var(--color-white)] mb-8 fade-in text-center mt-20">Synthèse de notre approche</h3>
        <div className="max-w-4xl mx-auto relative fade-in delay-1 mb-20">
          {/* Main vertical line connecting blocks */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-accent)] to-[rgba(235,94,40,0.1)] -translate-x-1/2 -z-10"></div>
          
          <div className="bg-white/[0.02] rounded-3xl p-12 mb-12 relative z-10 hidden md:block">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center md:text-right">
                <span className="inline-block font-semibold text-[var(--color-accent)] text-lg mb-2">Posture d'Indépendance</span>
                <p className="text-[var(--color-white)]">La liberté d'esprit et la proximité d'un Family Office</p>
              </div>
              <div className="w-16 h-1 bg-[var(--color-accent)] hidden md:block opacity-30 mx-4"></div>
              <div className="flex-1 text-center md:text-left">
                <span className="inline-block font-semibold text-[var(--color-accent)] text-lg mb-2">Méthodologie Cadrée</span>
                <p className="text-[var(--color-white)]">Définition d'une Stratégie patrimoniale Globale</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-stretch justify-center gap-12 mb-12 relative z-10">
            <div className="bg-white/[0.02] rounded-3xl p-12 flex-1 relative">
               <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-[var(--color-bg)] px-4 text-[var(--color-accent)] text-sm font-bold uppercase tracking-widest hidden md:block border-2 border-[var(--color-bg)] rounded-xl z-20">Ou</div>
               <h4 className="font-bold text-2xl text-[var(--color-white)] mb-10 mt-4 text-center">Sélection des Meilleures Solutions</h4>
               <ul className="text-left space-y-6 flex flex-col items-center text-[var(--color-text-muted)] text-base">
                 <li className="flex items-center w-full max-w-[200px]"><CheckCircle2 size={24} className="text-[var(--color-accent)] mr-5 flex-shrink-0" /> Banques Privées</li>
                 <li className="flex items-center w-full max-w-[200px]"><CheckCircle2 size={24} className="text-[var(--color-accent)] mr-5 flex-shrink-0" /> Sociétés de Gestion</li>
                 <li className="flex items-center w-full max-w-[200px]"><CheckCircle2 size={24} className="text-[var(--color-accent)] mr-5 flex-shrink-0" /> Private Equity</li>
                 <li className="flex items-center w-full max-w-[200px]"><CheckCircle2 size={24} className="text-[var(--color-accent)] mr-5 flex-shrink-0" /> Immobilier</li>
               </ul>
            </div>
            
            <div className="flex items-center justify-center -my-4 md:my-0 relative z-20">
               <div className="w-12 h-12 rounded-full bg-[rgba(235,94,40,0.1)] border border-[var(--color-accent)] flex items-center justify-center text-[var(--color-accent)] font-bold text-sm italic shadow-[0_0_15px_rgba(235,94,40,0.3)] backdrop-blur-md">Et</div>
            </div>

            <div className="bg-white/[0.02] rounded-3xl p-12 flex-1 relative">
               <h4 className="font-bold text-2xl text-[var(--color-white)] mb-10 mt-4 text-center">Approche Sur-Mesure</h4>
               <div className="space-y-10">
                 <div>
                   <h5 className="font-semibold text-[var(--color-white)] text-lg flex items-center mb-4 justify-center md:justify-start"><Layers size={24} className="text-[var(--color-accent)] mr-4"/> Gestion personnalisée</h5>
                   <p className="text-base text-[var(--color-text-muted)] md:ml-10 text-center md:text-left leading-relaxed">Construire ensemble un portefeuille sur-mesure</p>
                 </div>
                 <div>
                   <h5 className="font-semibold text-[var(--color-white)] text-lg flex items-center mb-4 justify-center md:justify-start"><Crown size={24} className="text-[var(--color-accent)] mr-4"/> Création de Club-Deal</h5>
                   <p className="text-base text-[var(--color-text-muted)] md:ml-10 text-center md:text-left leading-relaxed">Ces solutions offrent des opportunités inédites et un total alignement d'intérêts</p>
                 </div>
               </div>
            </div>
          </div>

          <div className="bg-white/[0.02] rounded-3xl p-12 text-center relative z-10">
             <div className="flex justify-center mb-6"><LineChart className="text-[var(--color-accent)]" size={48} /></div>
             <p className="font-bold text-[var(--color-white)] text-2xl tracking-wide uppercase">Consolidation / Suivi / Reporting</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
