import { motion } from 'framer-motion'

const Contact = () => {
  const contactInfo = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
      title: "Email",
      value: "aicscloud@gmail.com",
      description: "Écrivez-nous pour vos projets"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      title: "Téléphone",
      value: "+237 658 55 99 95",
      description: "Appelez-nous directement"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
      title: "Adresse",
      value: "Yaoundé, Cameroun",
      description: "Notre localisation"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Horaires',
      value: 'Lun - Ven: 9h - 18h',
      description: "Nos heures de disponibilité"
    }
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/microvance/?viewAsMember=true",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: "hover:text-blue-600"
    },
    {
      name: "Facebook",
      url: "https://facebook.com/embolo.technologies",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: "hover:text-blue-700"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/embolo.technologies",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.52.204 5.12.26c-.526.112-.857.513-.857.513s-.401.331-.513.857c-.056.4-.178.974-.212 1.921C4.013 7.989 4 8.396 4 12.017c0 3.622.013 4.029.048 4.976.034.947.156 1.521.212 1.921.112.526.513.857.513.857s.331.401.857.513c.4.056.974.178 1.921.212.947.035 1.354.048 4.976.048 3.622 0 4.029-.013 4.976-.048.947-.034 1.521-.156 1.921-.212.526-.112.857-.513.857-.513s.401-.331.513-.857c.056-.4.178-.974.212-1.921.035-.947.048-1.354.048-4.976 0-3.622-.013-4.029-.048-4.976-.034-.947-.156-1.521-.212-1.921-.112-.526-.513-.857-.513-.857s-.331-.401-.857-.513c-.4-.056-.974-.178-1.921-.212C16.046.013 15.639 0 12.017 0zM12.017 2.163c3.204 0 3.584.012 4.85.07.3.055.92.249 1.133.453.35.35.453.783.453 1.133.058 1.265.07 1.645.07 4.85 0 3.204-.012 3.584-.07 4.85-.055.3-.249.92-.453 1.133-.35.35-.783.453-1.133.453-1.265.058-1.645.07-4.85.07-3.204 0-3.584-.012-4.85-.07-.3-.055-.92-.249-1.133-.453-.35-.35-.453-.783-.453-1.133-.058-1.265-.07-1.645-.07-4.85 0-3.204.012-3.584.07-4.85.055-.3.249-.92.453-1.133.35-.35.783-.453 1.133-.453 1.265-.058 1.645-.07 4.85-.07z"/>
          <path d="M12.017 5.838a6.18 6.18 0 100 12.359 6.18 6.18 0 000-12.359zM12.017 16a4 4 0 110-8 4 4 0 010 8z"/>
          <path d="M19.846 5.595a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
        </svg>
      ),
      color: "hover:text-pink-600"
    },
    {
      name: "GitHub",
      url: "https://github.com/embolo-technologies",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      color: "hover:text-gray-900"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/embolo_tech",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      color: "hover:text-blue-500"
    }
  ]

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
            <p className="eyebrow mb-4">Contact</p>
            <h1 className="section-heading mb-4">Parlons de votre prochain projet web</h1>
            <p className="text-lg text-gray-500">
              Dites-nous ce que vous voulez construire, nous revenons vers vous rapidement.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="container-page grid lg:grid-cols-5 gap-6">
          <motion.div
            className="lg:col-span-3 bento-card p-6 md:p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Envoyez-nous un message</h2>
            <form className="grid sm:grid-cols-2 gap-4">
              <input className="bg-surface-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary-600" placeholder="Nom complet" />
              <input className="bg-surface-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary-600" placeholder="Entreprise" />
              <input className="sm:col-span-2 bg-surface-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary-600" placeholder="Email" />
              <input className="sm:col-span-2 bg-surface-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary-600" placeholder="Sujet" />
              <textarea rows="5" className="sm:col-span-2 bg-surface-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary-600 resize-none" placeholder="Parlez-nous de votre besoin..." />
              <button type="button" className="sm:col-span-2 btn-primary w-full sm:w-fit">
                Envoyer la demande
              </button>
            </form>
          </motion.div>

          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="bento-card p-5"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="w-10 h-10 rounded-xl bg-primary-600 text-white flex items-center justify-center mb-3">
                  <span className="scale-75">{info.icon}</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{info.title}</h3>
                <p className="text-sm text-gray-700 mb-1">{info.value}</p>
                <p className="text-xs text-gray-500">{info.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface-50">
        <div className="container-page">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">Suivez-nous</h2>
            <p className="text-gray-500">
              Découvrez nos projets récents et nos actualités sur les réseaux.
            </p>
          </motion.div>

          <div className="flex justify-center gap-4 flex-wrap">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`bento-card p-4 text-gray-500 hover:text-primary-600 ${social.color}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 