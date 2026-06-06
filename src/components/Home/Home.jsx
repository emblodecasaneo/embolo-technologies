import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
}

const services = [
  {
    title: 'Développement Web',
    description: 'Sites vitrines, e-commerce et applications web sur mesure avec les technologies les plus récentes.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Applications Mobile',
    description: 'Applications iOS et Android natives ou cross-platform pour une expérience utilisateur optimale.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Maintenance & Support',
    description: 'Suivi, mises à jour et évolutions continues pour garantir la performance de vos solutions.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Audit & Conseil',
    description: 'Analyse technique de vos projets existants et recommandations stratégiques pour optimiser vos investissements.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
]

const stats = [
  { value: '50+', label: 'Projets livrés' },
  { value: '98%', label: 'Clients satisfaits' },
  { value: '5+', label: "Années d'expérience" },
  { value: '24h', label: 'Délai de réponse' },
]

const technologies = [
  { name: 'React', logo: 'https://cdn.simpleicons.org/react/111827' },
  { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs/111827' },
  { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs/111827' },
  { name: 'Flutter', logo: 'https://cdn.simpleicons.org/flutter/111827' },
  { name: 'PostgreSQL', logo: 'https://cdn.simpleicons.org/postgresql/111827' },
  { name: 'AWS', logo: 'https://cdn.simpleicons.org/amazonwebservices/111827' },
  { name: 'Docker', logo: 'https://cdn.simpleicons.org/docker/111827' },
  { name: 'TypeScript', logo: 'https://cdn.simpleicons.org/typescript/111827' },
]

const BentoGrid = () => (
  <div className="grid lg:grid-cols-12 gap-4 md:gap-5 w-full mt-12 md:mt-14">
    <motion.div
      className="bento-card lg:col-span-7 p-6 md:p-7"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.25 }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-400 mb-2">Performance digitale</p>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
            50<span className="text-primary-600">+</span> projets livrés
          </h3>
        </div>
        <div className="bg-primary-50 text-primary-600 text-xs font-semibold px-3 py-1.5 rounded-full w-fit">
          +32% cette année
        </div>
      </div>

      <div className="bg-surface-50 rounded-2xl p-4 mb-5">
        <div className="grid grid-cols-4 gap-2 mb-4">
          {[
            { label: 'En cours', value: '08' },
            { label: 'Livrés', value: '52' },
            { label: 'Satisfaction', value: '98%' },
            { label: 'Support', value: '24h' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-lg md:text-xl font-semibold text-gray-900">{item.value}</p>
              <p className="text-[10px] md:text-xs text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
        <div className="flex items-end gap-2 h-20">
          {[22, 35, 31, 48, 55, 62, 58, 76, 84, 79].map((height, index) => (
            <div key={index} className="flex-1 rounded-xl bg-primary-100 overflow-hidden">
              <div className="w-full bg-primary-600 rounded-xl transition-all duration-700" style={{ height: `${height}%` }} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {['React', 'Node.js', 'Flutter', 'API sécurisée'].map((tag) => (
          <span key={tag} className="text-xs font-medium bg-gray-900 text-white px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>

    <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-5">
      <motion.div
        className="bento-card p-5 md:p-6"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
      >
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-400 mb-3">Pipeline actif</p>
        <div className="space-y-3">
          {[
            { name: 'Plateforme e-commerce', progress: 85 },
            { name: 'Application mobile', progress: 72 },
            { name: 'Refonte corporate', progress: 64 },
          ].map((item) => (
            <div key={item.name}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm text-gray-600">{item.name}</span>
                <span className="text-xs font-semibold text-gray-500">{item.progress}%</span>
              </div>
              <div className="h-2 bg-surface-100 rounded-full overflow-hidden">
                <div className="h-full bg-primary-600 rounded-full" style={{ width: `${item.progress}%` }} />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="bento-card overflow-hidden"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
      >
        <div className="relative h-44 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 p-4">
          <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-primary-600/30 blur-2xl" />
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <div className="w-2 h-2 rounded-full bg-green-400" />
            </div>

            <div className="space-y-2">
              <div className="h-2 w-2/3 rounded-full bg-white/70" />
              <div className="h-2 w-1/2 rounded-full bg-white/50" />
              <div className="grid grid-cols-4 gap-1.5 pt-2">
                {[55, 80, 42, 68].map((h, index) => (
                  <div key={index} className="h-10 rounded-md bg-white/10 overflow-hidden">
                    <div className="w-full bg-primary-500/80 rounded-md" style={{ height: `${h}%` }} />
                  </div>
                ))}
              </div>
            </div>

            <div className="text-white">
              <p className="text-[10px] uppercase tracking-[0.14em] text-white/70 mb-1">Dashboard</p>
              <p className="text-sm font-semibold">Vue produit temps réel</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
)

const FeatureMockup = ({ variant }) => {
  if (variant === 'filters') {
    return (
      <div className="bg-surface-100 rounded-4xl p-4 md:p-6">
        <div className="bg-white rounded-2xl shadow-card p-4 space-y-3">
          <p className="text-sm font-semibold text-gray-900">Stack technique</p>
          {['React / Next.js', 'Node.js / Python', 'Flutter / React Native'].map((item, i) => (
            <div key={item} className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{item}</span>
              <div className="w-24 h-1.5 bg-surface-200 rounded-full overflow-hidden">
                <div className="h-full bg-primary-600 rounded-full" style={{ width: `${90 - i * 15}%` }} />
              </div>
            </div>
          ))}
          <div className="flex gap-2 pt-2">
            {['Web', 'Mobile', 'API'].map((tag) => (
              <span key={tag} className="text-xs font-medium bg-gray-900 text-white px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-card p-4 mt-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center text-white text-sm font-bold">ET</div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-900">Projet e-commerce</p>
            <p className="text-xs text-primary-600 font-medium">En cours · 85% complété</p>
          </div>
          <span className="text-xs bg-green-50 text-green-600 font-semibold px-2 py-1 rounded-full">Actif</span>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-surface-100 rounded-4xl p-4 md:p-6">
      <div className="bg-white rounded-2xl shadow-card p-4">
        <p className="text-sm font-semibold text-gray-900 mb-3">Suivi de projet</p>
        {[
          { label: 'Analyse des besoins', done: true },
          { label: 'Design & prototypage', done: true },
          { label: 'Développement', done: true },
          { label: 'Tests & déploiement', done: false },
        ].map((step) => (
          <div key={step.label} className="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${step.done ? 'bg-primary-600' : 'border-2 border-gray-200'}`}>
              {step.done && (
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className={`text-sm ${step.done ? 'text-gray-900' : 'text-gray-400'}`}>{step.label}</span>
          </div>
        ))}
      </div>
      <div className="bg-gray-900 rounded-2xl p-4 mt-4 text-white">
        <p className="text-xs text-gray-400 mb-1">Livraison estimée</p>
        <p className="text-lg font-semibold">Dans 2 semaines</p>
        <button className="mt-3 w-full bg-primary-600 text-white text-xs font-medium py-2 rounded-xl hover:bg-primary-700 transition-colors">
          Voir le rapport
        </button>
      </div>
    </div>
  )
}

const Home = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="pt-28 pb-14 md:pt-32 md:pb-20">
        <div className="container-page">
        <div className="w-full max-w-4xl mx-auto text-center">
          <motion.p
            className="eyebrow mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Agence de développement web & mobile
          </motion.p>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight leading-[1.1] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Nous transformons vos{' '}
            <span className="text-primary-600">idées</span>
            {' '}en solutions{' '}
            <span className="text-primary-600">digitales</span>
            {' '}performantes
          </motion.h1>

          <motion.p
            className="text-lg text-gray-500 mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Sites web, applications mobiles et solutions sur mesure — nous accompagnons
            les entreprises dans leur transformation numérique avec expertise et passion.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/contact" className="btn-secondary">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Demander un devis
            </Link>
            <Link to="/portfolio" className="btn-primary">
              Voir nos réalisations
            </Link>
          </motion.div>
        </div>

        <BentoGrid />
        </div>
      </section>

      {/* Social proof */}
      <motion.section
        className="py-10 border-y border-gray-100"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
      >
        <div className="container-page">
          <p className="text-center text-xs font-semibold tracking-[0.15em] uppercase text-gray-400 mb-5">
            Technologies que nous maîtrisons
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="bento-card !rounded-2xl p-3 flex items-center justify-center min-h-16 hover:shadow-card transition-all duration-300"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="h-6 w-6 object-contain opacity-80"
                  loading="lazy"
                />
                <span className="sr-only">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Feature 1 */}
      <motion.section
        className="py-16 md:py-20"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
      >
        <div className="container-page grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div {...fadeUp}>
            <p className="eyebrow mb-3">Notre approche</p>
            <h2 className="section-heading mb-4">
              Des solutions sur mesure, adaptées à vos besoins
            </h2>
            <p className="text-gray-500 leading-relaxed text-lg">
              Chaque projet est unique. Nous analysons vos objectifs, votre marché et vos contraintes
              pour concevoir une solution digitale qui génère de la valeur réelle pour votre entreprise.
            </p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
            <FeatureMockup variant="filters" />
          </motion.div>
        </div>
      </motion.section>

      {/* Feature 2 */}
      <motion.section
        className="py-16 md:py-20 bg-surface-50"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
      >
        <div className="container-page grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div {...fadeUp} className="order-2 md:order-1">
            <FeatureMockup variant="tracking" />
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }} className="order-1 md:order-2">
            <p className="eyebrow mb-3">Transparence</p>
            <h2 className="section-heading mb-4">
              Suivez l'avancement de votre projet en temps réel
            </h2>
            <p className="text-gray-500 leading-relaxed text-lg">
              Communication régulière, jalons clairs et livrables documentés.
              Vous savez exactement où en est votre projet à chaque étape du développement.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Services */}
      <motion.section
        className="services-section py-16 md:py-20"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
      >
        <div className="container-page">
          <motion.div className="mb-10" {...fadeUp}>
            <p className="eyebrow mb-3">Ce que nous faisons</p>
            <h2 className="section-heading mb-3">Nos expertises</h2>
            <p className="text-lg text-gray-500 max-w-3xl">
              De la conception au déploiement, nous couvrons l'ensemble du cycle de vie de vos projets digitaux.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                className="bento-card p-6 group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-2xl bg-primary-600 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-5">{service.description}</p>
                <Link to="/services" className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors">
                  En savoir plus →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats */}
      <motion.section
        className="py-14 bg-gray-900"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
      >
        <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value.replace(/[+%h]/g, '')}
                <span className="text-primary-600">
                  {stat.value.match(/[+%h]/)?.[0] ?? ''}
                </span>
              </p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="py-16 md:py-20"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="container-page text-center"
          {...fadeUp}
        >
          <h2 className="section-heading mb-4">
            Prêt à lancer votre <span className="text-primary-600">projet</span> ?
          </h2>
          <p className="text-lg text-gray-500 mb-8">
            Discutons de vos besoins et créons ensemble la solution parfaite pour votre entreprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Contactez-nous
            </Link>
            <Link to="/services" className="btn-ghost">
              Découvrir nos services
            </Link>
          </div>
        </motion.div>
      </motion.section>
    </div>
  )
}

export default Home
