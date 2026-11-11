import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const mailto = () => `mailto:${'contact'}@${'karantek.fr'}`;

const Footer = () => {
  return (
    <footer id="contact" className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand fade-in">
            <img src="/logo-karantek.png" alt="" width={155} height={180} />
            <div>
              <span className="footer-name">KARANTEK</span>
              <p className="subtitle">Stratégies d’investissement</p>
            </div>
          </div>

          <div className="footer-contact fade-in">
            <h3>Contact</h3>
            <ul className="contact-list">
              <li>
                <Phone size={18} className="contact-icon" aria-hidden="true" />
                <a href="tel:+33609141170">+33 6 09 14 11 70</a>
              </li>
              <li>
                <Mail size={18} className="contact-icon" aria-hidden="true" />
                <a
                  href="#"
                  onMouseEnter={(e) => {
                    e.currentTarget.href = mailto();
                  }}
                  onFocus={(e) => {
                    e.currentTarget.href = mailto();
                  }}
                  onClick={(e) => {
                    if (e.currentTarget.getAttribute('href') === '#') {
                      e.preventDefault();
                      window.location.href = mailto();
                    }
                  }}
                >
                  {`contact@${'karantek.fr'}`}
                </a>
              </li>
              <li>
                <MapPin size={18} className="contact-icon" aria-hidden="true" />
                <span>14 rue Ferrandière<br />69002 Lyon</span>
              </li>
            </ul>
          </div>

          <div className="footer-legal fade-in">
            <h3>Informations</h3>
            <ul>
              <li>ORIAS n°&nbsp;22005549</li>
              <li><Link to="/mentions-legales">Mentions légales</Link></li>
              <li><Link to="/politique-de-confidentialite">Politique de confidentialité</Link></li>
              <li><Link to="/conditions-generales-utilisation">Conditions générales d’utilisation</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Karantek. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
