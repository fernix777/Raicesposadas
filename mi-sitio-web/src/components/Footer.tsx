import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-bold">Raices de Posadas</h4>
            <p className="text-sm">Educación que trasciende</p>
          </div>
          <div className="space-x-4">
            <a href="#inicio" className="hover:text-green-200 text-green-100">Inicio</a>
            <a href="#propuesta" className="hover:text-green-200 text-green-100">Propuesta Educativa</a>
            <a href="#nosotros" className="hover:text-green-200 text-green-100">Nosotros</a>
            <a href="#niveles" className="hover:text-green-200 text-green-100">Niveles</a>
            <a href="#contacto" className="hover:text-green-200 text-green-100">Contacto</a>
          </div>
        </div>
        
        <div className="mt-6 flex justify-center space-x-6">
          <a 
            href="https://www.facebook.com/raicesdeposadas" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl text-blue-300 hover:text-blue-200 transition duration-300"
          >
            <FaFacebook />
          </a>
          <a 
            href="https://www.instagram.com/raicesdeposadas" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl text-pink-300 hover:text-pink-200 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://www.linkedin.com/company/raicesdeposadas" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl text-blue-400 hover:text-blue-300 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://wa.me/5491234567890" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl text-green-300 hover:text-green-200 transition duration-300"
          >
            <FaWhatsapp />
          </a>
        </div>
        
        <div className="mt-4">
          <p className="text-xs text-green-100">&copy; 2024 Raices de Posadas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
