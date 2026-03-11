import { Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact-form" className="contact-section section">
      <div className="container">
        <div className="section-header text-center fade-in delay-1">
          <h2>Nous Contacter</h2>
          <p className="subtitle">Prendre rendez-vous ou obtenir plus d'informations</p>
        </div>

        <div className="contact-form-container glass-panel fade-in delay-2">
          {/* Netlify form hidden attributes for Vite */}
          <form 
            name="contact" 
            method="POST" 
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="contact-form"
          >
            <input type="hidden" name="form-name" value="contact" />
            
            {/* Honeypot field for spam protection */}
            <p className="hidden" style={{ display: 'none' }}>
              <label>
                Ne pas remplir ce champ si vous êtes humain : <input name="bot-field" />
              </label>
            </p>

            <div className="form-group">
              <label htmlFor="name">Nom complet</label>
              <input type="text" id="name" name="name" required placeholder="Jean Dupont" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Adresse e-mail</label>
              <input type="email" id="email" name="email" required placeholder="jean.dupont@exemple.com" />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Objet</label>
              <input type="text" id="subject" name="subject" required placeholder="Demande de renseignements" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required placeholder="Comment pouvons-nous vous aider ?"></textarea>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              Envoyer le message
              <Send size={18} className="icon-right" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
