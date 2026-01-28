import { motion } from 'framer-motion'
import { FaCode, FaDatabase, FaTools, FaUsers } from 'react-icons/fa'

const About = () => {
  const highlights = [
    {
      icon: FaCode,
      title: 'Full Stack Development',
      description: 'Building scalable web applications with modern technologies',
    },
    {
      icon: FaDatabase,
      title: 'Database Expertise',
      description: 'Designing efficient database solutions with MySQL and SQL Server',
    },
    {
      icon: FaTools,
      title: 'API Development',
      description: 'Creating robust RESTful APIs and microservices architecture',
    },
    {
      icon: FaUsers,
      title: 'Team Collaboration',
      description: 'Working effectively in cross-functional Agile teams',
    },
  ]

  return (
    <section id="about" className="section-container bg-white dark:bg-black">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title text-center mb-4"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-subtitle text-center mb-12 md:mb-20"
        >
          Passionate developer with a strong track record of delivering high-quality solutions
        </motion.p>

        {/* Side-by-side layout - Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-center mb-12 md:mb-20">
          {/* Profile Image - Left side on desktop, top on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end order-2 lg:order-1"
          >
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <motion.img
                  src={`${import.meta.env.BASE_URL}about-profile.png`}
                  alt="VinodKumar G"
                  className="w-full h-auto object-cover rounded-3xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
                {/* Subtle border effect */}
                <div className="absolute inset-0 rounded-3xl border border-gray-200 dark:border-gray-800 pointer-events-none" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content - Right side on desktop, bottom on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-4 md:space-y-6">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed font-light" style={{ letterSpacing: '-0.01em' }}>
                I'm an experienced .NET Developer with expertise in ASP.NET Core, React.js, MySQL, SQL Server, 
                and Node.js. With a strong track record of developing scalable web applications and APIs, I'm 
                dedicated to delivering high-quality solutions that meet business needs.
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed font-light" style={{ letterSpacing: '-0.01em' }}>
                My experience spans across multiple industries including healthcare, education, and business 
                analytics. I'm skilled in Git, GitHub, Postman, Azure DevOps, CI/CD, and web hosting platforms, 
                ensuring efficient development workflows and reliable deployments.
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed font-light" style={{ letterSpacing: '-0.01em' }}>
                I'm a strong problem-solver, collaborative team player, and adaptable to new technologies. 
                I'm committed to following best practices and continuously improving my skills to stay at the 
                forefront of software development.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 md:mt-24"
        >
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-black dark:text-white mb-8 md:mb-12 tracking-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            What I Do
          </motion.h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.03, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="flex flex-col items-center text-center p-6 md:p-8 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-all cursor-pointer"
                >
                  <motion.div
                    className="mb-4 md:mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 flex items-center justify-center shadow-sm">
                      <Icon className="text-3xl md:text-4xl text-black dark:text-white" />
                    </div>
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-semibold text-black dark:text-white mb-2 md:mb-3">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-light px-2">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
