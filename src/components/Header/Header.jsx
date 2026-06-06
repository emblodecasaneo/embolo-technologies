import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const navLinks = [
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Réalisations' },
  { to: '/about', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-lg z-50 border-b border-gray-100">
      <div className="container-page h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <span className="text-sm font-bold text-gray-900 tracking-tight">
            Embolo Technologies<span className="text-primary-600">.</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive(to)
                  ? 'text-primary-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact" className="btn-ghost !py-2.5 !px-5 !text-sm">
            Nous contacter
          </Link>
          <Link to="/contact" className="btn-primary !py-2.5 !px-5 !text-sm">
            Demander un devis
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-gray-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 px-4 py-4 flex flex-col gap-3">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setIsMenuOpen(false)}
              className={`text-base font-medium ${
                isActive(to) ? 'text-primary-600' : 'text-gray-700'
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="btn-ghost text-center">
              Nous contacter
            </Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="btn-primary text-center">
              Demander un devis
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
