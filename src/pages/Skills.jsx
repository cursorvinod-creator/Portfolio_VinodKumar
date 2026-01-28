import { motion } from 'framer-motion'
import {
  FaReact,
  FaNode,
  FaDatabase,
  FaGitAlt,
  FaAws,
  FaCode,
  FaServer
} from 'react-icons/fa'
import { SiDotnet, SiMysql, SiMicrosoftsqlserver, SiPostman, SiAzuredevops } from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frameworks & Technologies',
      skills: [
        { name: 'ASP.NET Core API', icon: SiDotnet, level: 90, color: 'bg-purple-500' },
        { name: 'ASP.NET Core MVC', icon: SiDotnet, level: 90, color: 'bg-purple-600' },
        { name: 'React.js', icon: FaReact, level: 65, color: 'bg-blue-500' },
        { name: 'Node.js', icon: FaNode, level: 80, color: 'bg-green-600' },
        { name: 'jQuery', icon: FaCode, level: 75, color: 'bg-blue-400' },
        { name: 'Microservices', icon: FaServer, level: 75, color: 'bg-indigo-500' },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', icon: SiMysql, level: 90, color: 'bg-blue-600' },
        { name: 'SQL Server', icon: SiMicrosoftsqlserver, level: 85, color: 'bg-red-600' },
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git & GitHub', icon: FaGitAlt, level: 90, color: 'bg-gray-800' },
        { name: 'Postman', icon: SiPostman, level: 85, color: 'bg-orange-500' },
        { name: 'Azure DevOps', icon: SiAzuredevops, level: 80, color: 'bg-blue-700' },
        { name: 'CI/CD', icon: FaAws, level: 75, color: 'bg-yellow-500' },
      ],
    },
  ]

  return (
    <section id="skills" className="section-container bg-gray-50 dark:bg-gray-950">
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
          <span className="inline-block">
            {'Skills'.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: -50, rotateX: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
                className="inline-block"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-subtitle text-center"
        >
          Technologies and tools I work with to build amazing applications
        </motion.p>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black dark:text-white mb-6 md:mb-8 tracking-tight px-4 md:px-0" style={{ letterSpacing: '-0.02em' }}>
                {category.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ 
                        duration: 0.5, 
                        delay: skillIndex * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                      className="card cursor-pointer hover:border-gray-200 dark:hover:border-gray-800 p-6 md:p-8"
                    >
                      <div className="flex flex-col items-center text-center mb-6">
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                          className={`w-16 h-16 ${skill.color} rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg mb-4`}
                        >
                          <Icon />
                        </motion.div>
                        <h4 className="text-lg md:text-xl font-semibold text-black dark:text-white">{skill.name}</h4>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1.5, 
                            delay: 0.5 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          className={`h-2.5 rounded-full ${skill.color} relative`}
                        >
                          <motion.div
                            animate={{
                              x: ["-100%", "100%"],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          />
                        </motion.div>
                      </div>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1 + skillIndex * 0.1 }}
                        className="text-base text-black dark:text-white mt-3 font-semibold"
                      >
                        {skill.level}%
                      </motion.p>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
