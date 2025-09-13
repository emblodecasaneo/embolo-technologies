import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Embolo Technologies</h3>
          <p>Solutions numériques innovantes pour votre entreprise</p>
        </div>

        <div className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Réalisation</Link></li>
            <li><Link to="/about">À propos</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>Développement Web</li>
            <li>Applications Mobiles</li>
            <li>Maintenance</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>Email: aicscloud@gmail.com</li>
            <li>Téléphone: +237 658 55 99 95</li>
            <li>Adresse: Yaoundé, Cameroun</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Embolo Technologies. Tous droits réservés.</p>
      </div>
    </footer>
  )
}

export default Footer 