import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  useEffect(() => {
    document.title = 'Page introuvable, Karantek';
  }, []);

  return (
    <main id="contenu" tabIndex={-1} className="page">
      <div className="container page-narrow">
        <h1 className="page-title">Page introuvable</h1>
        <p className="page-lead">Cette adresse ne correspond à aucune page du site.</p>
        <Link to="/" className="link-quiet">Retour à l’accueil</Link>
      </div>
    </main>
  );
};

export default NotFound;
