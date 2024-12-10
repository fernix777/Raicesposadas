import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer: React.FC = () => {
  const socialLinks = [
    { 
      icon: FaFacebook, 
      href: 'https://facebook.com/raicesdeposadas', 
      color: 'text-blue-600' 
    },
    { 
      icon: FaInstagram, 
      href: 'https://instagram.com/raicesdeposadas', 
      color: 'text-pink-600' 
    },
    { 
      icon: FaWhatsapp, 
      href: 'https://wa.me/+543764000000', 
      color: 'text-green-600' 
    },
    { 
      icon: FaEnvelope, 
      href: 'mailto:info@raicesdeposadas.edu.ar', 
      color: 'text-red-600' 
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.2 }
    }
  }

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="bg-green-800 text-white py-12"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Información de Contacto */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-bold mb-4"
          >
            Contacto
          </motion.h3>
          <motion.p variants={itemVariants}>
            Dirección: Posadas, Misiones
          </motion.p>
          <motion.p variants={itemVariants}>
            Teléfono: +54 376 4000000
          </motion.p>
          <motion.p variants={itemVariants}>
            Email: info@raicesdeposadas.edu.ar
          </motion.p>
        </motion.div>

        {/* Links Rápidos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-bold mb-4"
          >
            Links Rápidos
          </motion.h3>
          {['Inicio', 'Propuesta', 'Niveles', 'Contacto'].map((link) => (
            <motion.a 
              key={link}
              href={`#${link.toLowerCase()}`}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              className="block hover:text-green-200 transition"
            >
              {link}
            </motion.a>
          ))}
        </motion.div>

        {/* Redes Sociales */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-bold mb-4"
          >
            Síguenos
          </motion.h3>
          <motion.div 
            variants={itemVariants}
            className="flex space-x-6"
          >
            {socialLinks.map(({ icon: Icon, href, color }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover="hover"
                className={`${color} text-3xl hover:scale-110 transition`}
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="text-center mt-8 pt-4 border-t border-green-700"
      >
        {new Date().getFullYear()} Raíces de Posadas. Todos los derechos reservados.
      </motion.div>
    </motion.footer>
  )
}

export default Footer
