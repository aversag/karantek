import { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Politique de confidentialité - Karantek";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '100vh' }}>
      <div className="container">
        <div className="glass-panel max-w-4xl mx-auto fade-in visible">
          <h1 className="section-title" style={{ marginBottom: '1.5rem' }}>Politique de confidentialité</h1>
          
          <div className="text-[var(--color-text-muted)] leading-relaxed" style={{ fontSize: '1.05rem' }}>
            <p className="text-[var(--color-accent)] font-medium" style={{ marginBottom: '2.5rem' }}>
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
            
            <h2 className="text-2xl text-white" style={{ fontFamily: 'var(--font-heading)', marginTop: '2.5rem', marginBottom: '1rem' }}>1. Introduction</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Chez Karantek, la protection de vos données personnelles est une priorité. 
              La présente Politique de confidentialité explique comment nous recueillons, utilisons, divulguons et protégeons vos renseignements lorsque vous visitez notre site web ou utilisez nos services.
            </p>

            <h2 className="text-2xl text-white" style={{ fontFamily: 'var(--font-heading)', marginTop: '2.5rem', marginBottom: '1rem' }}>2. Collecte des données</h2>
            <p style={{ marginBottom: '1rem' }}>
              Nous pouvons collecter des informations vous concernant de diverses manières. Les informations que nous pouvons recueillir sur le site comprennent :
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong className="text-white/90">Données personnelles :</strong> nom, adresse email, numéro de téléphone, et toute autre information que vous nous fournissez volontairement via notre formulaire de contact.</li>
              <li><strong className="text-white/90">Données de navigation :</strong> informations collectées automatiquement via les cookies, telles que votre adresse IP, votre type de navigateur et les pages que vous visitez.</li>
            </ul>

            <h2 className="text-2xl text-white" style={{ fontFamily: 'var(--font-heading)', marginTop: '2.5rem', marginBottom: '1rem' }}>3. Utilisation des données</h2>
            <p style={{ marginBottom: '1rem' }}>
              Les informations que nous collectons sont utilisées pour :
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Vous fournir et maintenir nos services.</li>
              <li>Répondre à vos demandes de renseignements et vous offrir un support client.</li>
              <li>Vous envoyer des communications marketing (si vous avez donné votre accord).</li>
              <li>Améliorer notre site web et nos offres.</li>
            </ul>

            <h2 className="text-2xl text-white" style={{ fontFamily: 'var(--font-heading)', marginTop: '2.5rem', marginBottom: '1rem' }}>4. Partage des données</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. Nous pouvons partager vos données avec des prestataires de services de confiance qui nous aident à exploiter notre site web ou à mener nos affaires, à condition que ces parties acceptent de garder ces informations confidentielles.
            </p>

            <h2 className="text-2xl text-white" style={{ fontFamily: 'var(--font-heading)', marginTop: '2.5rem', marginBottom: '1rem' }}>5. Sécurité</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Nous mettons en œuvre des mesures de sécurité administratives, techniques et physiques appropriées pour protéger vos données personnelles contre tout accès, altération, divulgation ou destruction non autorisés. Toutefois, aucune transmission de données sur Internet n'est sécurisée à 100 %.
            </p>

            <h2 className="text-2xl text-white" style={{ fontFamily: 'var(--font-heading)', marginTop: '2.5rem', marginBottom: '1rem' }}>6. Vos droits</h2>
            <p style={{ marginBottom: '1rem' }}>
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants concernant vos données personnelles :
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Droit d'accès.</li>
              <li>Droit de rectification.</li>
              <li>Droit à l'effacement.</li>
              <li>Droit à la limitation du traitement.</li>
              <li>Droit d'opposition.</li>
            </ul>
            <p style={{ marginBottom: '1.5rem' }}>
              Pour exercer ces droits, veuillez nous contacter à l'adresse suivante : <a href="mailto:contact@karantek.fr" className="text-[var(--color-accent)] hover:text-white transition-colors" style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>contact@karantek.fr</a>.
            </p>

            <h2 className="text-2xl text-white" style={{ fontFamily: 'var(--font-heading)', marginTop: '2.5rem', marginBottom: '1rem' }}>7. Modifications de notre politique</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Nous nous réservons le droit de modifier cette Politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour révisée.
            </p>

            <h2 className="text-2xl text-white" style={{ fontFamily: 'var(--font-heading)', marginTop: '2.5rem', marginBottom: '1rem' }}>8. Nous contacter</h2>
            <p style={{ marginBottom: '1rem' }}>
              Si vous avez des questions ou des commentaires concernant cette Politique de confidentialité, veuillez nous contacter à :
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              <strong className="text-white/90">Email :</strong> <a href="mailto:contact@karantek.fr" className="text-[var(--color-accent)] hover:text-white transition-colors" style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>contact@karantek.fr</a><br />
              <strong className="text-white/90">Adresse :</strong> Lyon, France
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
