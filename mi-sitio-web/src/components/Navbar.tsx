import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import { Link } from 'react-router-dom';

// Importar banderas
import SpainFlag from '../assets/flags/es.svg';
import ThailandFlag from '../assets/flags/th.svg';

const navVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const linkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3
    }
  },
  hover: {
    scale: 1.1,
    color: '#10b981', // Hover color (green-500)
    transition: { duration: 0.2 }
  }
}

const mobileMenuVariants = {
  hidden: { 
    opacity: 0, 
    x: "100%",
    transition: {
      duration: 0.3
    }
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.3
    }
  }
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  // Detectar idioma del navegador y configurar idioma inicial
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    const browserLanguage = navigator.language.split('-')[0];
    
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    } else if (['es', 'th'].includes(browserLanguage)) {
      i18n.changeLanguage(browserLanguage);
      localStorage.setItem('language', browserLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'es' ? 'th' : 'es';
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const navLinks = [
    { name: t('navbar.home'), href: '#inicio' },
    { name: t('navbar.propuesta'), href: '#propuesta' },
    { name: t('navbar.nosotros'), href: '#nosotros' },
    { name: t('navbar.niveles'), href: '#niveles' },
    { name: t('navbar.contacto'), href: '#contacto' }
  ]

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="bg-green-700 text-white shadow-lg w-full"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white"
        >
          <Logo />
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div 
          className="hidden md:flex space-x-6 items-center"
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{ delay: index * 0.1 }}
              className="text-white hover:text-green-200 transition"
            >
              {link.name}
            </motion.a>
          ))}

          {/* Language Selector for Desktop */}
          <motion.button 
            onClick={toggleLanguage} 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="ml-4 p-2 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center"
          >
            <img 
              src={i18n.language === 'es' ? ThailandFlag : SpainFlag} 
              alt="Language" 
              className="w-6 h-6 mr-2 rounded-full"
            />
            {i18n.language === 'es' ? 'TH' : 'ES'}
          </motion.button>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden space-x-2">
          {/* Language Toggle for Mobile */}
          <motion.button 
            onClick={toggleLanguage} 
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-green-500 text-white rounded-full flex items-center"
          >
            <img 
              src={i18n.language === 'es' ? ThailandFlag : SpainFlag} 
              alt="Language" 
              className="w-6 h-6 mr-2 rounded-full"
            />
            {i18n.language === 'es' ? 'TH' : 'ES'}
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-white"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              className="md:hidden fixed top-16 right-0 w-64 bg-green-700 shadow-lg rounded-lg p-6"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    transition={{ delay: index * 0.1 }}
                    className="text-white hover:text-green-200 transition"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
