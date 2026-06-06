import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const projects = [
  {
    title: 'E-commerce Premium',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=900&fit=crop',
    description: 'Refonte complète du parcours d’achat avec +38% de conversion.',
    technologies: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Application de Livraison',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=900&fit=crop',
    description: 'Suivi en temps réel des livreurs et notifications intelligentes.',
    technologies: ['React Native', 'Firebase', 'Maps'],
  },
  {
    title: 'Dashboard Analytics',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=900&fit=crop',
    description: 'Pilotage business avec visualisations temps réel et alertes.',
    technologies: ['Vue', 'Python', 'PostgreSQL'],
  },
  {
    title: 'App de Fitness',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=900&fit=crop',
    description: 'Programmes personnalisés et suivi quotidien des performances.',
    technologies: ['Flutter', 'Dart', 'Firebase'],
  },
  {
    title: 'Plateforme Éducative',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=900&fit=crop',
    description: 'Cours interactifs et suivi de progression des étudiants.',
    technologies: ['Next.js', 'TypeScript', 'Prisma'],
  },
  {
    title: 'App Bancaire',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=900&fit=crop',
    description: 'Application sécurisée avec authentification biométrique.',
    technologies: ['React Native', 'TypeScript', 'Encryption'],
  },
]

const filters = [
  { id: 'all', label: 'Tous' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
]

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = useMemo(
    () =>
      activeFilter === 'all'
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter]
  )

  return (
    <div className="w-full bg-white">
      <section className="pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="container-page">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <p className="eyebrow mb-4">Nos réalisations</p>
            <h1 className="section-heading mb-4">Des produits conçus pour des résultats concrets</h1>
            <p className="text-lg text-gray-500">
              Explorez une sélection de projets web et mobile livrés pour nos clients.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-8">
        <div className="container-page">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-250 ${
                  activeFilter === filter.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-surface-100 text-gray-600 hover:bg-surface-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container-page grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              className="bento-card group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ y: -7 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] uppercase font-semibold tracking-widest bg-white/90 text-gray-900 px-2.5 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-surface-100 text-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors">
                  Voir l’étude de cas →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page">
          <motion.div
            className="rounded-4xl bg-gray-900 text-white p-8 md:p-12 text-center"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Vous avez un projet similaire ?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Parlons de vos objectifs et construisons ensemble votre prochaine plateforme.
            </p>
            <Link to="/contact" className="btn-primary">
              Démarrer un projet
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio