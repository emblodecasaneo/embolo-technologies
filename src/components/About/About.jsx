import { motion } from 'framer-motion'

const About = () => {
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
              À Propos de Nous
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto opacity-90">
              Votre partenaire de confiance pour la transformation numérique
            </p>
          </motion.div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div 
            className="bg-gray-800 border border-gray-700 rounded-2xl p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-light text-white mb-6">Notre Histoire</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Embolo Technologies a été fondée avec une vision claire : fournir des solutions 
              numériques innovantes et sur mesure pour aider les entreprises à prospérer dans 
              l'ère numérique. Depuis notre création, nous nous sommes engagés à délivrer 
              l'excellence technique et un service client exceptionnel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="bg-gray-900 border border-gray-600 rounded-2xl p-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-light text-white mb-4">Notre Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                Accompagner les entreprises dans leur transformation numérique en leur fournissant 
                des solutions technologiques innovantes, performantes et adaptées à leurs besoins spécifiques.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gray-900 border border-gray-600 rounded-2xl p-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-light text-white mb-4">Notre Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                Devenir le partenaire technologique de référence pour les entreprises souhaitant 
                innover et se démarquer grâce au numérique, en alliant expertise technique et 
                approche humaine.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light text-white mb-6">Nos Valeurs</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Les principes qui guident notre travail au quotidien
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Innovation", description: "Nous restons à la pointe de la technologie pour offrir les meilleures solutions", icon: "💡" },
              { title: "Excellence", description: "Nous visons l'excellence dans chaque projet que nous entreprenons", icon: "⭐" },
              { title: "Intégrité", description: "Nous maintenons les plus hauts standards d'éthique professionnelle", icon: "🤝" },
              { title: "Collaboration", description: "Nous travaillons en étroite collaboration avec nos clients pour leur réussite", icon: "👥" }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-2xl p-4 text-center hover:border-primary-600 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light text-white mb-6">Notre Équipe</h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Notre équipe est composée d'experts passionnés par la technologie et 
              déterminés à créer des solutions qui font la différence. Avec des années 
              d'expérience dans le développement web et mobile, nous sommes prêts à 
              relever tous les défis techniques.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About 