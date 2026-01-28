import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaArrowDown, FaCode, FaDatabase, FaRocket, FaShieldAlt, FaBolt, FaBrain } from 'react-icons/fa'

const Home = () => {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'Software Developer'
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let currentIndex = 0
    let cursorInterval = null
    
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        // Keep cursor blinking after typing is complete
        cursorInterval = setInterval(() => {
          setShowCursor((prev) => !prev)
        }, 530)
      }
    }, 100)

    return () => {
      clearInterval(typingInterval)
      if (cursorInterval) clearInterval(cursorInterval)
    }
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white dark:bg-black pt-20 pb-12 md:pb-20">
      <div className="section-container w-full">
        {/* Two-column layout: Image left, Content right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 items-center max-w-7xl mx-auto mb-8 md:mb-12">
          {/* Profile Image - Left side on desktop, top on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                {/* Profile image container - Apple style with larger size */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden">
                  <motion.img
                    src={`${import.meta.env.BASE_URL}profile-image.png`}
                    alt="VinodKumar G - Software Developer"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ scale: 1.02 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content - Right side on desktop, bottom on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-left order-1 lg:order-2"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-semibold text-black dark:text-white mb-3 md:mb-4 tracking-tight whitespace-nowrap"
              style={{ letterSpacing: '-0.02em' }}
            >
              VinodKumar&nbsp;G
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-600 dark:text-gray-400 mb-4 md:mb-6 min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[4rem] lg:min-h-[5rem] flex items-center font-light"
              style={{ letterSpacing: '-0.01em' }}
            >
              <span className="inline-flex items-center">
                {displayedText}
                <motion.span
                  animate={{ opacity: showCursor ? [1, 0.2, 1] : 0 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block w-0.5 h-6 sm:h-8 md:h-10 lg:h-12 bg-black dark:bg-white ml-3 align-middle"
                />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg sm:text-xl md:text-2xl text-gray-500 dark:text-gray-500 mb-6 md:mb-8 font-light leading-relaxed"
              style={{ letterSpacing: '-0.01em' }}
            >
              Experienced .NET Developer proficient in ASP.NET Core, React.js, MySQL, SQL Server, and Node.js. 
              Dedicated to delivering high-quality, scalable web applications and APIs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <motion.a
                href={`${import.meta.env.BASE_URL}vinodkumar2025docx.pdf`}
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:opacity-80 transition-all duration-300 text-base inline-flex items-center gap-2"
              >
                <FaDownload />
                Download Resume
              </motion.a>
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-transparent text-black dark:text-white border border-gray-300 dark:border-gray-700 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-300 text-base inline-flex items-center gap-2"
              >
                Get In Touch
                <FaArrowDown className="text-sm" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-6 md:mt-8"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block"
              >
                <FaArrowDown className="text-2xl text-gray-400 dark:text-gray-600" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Get the highlights - Below photos */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-black dark:text-white mb-8 md:mb-12 tracking-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            Get the highlights.
          </motion.h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              { 
                icon: FaCode, 
                label: 'Full Stack', 
                color: 'text-blue-600 dark:text-blue-400', 
                bgColor: 'bg-blue-50 dark:bg-blue-950/40',
                borderColor: 'border-blue-200 dark:border-blue-800/50',
                hoverBorder: 'group-hover:border-blue-300 dark:group-hover:border-blue-700',
                shadow: 'shadow-sm dark:shadow-blue-900/20 group-hover:shadow-md dark:group-hover:shadow-blue-900/30'
              },
              { 
                icon: FaDatabase, 
                label: 'Databases', 
                color: 'text-green-600 dark:text-green-400', 
                bgColor: 'bg-green-50 dark:bg-green-950/40',
                borderColor: 'border-green-200 dark:border-green-800/50',
                hoverBorder: 'group-hover:border-green-300 dark:group-hover:border-green-700',
                shadow: 'shadow-sm dark:shadow-green-900/20 group-hover:shadow-md dark:group-hover:shadow-green-900/30'
              },
              { 
                icon: FaRocket, 
                label: 'APIs', 
                color: 'text-purple-600 dark:text-purple-400', 
                bgColor: 'bg-purple-50 dark:bg-purple-950/40',
                borderColor: 'border-purple-200 dark:border-purple-800/50',
                hoverBorder: 'group-hover:border-purple-300 dark:group-hover:border-purple-700',
                shadow: 'shadow-sm dark:shadow-purple-900/20 group-hover:shadow-md dark:group-hover:shadow-purple-900/30'
              },
              { 
                icon: FaShieldAlt, 
                label: 'Security', 
                color: 'text-red-600 dark:text-red-400', 
                bgColor: 'bg-red-50 dark:bg-red-950/40',
                borderColor: 'border-red-200 dark:border-red-800/50',
                hoverBorder: 'group-hover:border-red-300 dark:group-hover:border-red-700',
                shadow: 'shadow-sm dark:shadow-red-900/20 group-hover:shadow-md dark:group-hover:shadow-red-900/30'
              },
              { 
                icon: FaBolt, 
                label: 'Performance', 
                color: 'text-yellow-600 dark:text-yellow-400', 
                bgColor: 'bg-yellow-50 dark:bg-yellow-950/40',
                borderColor: 'border-yellow-200 dark:border-yellow-800/50',
                hoverBorder: 'group-hover:border-yellow-300 dark:group-hover:border-yellow-700',
                shadow: 'shadow-sm dark:shadow-yellow-900/20 group-hover:shadow-md dark:group-hover:shadow-yellow-900/30'
              },
              { 
                icon: FaBrain, 
                label: 'AI Ready', 
                color: 'text-indigo-600 dark:text-indigo-400', 
                bgColor: 'bg-indigo-50 dark:bg-indigo-950/40',
                borderColor: 'border-indigo-200 dark:border-indigo-800/50',
                hoverBorder: 'group-hover:border-indigo-300 dark:group-hover:border-indigo-700',
                shadow: 'shadow-sm dark:shadow-indigo-900/20 group-hover:shadow-md dark:group-hover:shadow-indigo-900/30'
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="flex flex-col items-center text-center cursor-pointer group"
                >
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl flex items-center justify-center mb-4 ${item.bgColor} border ${item.borderColor} ${item.hoverBorder} transition-all ${item.shadow} backdrop-blur-sm`}
                  >
                    <Icon className={`text-3xl sm:text-4xl md:text-5xl ${item.color} dark:drop-shadow-lg`} />
                  </motion.div>
                  <span className="text-sm sm:text-base md:text-lg font-semibold text-black dark:text-white group-hover:opacity-80 transition-opacity">{item.label}</span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
