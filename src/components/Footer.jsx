import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com',
      color: 'hover:text-white dark:hover:text-gray-200',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/vinod-kumar-bb4b747a/',
      color: 'hover:text-blue-600',
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:kevinvinod1405@gmail.com',
      color: 'hover:text-red-600',
    },
    {
      name: 'Phone',
      icon: FaPhone,
      url: 'tel:+919965484744',
      color: 'hover:text-green-600',
    },
  ]

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-2 text-black dark:text-white">VinodKumar G</h3>
            <p className="text-gray-600 dark:text-gray-400 font-light">Software Developer | Full Stack Engineer</p>
            <p className="text-gray-500 dark:text-gray-500 text-sm mt-2 font-light">
              63 16A, Mullai Nagar, Podanur, Coimbatore, 641021
            </p>
          </div>

          <div className="flex space-x-8">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-xl text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors`}
                  aria-label={link.name}
                >
                  <Icon />
                </motion.a>
              )
            })}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-900 text-center text-gray-500 dark:text-gray-500 text-sm font-light">
          <p>&copy; {new Date().getFullYear()} VinodKumar G. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
