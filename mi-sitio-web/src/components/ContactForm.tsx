import React, { memo, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import emailjs from '@emailjs/browser'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

// Definición del esquema de validación con Yup
const contactSchema = yup.object().shape({
  name: yup
    .string()
    .required('El nombre es obligatorio')
    .min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: yup
    .string()
    .required('El correo electrónico es obligatorio')
    .email('Correo electrónico inválido'),
  message: yup
    .string()
    .required('El mensaje es obligatorio')
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
})

interface ContactFormData {
  name: string
  email: string
  message: string
}

const ContactForm: React.FC = memo(() => {
  const { t } = useTranslation();
  
  const schema = yup.object().shape({
    name: yup.string().required(t('contacto.nameRequired')),
    email: yup.string().email(t('contacto.emailInvalid')).required(t('contacto.emailRequired')),
    message: yup.string().required(t('contacto.messageRequired'))
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm<ContactFormData>({
    resolver: yupResolver(schema),
    mode: 'onBlur'
  })

  const onSubmit = useCallback(async (data: ContactFormData) => {
    try {
      await emailjs.send(
        'service_k2y51le', 
        'template_cdiwoze',
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message
        },
        'nmSkiqk2c-XdzhiYo'
      )
      reset()
    } catch (error) {
      console.error('Error enviando el formulario:', error)
    }
  }, [reset])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-8 rounded-xl shadow-lg"
    >
      <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
        {t('contacto.title')}
      </h2>

      <AnimatePresence>
        {isSubmitSuccessful ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="text-center text-green-600 flex flex-col items-center"
          >
            <FaCheckCircle className="text-6xl mb-4" />
            <p className="text-xl font-semibold">
              {t('contacto.successMessage')}
            </p>
            <p className="text-gray-600 mt-2">
              {t('contacto.successDescription')}
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="mb-4">
              <label 
                htmlFor="name" 
                className="block text-gray-700 font-medium mb-2"
              >
                {t('contacto.name')}
              </label>
              <input
                {...register('name')}
                type="text"
                id="name"
                placeholder={t('contacto.namePlaceholder')}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.name.message}
                </motion.p>
              )}
            </div>

            <div className="mb-4">
              <label 
                htmlFor="email" 
                className="block text-gray-700 font-medium mb-2"
              >
                {t('contacto.email')}
              </label>
              <input
                {...register('email')}
                type="email"
                id="email"
                placeholder={t('contacto.emailPlaceholder')}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.email.message}
                </motion.p>
              )}
            </div>

            <div className="mb-6">
              <label 
                htmlFor="message" 
                className="block text-gray-700 font-medium mb-2"
              >
                {t('contacto.message')}
              </label>
              <textarea
                {...register('message')}
                id="message"
                rows={4}
                placeholder={t('contacto.messagePlaceholder')}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.message.message}
                </motion.p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full py-3 rounded-lg text-white font-semibold transition duration-300 flex items-center justify-center ${
                isSubmitting 
                  ? 'bg-green-300 cursor-not-allowed' 
                  : 'bg-green-500 hover:bg-green-600'
              }`}
            >
              {isSubmitting ? (
                <span>{t('contacto.sending')}</span>
              ) : (
                <>
                  <FaPaperPlane className="mr-2" /> {t('contacto.send')}
                </>
              )}
            </motion.button>
          </form>
        )}
      </AnimatePresence>
    </motion.div>
  )
})

ContactForm.displayName = 'ContactForm'

export default ContactForm
