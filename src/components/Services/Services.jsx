import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Développement Web',
    description: 'Sites vitrines, e-commerce et plateformes métiers pensées pour convertir et évoluer.',
    features: ['Architecture scalable', 'SEO technique', 'Optimisation performance', 'Back-office personnalisé'],
  },
  {
    title: 'Développement Mobile',
    description: 'Applications mobiles fluides et robustes pour iOS et Android.',
    features: ['UX mobile-first', 'API sécurisée', 'Notifications push', 'Publication stores'],
  },
  {
    title: 'Maintenance & Support',
    description: 'Monitoring, corrections, évolutions et assistance continue pour vos produits.',
    features: ['Mises à jour régulières', 'Support réactif', 'Corrections critiques', 'Suivi qualité'],
  },
  {
    title: 'Audit & Conseil',
    description: 'Audit technique complet pour fiabiliser, sécuriser et accélérer vos solutions.',
    features: ['Audit code', 'Audit sécurité', 'Plan d’amélioration', 'Roadmap actionnable'],
  },
]

const processSteps = [
  { number: '01', title: 'Découverte', text: 'Nous cadrons vos objectifs business et techniques.' },
  { number: '02', title: 'Conception', text: 'Nous définissons les écrans, l’architecture et les priorités.' },
  { number: '03', title: 'Livraison', text: 'Nous livrons, testons et accompagnons la montée en charge.' },
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
}

const Services = () => {
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
            <p className="eyebrow mb-4">Nos services</p>
            <h1 className="section-heading mb-4">Tout ce qu’il faut pour créer votre produit digital</h1>
            <p className="text-lg text-gray-500">
              Nous combinons design, développement et stratégie pour livrer des solutions performantes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="container-page grid md:grid-cols-2 gap-5 md:gap-6">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="bento-card p-6 md:p-7 group hover:shadow-card-hover transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <div className="w-11 h-11 rounded-2xl bg-primary-600 text-white flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h2>
              <p className="text-gray-500 leading-relaxed mb-5">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface-50">
        <div className="container-page">
          <motion.div {...fadeUp} className="max-w-3xl mb-10">
            <p className="eyebrow mb-3">Méthodologie</p>
            <h2 className="section-heading mb-3">Un process clair, rapide et transparent</h2>
            <p className="text-lg text-gray-500">
              Chaque étape est visible et validée avec vous pour garantir un résultat solide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                className="bento-card p-6"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-xs font-bold text-primary-600 tracking-widest">{step.number}</span>
                <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-2">{step.title}</h3>
                <p className="text-gray-500">{step.text}</p>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Un besoin précis ? On vous accompagne</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Discutons de votre projet et construisons une solution qui répond à vos objectifs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Parler à un expert
              </Link>
              <Link to="/portfolio" className="btn-ghost !text-white !border-gray-500 hover:!border-white">
                Voir des cas clients
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services