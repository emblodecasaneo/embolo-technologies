import { motion } from 'framer-motion'

const values = [
  {
    title: 'Innovation',
    description: 'Nous testons en continu les meilleures approches pour créer des produits durables.',
  },
  {
    title: 'Excellence',
    description: 'Nous livrons un travail propre, maintenable et orienté performance.',
  },
  {
    title: 'Transparence',
    description: 'Vous suivez les décisions et l’avancement en toute clarté.',
  },
  {
    title: 'Partenariat',
    description: 'Nous nous impliquons comme une extension de votre équipe.',
  },
]

const milestones = [
  { year: '2020', text: 'Lancement de l’agence et premiers projets vitrines.' },
  { year: '2022', text: 'Extension vers les applications mobiles et les APIs métiers.' },
  { year: '2024', text: 'Structuration de notre pôle maintenance & accompagnement long terme.' },
]

const About = () => {
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
            <p className="eyebrow mb-4">À propos</p>
            <h1 className="section-heading mb-4">Une équipe orientée impact et qualité produit</h1>
            <p className="text-lg text-gray-500">
              Nous accompagnons les entreprises de l’idée au déploiement avec une vision long terme.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="container-page grid lg:grid-cols-2 gap-6">
          <motion.div
            className="bento-card p-7"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Notre histoire</h2>
            <p className="text-gray-500 leading-relaxed">
              Embolo Technologies est née d’une conviction simple : construire des solutions digitales
              utiles, rapides et fiables. Nous avons structuré une méthode claire qui sécurise la livraison
              et accélère la croissance de nos clients.
            </p>
          </motion.div>

          <motion.div
            className="bento-card p-7 bg-gray-900 text-white"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-4">Notre mission</h2>
            <p className="text-gray-300 leading-relaxed">
              Créer des produits digitaux performants qui simplifient les opérations et augmentent
              les résultats business, tout en gardant une relation client transparente.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface-50">
        <div className="container-page">
          <motion.div
            className="max-w-3xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow mb-3">Parcours</p>
            <h2 className="section-heading mb-3">Notre évolution</h2>
          </motion.div>

          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className="bento-card p-5 flex items-start gap-4"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-xs font-bold text-primary-600 tracking-widest pt-1">{milestone.year}</span>
                <p className="text-gray-600">{milestone.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page">
          <motion.div
            className="max-w-3xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow mb-3">Nos valeurs</p>
            <h2 className="section-heading mb-3">Ce qui guide chacune de nos décisions</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <motion.article
                key={value.title}
                className="bento-card p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <span className="text-[10px] uppercase tracking-widest font-semibold text-primary-600">Value</span>
                <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-500">{value.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 