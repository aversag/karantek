const Contact = () => {
  return (
    <section id="contact-form" className="section">
      <div className="container ledger">
        <div className="ledger-title">
          <h2 style={{ fontSize: 'inherit' }}>Prendre rendez-vous</h2>
          <div className="contact-direct">
            <p>Ou directement :</p>
            <a href="tel:+33609141170">+33 6 09 14 11 70</a>
          </div>
        </div>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="contact-form"
        >
          <input type="hidden" name="form-name" value="contact" />

          <p className="hidden" style={{ display: 'none' }}>
            <label>
              Ne pas remplir ce champ si vous êtes humain : <input name="bot-field" />
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

          <div className="form-group">
            <label htmlFor="subject">Objet</label>
            <input type="text" id="subject" name="subject" required placeholder="Demande de renseignements" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} required placeholder="Comment pouvons-nous vous aider ?"></textarea>
          </div>

          <button type="submit" className="btn btn-solid">Envoyer le message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
