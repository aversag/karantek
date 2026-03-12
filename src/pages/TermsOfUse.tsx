import { useEffect } from 'react';

const TermsOfUse = () => {
  useEffect(() => {
    document.title = "Conditions générales d'utilisation - Karantek";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '100vh' }}>
      <div className="container">
        <div className="glass-panel max-w-4xl mx-auto fade-in visible">
          <h1 className="section-title" style={{ marginBottom: '1.5rem' }}>Conditions générales d'utilisation</h1>
          
          <div className="text-[var(--color-text-muted)] leading-relaxed" style={{ fontSize: '1.05rem' }}>
            <p className="text-[var(--color-accent)] font-medium" style={{ marginBottom: '2.5rem' }}>
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>

            <h2 className="text-2xl text-white" style={{ fontFamily: 'var(--font-heading)', marginTop: '2.5rem', marginBottom: '1rem' }}>1. Objet</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Les présentes conditions générales d'utilisation (ci-après les "CGU") ont pour objet de définir les modalités et conditions dans lesquelles la société Karantek (Numéro Orias : 22005549, située à Lyon, France) met à la disposition de ses utilisateurs son site web et les services associés.
            </p>

            <h2 className="text-2xl text-white" style={{ fontFamily: 'var(--font-heading)', marginTop: '2.5rem', marginBottom: '1rem' }}>2. Acceptation des CGU</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              L'accès et l'utilisation du site sont soumis à l'acceptation expresse et sans réserve des présentes CGU par l'utilisateur. En naviguant sur ce site, vous reconnaissez avoir pris connaissance et accepté ces conditions.
            </p>

            <h2 className="text-2xl text-white" style={{ fontFamily: 'var(--font-heading)', marginTop: '2.5rem', marginBottom: '1rem' }}>3. Accès au site</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Le site est accessible gratuitement en tout lieu à tout utilisateur ayant un accès à Internet. Tous les frais supportés pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont à la charge de l'utilisateur.
              Le site met en œuvre tous les moyens dont il dispose pour assurer un accès de qualité à ses services. Cependant, l'éditeur ne peut être tenu responsable en cas d'interruption du réseau physique ou de toute force majeure.
            </p>

            <h2 className="text-2xl text-white" style={{ fontFamily: 'var(--font-heading)', marginTop: '2.5rem', marginBottom: '1rem' }}>4. Propriété intellectuelle</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Les marques, logos, signes ainsi que l'ensemble des contenus du site (textes, images, sons, code) font l'objet d'une protection par le Code de la propriété intellectuelle. Toute reproduction, publication, copie des différents contenus nécessite l'autorisation préalable de Karantek. L'utilisateur s'engage à une utilisation des contenus du site dans un cadre strictement privé. Une utilisation à des fins commerciales est formellement interdite.
            </p>

            <h2 className="text-2xl text-white" style={{ fontFamily: 'var(--font-heading)', marginTop: '2.5rem', marginBottom: '1rem' }}>5. Responsabilité</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Les sources des informations diffusées sur le site sont réputées fiables. Toutefois, le site se réserve la faculté d'une non-garantie de la fiabilité des sources. Les informations données sur le site le sont à titre purement informatif. Elles ne sauraient en aucun cas consister en un conseil en investissement personnalisé. L'utilisateur assume seul l'entière responsabilité de l'utilisation des informations et contenus du site.
            </p>

            <h2 className="text-2xl text-white" style={{ fontFamily: 'var(--font-heading)', marginTop: '2.5rem', marginBottom: '1rem' }}>6. Liens hypertextes</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Le site peut contenir des liens hypertextes vers d'autres sites. L'utilisateur est informé qu'en cliquant sur ces liens, il sortira du site de Karantek. Nous n'avons aucun contrôle sur le contenu de ces sites tiers et ne saurions être tenus responsables de ces derniers.
            </p>

            <h2 className="text-2xl text-white" style={{ fontFamily: 'var(--font-heading)', marginTop: '2.5rem', marginBottom: '1rem' }}>7. Données personnelles</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Pour plus d'informations sur la manière dont nous collectons, utilisons et protégeons vos données, veuillez consulter notre <a href="/politique-de-confidentialite" className="text-[var(--color-accent)] hover:text-white transition-colors" style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>Politique de confidentialité</a>.
            </p>

            <h2 className="text-2xl text-white" style={{ fontFamily: 'var(--font-heading)', marginTop: '2.5rem', marginBottom: '1rem' }}>8. Droit applicable et juridiction compétente</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Les présentes CGU sont soumises à la législation française. En cas d'absence de résolution amiable d'un litige né entre les parties, seul le tribunal de Lyon est compétent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
