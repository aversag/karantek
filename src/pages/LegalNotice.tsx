import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TODO = 'À compléter';

const LegalNotice = () => {
  useEffect(() => {
    document.title = 'Mentions légales, Karantek';
  }, []);

  return (
    <main id="contenu" tabIndex={-1} className="page">
      <div className="container page-narrow legal">
        <h1 className="page-title">Mentions légales</h1>
        <p className="page-meta">Dernière mise à jour&nbsp;: 11/11/2026</p>

        <h2>Éditeur du site</h2>
        <dl className="legal-list">
          <dt>Raison sociale</dt>
          <dd>Karantek, SAS au capital de 10&nbsp;000&nbsp;€</dd>
          <dt>Siège social</dt>
          <dd>14 rue Ferrandière, 69002 Lyon</dd>
          <dt>Immatriculation</dt>
          <dd>RCS Lyon 918&nbsp;168&nbsp;519</dd>
          <dt>TVA intracommunautaire</dt>
          <dd>FR61918168519</dd>
          <dt>Directeur de la publication</dt>
          <dd>Romain Guitelmacher, président</dd>
          <dt>Contact</dt>
          <dd>
            <a href="tel:+33609141170">+33 6 09 14 11 70</a>, contact@karantek.fr
          </dd>
        </dl>

        <h2>Statut réglementaire</h2>
        <dl className="legal-list">
          <dt>Numéro ORIAS</dt>
          <dd>22005549, vérifiable sur orias.fr</dd>
          <dt>Catégories</dt>
          <dd>{TODO}</dd>
          <dt>Association professionnelle</dt>
          <dd>{TODO}</dd>
          <dt>Assurance responsabilité civile professionnelle</dt>
          <dd>{TODO}</dd>
          <dt>Médiateur</dt>
          <dd>{TODO}</dd>
          <dt>Mode de rémunération</dt>
          <dd>{TODO}</dd>
        </dl>

        <h2>Hébergement</h2>
        <p>
          Netlify, Inc., 101 2nd Street, Suite 575, San Francisco, CA 94105, États-Unis.
        </p>

        <h2>Propriété intellectuelle et données personnelles</h2>
        <p>
          Les conditions d’utilisation du site figurent dans les{' '}
          <Link to="/conditions-generales-utilisation">conditions générales d’utilisation</Link>, le traitement
          de vos données dans la <Link to="/politique-de-confidentialite">politique de confidentialité</Link>.
        </p>
      </div>
    </main>
  );
};

export default LegalNotice;
