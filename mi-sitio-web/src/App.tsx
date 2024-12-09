import Navbar from './components/Navbar'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Logo from './components/Logo'
import { FaWhatsapp } from 'react-icons/fa'

// Importar imágenes
import nivelInicialImg from './assets/niveles/nivel-inicial.jpg'
import nivelPrimarioImg from './assets/niveles/nivel-primario.jpg'
import nivelSecundarioImg from './assets/niveles/nivel-secundario.jpg'

function App() {
  const openWhatsApp = (message: string) => {
    const phoneNumber = '5491234567890' // Reemplazar con el número real
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-green-600 to-green-800 text-white">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Raices de Posadas</h1>
              <p className="text-xl md:text-2xl mb-8">Educación que trasciende</p>
              <p className="text-lg text-green-100 mb-8">Formando líderes del mañana desde 1990</p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a 
                  href="#propuesta" 
                  className="bg-white text-green-700 hover:bg-green-100 px-6 py-3 rounded-full transition duration-300 font-semibold"
                >
                  Conoce Más
                </a>
                <a 
                  href="#contacto" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-700 px-6 py-3 rounded-full transition duration-300 font-semibold"
                >
                  Contáctanos
                </a>
              </div>
            </div>
            
            <div className="relative w-full max-w-2xl mx-auto">
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ" 
                  title="Video Institucional"
                  frameBorder="0" 
                  allow="autoplay; encrypted-media" 
                  allowFullScreen
                  className="w-full h-full object-cover"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <section id="propuesta" className="min-h-screen flex items-center justify-center bg-white">
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Propuesta Educativa</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-700">Educación Integral</h3>
                <p className="text-gray-600">Formación académica, valores y desarrollo personal en un ambiente de respeto y compromiso.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-700">Innovación Educativa</h3>
                <p className="text-gray-600">Metodologías modernas y tecnología integrada en el proceso de aprendizaje.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-700">Valores y Tradición</h3>
                <p className="text-gray-600">Compromiso con la excelencia académica y la formación en valores.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="nosotros" className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-green-800">Sobre Nosotros</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl text-gray-600 mb-6">
                Con más de 30 años de trayectoria, Raices de Posadas se ha consolidado como una institución líder en educación en la región.
                Nuestro compromiso con la excelencia académica y la formación integral de nuestros estudiantes nos distingue.
              </p>
              <p className="text-xl text-gray-600">
                Contamos con un equipo docente altamente calificado y una infraestructura moderna que permite el desarrollo óptimo de todas las actividades educativas.
              </p>
            </div>
          </div>
        </section>

        <section id="niveles" className="min-h-screen flex items-center justify-center bg-white">
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Niveles Educativos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                <img 
                  src={nivelInicialImg} 
                  alt="Nivel Inicial" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-700">Nivel Inicial</h3>
                  <p className="text-gray-600 mb-4">
                    Jardín de infantes con programas adaptados para el desarrollo temprano y estimulación integral.
                  </p>
                  <button 
                    onClick={() => openWhatsApp('Consulta sobre Nivel Inicial')}
                    className="w-full flex items-center justify-center bg-green-500 text-white py-2 rounded-full hover:bg-green-600 transition duration-300"
                  >
                    <FaWhatsapp className="mr-2" /> Consultar
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                <img 
                  src={nivelPrimarioImg} 
                  alt="Nivel Primario" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-700">Nivel Primario</h3>
                  <p className="text-gray-600 mb-4">
                    Educación básica con énfasis en fundamentos académicos, valores y desarrollo personal.
                  </p>
                  <button 
                    onClick={() => openWhatsApp('Consulta sobre Nivel Primario')}
                    className="w-full flex items-center justify-center bg-green-500 text-white py-2 rounded-full hover:bg-green-600 transition duration-300"
                  >
                    <FaWhatsapp className="mr-2" /> Consultar
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                <img 
                  src={nivelSecundarioImg} 
                  alt="Nivel Secundario" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-700">Nivel Secundario</h3>
                  <p className="text-gray-600 mb-4">
                    Formación integral preparando a los estudiantes para su futuro académico y profesional.
                  </p>
                  <button 
                    onClick={() => openWhatsApp('Consulta sobre Nivel Secundario')}
                    className="w-full flex items-center justify-center bg-green-500 text-white py-2 rounded-full hover:bg-green-600 transition duration-300"
                  >
                    <FaWhatsapp className="mr-2" /> Consultar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-green-800">Contacto</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="max-w-3xl mx-auto text-center mb-8">
                  <p className="text-gray-600">
                    ¿Tienes alguna pregunta o te gustaría obtener más información? 
                    Completa el formulario y nos pondremos en contacto contigo a la brevedad.
                  </p>
                </div>
                <ContactForm />
              </div>
              
              <div className="flex flex-col">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden flex-grow">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.7980117765!2d-55.89613968503298!3d-27.36778628285348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9457beb41e6e4b0d%3A0x8a0b59c7b2c5bca3!2sPosadas%2C%20Misiones!5e0!3m2!1ses!2sar!4v1702085348990!5m2!1ses!2sar"
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold text-green-800">Nuestra Ubicación</h3>
                  <p className="text-gray-600">Posadas, Misiones, Argentina</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
