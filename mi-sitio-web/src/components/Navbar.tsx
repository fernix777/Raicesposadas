import { useState } from 'react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white shadow-lg w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Logo />
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="#inicio" className="text-white hover:text-green-200 px-3 py-2">Inicio</a>
            <a href="#propuesta" className="text-white hover:text-green-200 px-3 py-2">Propuesta Educativa</a>
            <a href="#nosotros" className="text-white hover:text-green-200 px-3 py-2">Nosotros</a>
            <a href="#niveles" className="text-white hover:text-green-200 px-3 py-2">Niveles</a>
            <a href="#contacto" className="text-white hover:text-green-200 px-3 py-2">Contacto</a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-green-200 focus:outline-none"
            >
              <svg
                className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#inicio" className="block text-white hover:text-green-200 px-3 py-2">Inicio</a>
          <a href="#propuesta" className="block text-white hover:text-green-200 px-3 py-2">Propuesta Educativa</a>
          <a href="#nosotros" className="block text-white hover:text-green-200 px-3 py-2">Nosotros</a>
          <a href="#niveles" className="block text-white hover:text-green-200 px-3 py-2">Niveles</a>
          <a href="#contacto" className="block text-white hover:text-green-200 px-3 py-2">Contacto</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
