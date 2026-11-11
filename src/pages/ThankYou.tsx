import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  useEffect(() => {
    document.title = 'Demande envoyée, Karantek';
  }, []);

  return (
    <main id="contenu" tabIndex={-1} className="page">
      <div className="container page-narrow">
        <h1 className="page-title">Demande envoyée</h1>
        <p className="page-lead">
          Votre demande de rendez-vous a bien été transmise. Nous revenons vers vous par e-mail ou par téléphone.
        </p>
        <Link to="/" className="link-quiet">Retour à l’accueil</Link>
      </div>
    </main>
  );
};

export default ThankYou;
