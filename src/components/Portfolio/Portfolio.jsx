import { useState } from 'react'
import { motion } from 'framer-motion'

// Composant Carousel pour les projets
const ProjectCarousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-400 text-xl">Aucun projet trouvé pour cette catégorie</p>
      </div>
    )
  }

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="relative h-[450px] overflow-hidden rounded-2xl bg-gray-800 border border-gray-700">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentIndex ? 'translate-x-0' : 
              index < currentIndex ? '-translate-x-full' : 'translate-x-full'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid lg:grid-cols-2 h-full">
              {/* Image Section */}
              <div className="relative h-full">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/50 lg:to-gray-900/90"></div>
              </div>
              
              {/* Content Section */}
              <div className="p-4 lg:p-6 flex flex-col justify-center bg-gray-800">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="text-primary-600 text-sm font-medium uppercase tracking-wider mb-4 block">
                    {project.category === 'web' ? 'Développement Web' : 'Application Mobile'}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-4">Technologies utilisées :</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-sm font-medium border border-gray-600 hover:border-primary-600 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <button className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-3 rounded-lg font-medium hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:-translate-y-1 w-fit">
                    Voir le projet
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 border border-gray-600 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 border border-gray-600 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicators */}
      <div className="flex justify-center mt-8 space-x-3">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary-600 scale-125' 
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>

      {/* Project Counter */}
      <div className="absolute top-4 right-4 bg-gray-900/80 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
        {currentIndex + 1} / {projects.length}
      </div>
    </div>
  )
}

const Portfolio = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      title: "E-commerce Premium",
      category: "web",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center",
      description: "Plateforme e-commerce complète avec paiement intégré, gestion des stocks, et tableau de bord administrateur. Interface moderne et responsive avec expérience utilisateur optimisée.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"]
    },
    {
      title: "Application de Livraison",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&crop=center",
      description: "Application mobile de livraison en temps réel avec géolocalisation, notifications push, et système de paiement intégré. Interface intuitive pour livreurs et clients.",
      technologies: ["React Native", "Firebase", "Google Maps", "Expo"]
    },
    {
      title: "Dashboard Analytics",
      category: "web",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
      description: "Interface d'analyse de données en temps réel avec visualisations interactives, rapports personnalisés et exports automatisés. Solution complète de Business Intelligence.",
      technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL", "Redis"]
    },
    {
      title: "App de Fitness",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
      description: "Application mobile de suivi fitness et nutrition avec programmes d'entraînement personnalisés, suivi des progrès et communauté intégrée.",
      technologies: ["Flutter", "Dart", "Firebase", "HealthKit"]
    },
    {
      title: "Plateforme Éducative",
      category: "web",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center",
      description: "Plateforme d'apprentissage en ligne avec cours interactifs, évaluations automatisées et suivi des progrès. Interface adaptée aux étudiants et enseignants.",
      technologies: ["Next.js", "TypeScript", "Prisma", "TailwindCSS"]
    },
    {
      title: "App Bancaire",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop&crop=center",
      description: "Application bancaire mobile sécurisée avec authentification biométrique, virements instantanés, et gestion de budget intelligent.",
      technologies: ["React Native", "TypeScript", "Biometrics", "Encryption"]
    }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <div className="w-full min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">
              Nos Réalisations
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto opacity-90">
              Découvrez nos projets les plus récents
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-gray-800">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex justify-center gap-4">
            <button 
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === 'all' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
              onClick={() => setFilter('all')}
            >
              Tous
            </button>
            <button 
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === 'web' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
              onClick={() => setFilter('web')}
            >
              Web
            </button>
            <button 
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === 'mobile' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
              onClick={() => setFilter('mobile')}
            >
              Mobile
            </button>
          </div>
        </div>
      </section>

      {/* Projects Carousel */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-8">
          <ProjectCarousel projects={filteredProjects} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Un projet en tête ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Discutons de votre projet et voyons comment nous pouvons le concrétiser ensemble
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Démarrer un projet
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio 