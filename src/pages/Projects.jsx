import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaServer } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'Mako Score — Business Care Software',
      description: 'A secure, user-friendly application to streamline business workflows and performance analytics for US-based companies. Developed with ASP.NET Core, React.js, MySQL, and API integrations.',
      technologies: ['ASP.NET Core', 'React.js', 'MySQL', 'RESTful APIs'],
      icon: FaServer,
      demoLink: '#',
      githubLink: '#',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'ClinanG — Health Care Software',
      description: 'A secure, user-friendly healthcare application to streamline patient care and medical workflows. Utilized ASP.NET Core, MySQL, and API integrations for reliability and data security.',
      technologies: ['ASP.NET Core', 'MySQL', 'HL7 Parser', 'RESTful APIs'],
      icon: FaCode,
      demoLink: '#',
      githubLink: '#',
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'PSG - Hostel Management Software',
      description: 'A secure, user-friendly hostel management application to streamline student and hostel administration workflows. Built with ASP.NET Core, MySQL, and API integrations.',
      technologies: ['ASP.NET Core', 'MySQL', 'ASP.NET Core MVC', 'RESTful APIs'],
      icon: FaDatabase,
      demoLink: '#',
      githubLink: '#',
      color: 'from-purple-500 to-purple-600',
    },
  ]

  return (
    <section id="projects" className="section-container bg-white dark:bg-black">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title text-center"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-subtitle text-center"
        >
          Showcasing my recent work and contributions to various projects
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mt-12 md:mt-16">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="card group cursor-pointer relative overflow-hidden hover:border-gray-200 dark:hover:border-gray-800"
              >
                <motion.div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} opacity-10 rounded-full blur-3xl`}
                  animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 20, 0],
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ 
                      scale: 1.15,
                      rotate: 5
                    }}
                    transition={{ duration: 0.3 }}
                    className={`w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center text-white text-3xl md:text-4xl mb-6 shadow-xl`}
                  >
                    <Icon />
                  </motion.div>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-black dark:text-white mb-3 md:mb-4">{project.title}</h3>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-4 md:mb-6 leading-relaxed font-light">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: 0.5 + techIndex * 0.1,
                          type: "spring",
                          stiffness: 200
                        }}
                        whileHover={{ scale: 1.1 }}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm rounded-full font-medium border border-gray-200 dark:border-gray-800"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-black dark:text-white hover:opacity-70 font-medium transition-opacity text-base"
                    >
                      <FaExternalLinkAlt /> <span>Demo</span>
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white font-medium transition-colors text-base"
                    >
                      <FaGithub /> <span>GitHub</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
