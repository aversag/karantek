
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand fade-in delay-1">
            <h2>KARANTEK</h2>
            <p className="subtitle">Stratégies d'Investissements</p>
            <p className="description mt-4">
              Des solutions innovantes et sur-mesure pour donner vie à vos convictions dans un cadre optimal et performant.
            </p>
          </div>

          <div className="footer-contact fade-in delay-2">
            <h3>Contact</h3>
            <ul className="contact-list">
              <li>
                <Phone size={18} className="contact-icon" />
                <a href="tel:+33609141170">+33 6 09 14 11 70</a>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <a 
                  href="#" 
                  onMouseEnter={(e) => {
                    e.currentTarget.href = `mailto:${"r.guitelmacher"}@${"karantek.fr"}`;
                  }}
                  onFocus={(e) => {
                    e.currentTarget.href = `mailto:${"r.guitelmacher"}@${"karantek.fr"}`;
                  }}
                  onClick={(e) => {
                    if (e.currentTarget.getAttribute('href') === '#') {
                      e.preventDefault();
                      window.location.href = `mailto:${"r.guitelmacher"}@${"karantek.fr"}`;
                    }
                  }}
                >
                  {`r.guitelmacher@${"karantek.fr"}`}
                </a>
              </li>
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>Romain Guitelmacher - Fondateur</span>
              </li>
            </ul>
          </div>

          <div className="footer-legal fade-in delay-3">
            <h3>Mentions Légales</h3>
            <p>Numéro Orias : <strong>22005549</strong></p>
            <div className="legal-links mt-4">
              <a href="#">Politique de confidentialité</a>
              <br />
              <a href="#">Conditions générales d'utilisation</a>
            </div>
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
