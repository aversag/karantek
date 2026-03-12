import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contact" className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand fade-in delay-1 flex items-start gap-4">
            <img src="/logo-karentek.png" alt="Logo Karantek" className="h-[75px] md:h-[90px] w-auto mt-1" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-widest text-white mb-1">KARANTEK</span>
              <p className="subtitle">Stratégies d'Investissements</p>
              <p className="description mt-3">
                Des solutions innovantes et sur-mesure pour donner vie à vos convictions dans un cadre optimal et performant.
              </p>
            </div>
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
                    e.currentTarget.href = `mailto:${"contact"}@${"karantek.fr"}`;
                  }}
                  onFocus={(e) => {
                    e.currentTarget.href = `mailto:${"contact"}@${"karantek.fr"}`;
                  }}
                  onClick={(e) => {
                    if (e.currentTarget.getAttribute('href') === '#') {
                      e.preventDefault();
                      window.location.href = `mailto:${"contact"}@${"karantek.fr"}`;
                    }
                  }}
                >
                  {`contact@${"karantek.fr"}`}
                </a>
              </li>
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>Lyon, France</span>
              </li>
            </ul>
          </div>

          <div className="footer-legal fade-in delay-3">
            <h3>Mentions Légales</h3>
            <div className="flex flex-col gap-4">
              <p>Numéro Orias : <strong>22005549</strong></p>
              <Link to="/politique-de-confidentialite">Politique de confidentialité</Link>
              <Link to="/conditions-generales-utilisation">Conditions générales d'utilisation</Link>
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
