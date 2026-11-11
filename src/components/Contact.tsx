import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section id="contact-form" className="section">
      <div className="container ledger">
        <div className="ledger-title">
          <h2 style={{ fontSize: 'inherit' }}>Prendre rendez-vous</h2>
          <div className="contact-direct">
            <p>Ou directement&nbsp;:</p>
            <a href="tel:+33609141170">+33 6 09 14 11 70</a>
          </div>
        </div>

        <form
          name="contact"
          method="POST"
          action="/merci"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="contact-form"
        >
          <input type="hidden" name="form-name" value="contact" />

          <p className="hidden" style={{ display: 'none' }}>
            <label>
              Ne pas remplir ce champ si vous êtes humain&nbsp;: <input name="bot-field" />
            </label>
          </p>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Nom complet</label>
              <input type="text" id="name" name="name" required placeholder="Jean Dupont" autoComplete="name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Adresse e-mail</label>
              <input type="email" id="email" name="email" required placeholder="jean.dupont@exemple.fr" autoComplete="email" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Téléphone <span className="optional">(facultatif)</span></label>
              <input type="tel" id="phone" name="phone" placeholder="06 12 34 56 78" autoComplete="tel" />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Objet</label>
              <select id="subject" name="subject" required defaultValue="">
                <option value="" disabled>Choisir un objet</option>
                <option>Premier rendez-vous</option>
                <option>Investissement coté</option>
                <option>Marchés privés et immobilier</option>
                <option>Suivi et gouvernance</option>
                <option>Autre demande</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message <span className="optional">(facultatif)</span></label>
            <textarea id="message" name="message" rows={5} placeholder="Votre situation, vos questions, vos disponibilités"></textarea>
          </div>

          <p className="form-note">
            Vos coordonnées servent uniquement à répondre à votre demande. Voir notre{' '}
            <Link to="/politique-de-confidentialite">politique de confidentialité</Link>.
          </p>

          <button type="submit" className="btn btn-solid">Demander un rendez-vous</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
