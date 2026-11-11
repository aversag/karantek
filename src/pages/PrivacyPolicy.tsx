import { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = 'Politique de confidentialité, Karantek';
  }, []);

  return (
    <main id="contenu" tabIndex={-1} className="page">
      <div className="container page-narrow legal">
        <h1 className="page-title">Politique de confidentialité</h1>
        <p className="page-meta">Dernière mise à jour&nbsp;: 12/03/2026</p>

        <h2>1. Introduction</h2>
        <p>
          Chez Karantek, la protection de vos données personnelles est une priorité.
          La présente politique de confidentialité explique comment nous recueillons, utilisons, divulguons et protégeons vos renseignements lorsque vous visitez notre site web ou utilisez nos services.
        </p>

        <h2>2. Collecte des données</h2>
        <p>
          Nous pouvons collecter des informations vous concernant de diverses manières. Les informations que nous pouvons recueillir sur le site comprennent&nbsp;:
        </p>
        <ul>
          <li><strong>Données personnelles&nbsp;:</strong> nom, adresse e-mail, numéro de téléphone, et toute autre information que vous nous fournissez volontairement via notre formulaire de contact.</li>
          <li><strong>Données de navigation&nbsp;:</strong> informations collectées automatiquement via les cookies, telles que votre adresse IP, votre type de navigateur et les pages que vous visitez.</li>
        </ul>

        <h2>3. Utilisation des données</h2>
        <p>Les informations que nous collectons sont utilisées pour&nbsp;:</p>
        <ul>
          <li>vous fournir et maintenir nos services&nbsp;;</li>
          <li>répondre à vos demandes de renseignements et vous offrir un support client&nbsp;;</li>
          <li>vous envoyer des communications marketing, si vous avez donné votre accord&nbsp;;</li>
          <li>améliorer notre site web et nos offres.</li>
        </ul>

        <h2>4. Partage des données</h2>
        <p>
          Nous ne vendons, n’échangeons ni ne louons vos informations personnelles à des tiers. Nous pouvons partager vos données avec des prestataires de services de confiance qui nous aident à exploiter notre site web ou à mener nos affaires, à condition que ces parties acceptent de garder ces informations confidentielles.
        </p>

        <h2>5. Sécurité</h2>
        <p>
          Nous mettons en œuvre des mesures de sécurité administratives, techniques et physiques appropriées pour protéger vos données personnelles contre tout accès, altération, divulgation ou destruction non autorisés. Toutefois, aucune transmission de données sur Internet n’est sécurisée à 100&nbsp;%.
        </p>

        <h2>6. Vos droits</h2>
        <p>
          Conformément au Règlement général sur la protection des données (RGPD), vous disposez des droits suivants concernant vos données personnelles&nbsp;:
        </p>
        <ul>
          <li>droit d’accès&nbsp;;</li>
          <li>droit de rectification&nbsp;;</li>
          <li>droit à l’effacement&nbsp;;</li>
          <li>droit à la limitation du traitement&nbsp;;</li>
          <li>droit d’opposition.</li>
        </ul>
        <p>
          Pour exercer ces droits, contactez-nous à l’adresse suivante&nbsp;: <a href="mailto:contact@karantek.fr">contact@karantek.fr</a>.
        </p>

        <h2>7. Modifications de notre politique</h2>
        <p>
          Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour révisée.
        </p>

        <h2>8. Nous contacter</h2>
        <p>
          Pour toute question concernant cette politique de confidentialité&nbsp;:
        </p>
        <p>
          <strong>E-mail&nbsp;:</strong> <a href="mailto:contact@karantek.fr">contact@karantek.fr</a><br />
          <strong>Adresse&nbsp;:</strong> Karantek, 14 rue Ferrandière, 69002 Lyon
        </p>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
