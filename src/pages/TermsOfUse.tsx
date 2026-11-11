import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TermsOfUse = () => {
  useEffect(() => {
    document.title = 'Conditions générales d’utilisation, Karantek';
  }, []);

  return (
    <main id="contenu" tabIndex={-1} className="page">
      <div className="container page-narrow legal">
        <h1 className="page-title">Conditions générales d’utilisation</h1>
        <p className="page-meta">Dernière mise à jour&nbsp;: 12/03/2026</p>

        <h2>1. Objet</h2>
        <p>
          Les présentes conditions générales d’utilisation (ci-après les «&nbsp;CGU&nbsp;») ont pour objet de définir les modalités et conditions dans lesquelles la société Karantek (numéro ORIAS&nbsp;: 22005549, siège au 14 rue Ferrandière, 69002 Lyon) met à la disposition de ses utilisateurs son site web et les services associés.
        </p>

        <h2>2. Acceptation des CGU</h2>
        <p>
          L’accès et l’utilisation du site sont soumis à l’acceptation expresse et sans réserve des présentes CGU par l’utilisateur. En naviguant sur ce site, vous reconnaissez avoir pris connaissance et accepté ces conditions.
        </p>

        <h2>3. Accès au site</h2>
        <p>
          Le site est accessible gratuitement en tout lieu à tout utilisateur ayant un accès à Internet. Tous les frais supportés pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont à la charge de l’utilisateur.
        </p>
        <p>
          Le site met en œuvre tous les moyens dont il dispose pour assurer un accès de qualité à ses services. Cependant, l’éditeur ne peut être tenu responsable en cas d’interruption du réseau physique ou de toute force majeure.
        </p>

        <h2>4. Propriété intellectuelle</h2>
        <p>
          Les marques, logos, signes ainsi que l’ensemble des contenus du site (textes, images, sons, code) font l’objet d’une protection par le Code de la propriété intellectuelle. Toute reproduction, publication, copie des différents contenus nécessite l’autorisation préalable de Karantek. L’utilisateur s’engage à une utilisation des contenus du site dans un cadre strictement privé. Une utilisation à des fins commerciales est formellement interdite.
        </p>

        <h2>5. Responsabilité</h2>
        <p>
          Les sources des informations diffusées sur le site sont réputées fiables. Toutefois, le site se réserve la faculté d’une non-garantie de la fiabilité des sources. Les informations données sur le site le sont à titre purement informatif. Elles ne sauraient en aucun cas constituer un conseil en investissement personnalisé. L’utilisateur assume seul l’entière responsabilité de l’utilisation des informations et contenus du site.
        </p>

        <h2>6. Liens hypertextes</h2>
        <p>
          Le site peut contenir des liens hypertextes vers d’autres sites. L’utilisateur est informé qu’en cliquant sur ces liens, il sortira du site de Karantek. Nous n’avons aucun contrôle sur le contenu de ces sites tiers et ne saurions être tenus responsables de ces derniers.
        </p>

        <h2>7. Données personnelles</h2>
        <p>
          Pour plus d’informations sur la manière dont nous collectons, utilisons et protégeons vos données, consultez notre{' '}
          <Link to="/politique-de-confidentialite">politique de confidentialité</Link>.
        </p>

        <h2>8. Droit applicable et juridiction compétente</h2>
        <p>
          Les présentes CGU sont soumises à la législation française. En cas d’absence de résolution amiable d’un litige né entre les parties, seul le tribunal de Lyon est compétent.
        </p>
      </div>
    </main>
  );
};

export default TermsOfUse;
