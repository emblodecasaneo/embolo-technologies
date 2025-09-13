import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    {
      title: "Développement Web",
      description: "Création de sites web et applications web sur mesure, responsive et optimisés pour les performances.",
      features: [
        "Sites vitrines et corporate",
        "Applications web complexes",
        "E-commerce",
        "Interfaces administrateur",
        "API RESTful"
      ],
      icon: "🌐"
    },
    {
      title: "Développement Mobile",
      description: "Applications mobiles natives et cross-platform pour iOS et Android.",
      features: [
        "Applications natives iOS",
        "Applications natives Android",
        "Solutions cross-platform",
        "Applications PWA",
        "Maintenance et mises à jour"
      ],
      icon: "📱"
    },
    {
      title: "Maintenance",
      description: "Services de maintenance et support technique pour garantir la pérennité de vos solutions.",
      features: [
        "Maintenance préventive",
        "Maintenance corrective",
        "Mises à jour de sécurité",
        "Optimisation des performances",
        "Support technique"
      ],
      icon: "🔧"
    },
    {
      title: "Audit",
      description: "Analyse approfondie de vos solutions numériques pour identifier les axes d'amélioration.",
      features: [
        "Audit de performance",
        "Audit de sécurité",
        "Audit d'accessibilité",
        "Audit SEO",
        "Recommandations détaillées"
      ],
      icon: "📊"
    }
  ]

  return (
    <div className="w-full min-h-screen bg-gray-900">
      {/* Header Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">
              Nos Services
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto opacity-90">
              Des solutions sur mesure pour répondre à vos besoins numériques
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-primary-600 transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h2 className="text-xl font-semibold text-white mb-3">{service.title}</h2>
                <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <span className="text-primary-600 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
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
              Besoin d'un service personnalisé ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous aider
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Nous contacter
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services 