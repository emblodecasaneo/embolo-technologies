import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-page py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <span className="text-sm font-bold tracking-tight">
                Embolo Technologies<span className="text-primary-600">.</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Solutions numériques innovantes pour transformer votre entreprise.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-gray-500 mb-5">Navigation</h4>
            <ul className="space-y-3">
              {[
                { to: '/services', label: 'Services' },
                { to: '/portfolio', label: 'Réalisations' },
                { to: '/about', label: 'À propos' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-gray-500 mb-5">Services</h4>
            <ul className="space-y-3">
              {['Développement Web', 'Applications Mobiles', 'Maintenance', 'Audit & Conseil'].map((item) => (
                <li key={item} className="text-sm text-gray-400">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-gray-500 mb-5">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:aicscloud@gmail.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                  aicscloud@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+237658559995" className="text-sm text-gray-400 hover:text-white transition-colors">
                  +237 658 55 99 95
                </a>
              </li>
              <li className="text-sm text-gray-400">Yaoundé, Cameroun</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Embolo Technologies. Tous droits réservés.
          </p>
          <Link to="/contact" className="text-xs font-semibold text-primary-600 hover:text-primary-500 transition-colors">
            Démarrer un projet →
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
