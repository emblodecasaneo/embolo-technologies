import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 h-16 flex items-center border-b border-gray-200">
      <div className="max-w-6xl w-full mx-auto px-8 flex justify-between items-center h-full">
        <Link to="/" className="flex items-center">
          <h6 className="text-md font-bold text-primary-600 tracking-wider">
            Embolo Technologies
          </h6>
        </Link>
        
        <div 
          className="md:hidden cursor-pointer p-2"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <CloseIcon className="text-gray-900" />
          ) : (
            <MenuIcon className="text-gray-900" />
          )}
        </div>

        <nav className={`${
          isMenuOpen 
            ? 'flex' 
            : 'hidden'
        } md:flex flex-col md:flex-row fixed md:static top-16 md:top-0 left-0 right-0 md:left-auto md:right-auto bg-white/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-8 md:p-0 gap-8 md:gap-8 text-center md:text-left border-b md:border-b-0 border-gray-200`}>
          <Link 
            to="/" 
            className={`font-medium text-sm transition-colors duration-300 py-2 md:py-1 relative ${
              isActive('/') 
                ? 'text-primary-600' 
                : 'text-gray-700 hover:text-primary-600'
            }`}
          >
            <span>Accueil</span>
            {isActive('/') && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600"></div>
            )}
          </Link>
          <Link 
            to="/services" 
            className={`font-medium text-sm transition-colors duration-300 py-2 md:py-1 relative ${
              isActive('/services') 
                ? 'text-primary-600' 
                : 'text-gray-700 hover:text-primary-600'
            }`}
          >
            <span>Services</span>
            {isActive('/services') && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600"></div>
            )}
          </Link>
          <Link 
            to="/portfolio" 
            className={`font-medium text-sm transition-colors duration-300 py-2 md:py-1 relative ${
              isActive('/portfolio') 
                ? 'text-primary-600' 
                : 'text-gray-700 hover:text-primary-600'
            }`}
          >
            <span>Réalisations</span>
            {isActive('/portfolio') && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600"></div>
            )}
          </Link>
          <Link 
            to="/about" 
            className={`font-medium text-sm transition-colors duration-300 py-2 md:py-1 relative ${
              isActive('/about') 
                ? 'text-primary-600' 
                : 'text-gray-700 hover:text-primary-600'
            }`}
          >
            <span>À propos</span>
            {isActive('/about') && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600"></div>
            )}
          </Link>
          <Link 
            to="/contact" 
            className={`font-medium text-sm transition-colors duration-300 py-2 md:py-1 relative ${
              isActive('/contact') 
                ? 'text-primary-600' 
                : 'text-gray-700 hover:text-primary-600'
            }`}
          >
            <span>Contact</span>
            {isActive('/contact') && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600"></div>
            )}
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header 