import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Home = () => {
  const scrollToServices = () => {
    const servicesSection = document.querySelector('.services-section')
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80")`
          }}
        ></div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/80 to-primary-900/70"></div>
        
        {/* Tech Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M30 30c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}
        ></div>
        
        <motion.div 
          className="relative z-10 max-w-4xl px-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
            Développement Web & Mobile
          </h1>
          <p className="text-xl md:text-2xl font-light mb-12 opacity-90 max-w-3xl mx-auto">
            Solutions numériques sur mesure pour transformer votre entreprise
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link 
              to="/services" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-white hover:text-primary-600 hover:-translate-y-1"
            >
              Découvrir
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="services-section py-32 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">Nos Expertises</h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Des solutions techniques adaptées à vos besoins
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Web</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Sites web modernes et performants avec les dernières technologies
              </p>
              <Link to="/services" className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                En savoir plus →
              </Link>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Mobile</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Applications iOS et Android natives pour une expérience optimale
              </p>
              <Link to="/services" className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                En savoir plus →
              </Link>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Maintenance</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Support et évolution continue de vos solutions digitales
              </p>
              <Link to="/services" className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                En savoir plus →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-24 pb-16 text-center bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900">
        <motion.div 
          className="max-w-4xl mx-auto px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl text-white md:text-5xl text-center font-light mb-8 tracking-tight">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl text-white mb-12 opacity-90 max-w-2xl mx-auto">
            Discutons de vos besoins et créons ensemble la solution parfaite pour votre entreprise
          </p>
          <Link 
            to="/contact" 
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-white hover:text-primary-600 hover:-translate-y-1"
          >
            Contactez-nous
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default Home 