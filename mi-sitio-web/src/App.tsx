import { Suspense, lazy } from 'react'
import { motion, LazyMotion, domAnimation } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar'
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'

// Lazy loading de componentes
const ContactForm = lazy(() => import('./components/ContactForm'))
const MapComponent = lazy(() => import('./components/MapComponent'))
const Footer = lazy(() => import('./components/Footer'))

// Optimización de imágenes
import heroBackground from './assets/hero-background.jpg?url'
import nivelInicialImg from './assets/niveles/nivel-inicial.jpg?url'
import nivelPrimarioImg from './assets/niveles/nivel-primario.jpg?url'
import nivelSecundarioImg from './assets/niveles/nivel-secundario.jpg?url'

function App() {
  const { t } = useTranslation();
  
  const openWhatsApp = (message: string) => {
    const phoneNumber = '5491234567890' // Reemplazar con el número real
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
  }

  const propuestaCards = [
    {
      icon: '🌱',
      title: t('home.sections.propuesta.cards.integral.title'),
      description: t('home.sections.propuesta.cards.integral.description')
    },
    {
      icon: '🧠',
      title: t('home.sections.propuesta.cards.innovacion.title'),
      description: t('home.sections.propuesta.cards.innovacion.description')
    },
    {
      icon: '🌍',
      title: t('home.sections.propuesta.cards.valores.title'),
      description: t('home.sections.propuesta.cards.valores.description')
    }
  ];

  const nivelesCards = [
    {
      img: nivelInicialImg,
      title: t('home.sections.niveles.cards.inicial.title'),
      description: t('home.sections.niveles.cards.inicial.description')
    },
    {
      img: nivelPrimarioImg,
      title: t('home.sections.niveles.cards.primario.title'),
      description: t('home.sections.niveles.cards.primario.description')
    },
    {
      img: nivelSecundarioImg,
      title: t('home.sections.niveles.cards.secundario.title'),
      description: t('home.sections.niveles.cards.secundario.description')
    }
  ];

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          {/* Sección Hero con Imagen de Fondo */}
          <motion.section 
            id="inicio" 
            className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
            style={{ 
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroBackground})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.5, 
              ease: "easeInOut" 
            }}
          >
            <div className="text-center text-white z-10 px-4">
              <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  ease: "easeOut" 
                }}
                className="text-5xl font-bold mb-6"
              >
                {t('home.title')}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.2,
                  ease: "easeOut" 
                }}
                className="text-xl mb-8"
              >
                {t('home.subtitle')}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.4,
                  ease: "easeOut" 
                }}
                className="flex justify-center space-x-4"
              >
                <button 
                  onClick={() => openWhatsApp('Quiero más información')}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition duration-300 flex items-center"
                >
                  <FaWhatsapp className="mr-2" /> {t('home.cta')}
                </button>
              </motion.div>
            </div>
          </motion.section>

          <section id="propuesta" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <motion.h2 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl font-bold text-green-800 mb-4"
                >
                  {t('home.sections.propuesta.title')}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-xl text-gray-600 max-w-3xl mx-auto"
                >
                  {t('home.sections.propuesta.description')}
                </motion.p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {propuestaCards.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ 
                      scale: 1.05,
                      rotate: 3,
                      transition: { duration: 0.2 }
                    }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 120
                    }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-xl shadow-lg text-center transform transition duration-300 hover:shadow-xl"
                  >
                    <motion.div 
                      initial={{ rotate: -10, opacity: 0 }}
                      whileInView={{ rotate: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="text-6xl mb-6"
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="text-2xl font-semibold text-green-700 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <a 
                  href="#niveles"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full inline-block transition duration-300 ease-in-out transform hover:scale-105"
                >
                  {t('home.sections.propuesta.button')}
                </a>
              </motion.div>
            </div>
          </section>

          <section id="nosotros" className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="container mx-auto px-4 py-16">
              <h2 className="text-3xl font-bold text-center mb-8 text-green-800">
                {t('home.sections.nosotros.title')}
              </h2>
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-xl text-gray-600 mb-6">
                  {t('home.sections.nosotros.description')}
                </p>
              </div>
            </div>
          </section>

          <section id="niveles" className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12 text-green-800">
                {t('home.sections.niveles.title')}
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {nivelesCards.map((nivel, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ 
                      scale: 1.05,
                      rotate: 3,
                      transition: { duration: 0.2 }
                    }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 120
                    }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-xl shadow-lg text-center transform transition duration-300 hover:shadow-xl"
                  >
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="mb-6 overflow-hidden rounded-xl"
                    >
                      <img 
                        src={nivel.img} 
                        alt={nivel.title} 
                        className="w-full h-64 object-cover transform transition duration-300 hover:scale-110"
                      />
                    </motion.div>
                    <h3 className="text-2xl font-semibold text-green-700 mb-4">
                      {nivel.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {nivel.description}
                    </p>
                    <div className="flex justify-center">
                      <button
                        onClick={() => openWhatsApp(`Consulta sobre ${nivel.title}`)}
                        className="w-full flex items-center justify-center bg-green-500 text-white py-2 rounded-full hover:bg-green-600 transition duration-300"
                      >
                        <FaWhatsapp className="mr-2" /> {t('home.sections.niveles.button')}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <Suspense fallback={<div className="h-screen flex items-center justify-center">Cargando...</div>}>
            <motion.section 
              id="contacto" 
              className="py-20 bg-gray-50"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ 
                duration: 0.5, 
                ease: "easeInOut" 
              }}
            >
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    ease: "easeOut" 
                  }}
                  className="text-center mb-12"
                >
                  <h2 className="text-4xl font-bold text-green-800 mb-4">
                    {t('home.sections.contacto.title')}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {t('home.sections.contacto.description')}
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                  <ContactForm />
                  <Suspense fallback={<div>Cargando mapa...</div>}>
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.2,
                        ease: "easeOut" 
                      }}
                    >
                      <MapComponent />
                      
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mt-6 text-center"
                      >
                        <h3 className="text-2xl font-semibold text-green-800 mb-4">
                          {t('home.sections.contacto.ubicacion.title')}
                        </h3>
                        <p className="text-gray-600">
                          {t('home.sections.contacto.ubicacion.address')}
                        </p>
                        <p className="text-gray-600">
                          {t('home.sections.contacto.ubicacion.phone')}
                        </p>
                        <div className="flex justify-center space-x-4 mt-4">
                          <a 
                            href="https://wa.me/TUNUMERODEWHATSAPP" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center transition duration-300"
                          >
                            <FaWhatsapp className="mr-2" /> {t('home.sections.contacto.ubicacion.whatsapp')}
                          </a>
                          <a 
                            href="mailto:contacto@raicesdeposadas.edu.ar"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full flex items-center transition duration-300"
                          >
                            <FaEnvelope className="mr-2" /> {t('home.sections.contacto.ubicacion.email')}
                          </a>
                        </div>
                      </motion.div>
                    </motion.div>
                  </Suspense>
                </div>
              </div>
            </motion.section>
          </Suspense>
        </main>

        <Suspense fallback={<div>Cargando...</div>}>
          <Footer />
        </Suspense>
      </div>
    </LazyMotion>
  )
}

export default App
