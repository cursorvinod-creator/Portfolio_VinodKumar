import { motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap, FaAward } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      type: 'experience',
      title: 'Software Developer',
      company: 'Park Intelli Solutions, Coimbatore',
      period: 'January 2025 – Present',
      description: [
        'Currently developing scalable modules for Mako Score, a performance analytics platform, using ASP.NET Core and React.js',
        'Integrating APIs for real-time data processing and collaborating with cross-functional teams to enhance system functionality and user experience',
      ],
      icon: FaBriefcase,
      color: 'bg-blue-500',
    },
    {
      type: 'experience',
      title: 'Software Engineer',
      company: 'PSG Software Technology, Coimbatore',
      period: 'May 2023 – December 2024',
      description: [
        'Developed and maintained robust web applications using ASP.NET Core API and ASP.NET Core MVC, ensuring high performance and scalability',
        'Implemented efficient database designs with MySQL and SQL Server, optimizing data retrieval and storage processes',
      ],
      icon: FaBriefcase,
      color: 'bg-green-500',
    },
    {
      type: 'experience',
      title: 'Junior Program Analyst',
      company: 'Latlon Technologies, Coimbatore',
      period: 'January 2022 – April 2023',
      description: [
        'Designed and developed RESTful APIs using ASP.NET Core API, facilitating seamless front-end and back-end communication',
        'Conducted comprehensive testing using Postman to validate API endpoints and ensure functional requirements',
      ],
      icon: FaBriefcase,
      color: 'bg-purple-500',
    },
  ]

  const education = [
    {
      type: 'education',
      title: 'B.Tech',
      company: 'Mohamed Sathak Engineering College, Kilakarai',
      period: 'August 2014 – September 2018',
      description: [
        'Core Courses: Programming Languages, Data Structures, Algorithms, Database Management',
        'Specializations: Web Development, Cybersecurity, Artificial Intelligence',
      ],
      icon: FaGraduationCap,
      color: 'bg-indigo-500',
    },
  ]

  const awards = [
    {
      type: 'award',
      title: 'Letter of Commendation',
      company: 'PSG Software Technology',
      period: '',
      description: ['Recognized for outstanding performance and contributions'],
      icon: FaAward,
      color: 'bg-yellow-500',
    },
  ]

  const renderTimelineItem = (item, index, isLast) => {
    const Icon = item.icon
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.15,
          type: "spring",
          stiffness: 100
        }}
        whileHover={{ x: 10 }}
        className="relative pl-6 md:pl-8 pb-6 md:pb-8"
      >
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
            className="absolute left-3 md:left-4 top-12 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600 origin-top"
          />
        )}
          <div className="flex items-start space-x-3 md:space-x-4">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.15,
              type: "spring",
              stiffness: 200
            }}
            whileHover={{ 
              scale: 1.2, 
              rotate: 360,
              transition: { duration: 0.5 }
            }}
            className={`${item.color} w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-xl relative z-10`}
          >
            <Icon className="text-xl md:text-2xl" />
            <motion.div
              className={`absolute inset-0 ${item.color} rounded-2xl`}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.3 }}
            className="flex-1"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-black dark:text-white mb-2">{item.title}</h3>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 font-medium mb-1">{item.company}</p>
            <p className="text-gray-500 dark:text-gray-500 text-sm md:text-base mb-3 md:mb-4">{item.period}</p>
            <ul className="space-y-2">
              {item.description.map((desc, descIndex) => (
                <motion.li
                  key={descIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.5 + descIndex * 0.1 }}
                  className="text-base md:text-lg text-gray-600 dark:text-gray-400 flex items-start leading-relaxed"
                >
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: descIndex * 0.3
                    }}
                    className="text-black dark:text-white mr-3 mt-1"
                  >
                    ●
                  </motion.span>
                  <span className="font-light">{desc}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    )
  }

  return (
    <section id="experience" className="section-container bg-gray-50 dark:bg-gray-950">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title text-center"
        >
          Experience & Education
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-subtitle text-center"
        >
          My professional journey and educational background
        </motion.p>

        <div className="mt-8 md:mt-12 space-y-12 md:space-y-16">
          {/* Experience */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8 flex items-center"
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <FaBriefcase className="mr-3 text-primary-600 dark:text-primary-400" />
              </motion.span>
              Professional Experience
            </motion.h3>
            <div className="space-y-8">
              {experiences.map((exp, index) =>
                renderTimelineItem(exp, index, index === experiences.length - 1)
              )}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8 flex items-center"
            >
              <motion.span
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <FaGraduationCap className="mr-3 text-primary-600 dark:text-primary-400" />
              </motion.span>
              Education
            </motion.h3>
            <div className="space-y-8">
              {education.map((edu, index) =>
                renderTimelineItem(edu, index, true)
              )}
            </div>
          </div>

          {/* Awards */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8 flex items-center"
            >
              <motion.span
                animate={{ rotate: [0, -15, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <FaAward className="mr-3 text-primary-600 dark:text-primary-400" />
              </motion.span>
              Awards & Recognition
            </motion.h3>
            <div className="space-y-8">
              {awards.map((award, index) =>
                renderTimelineItem(award, index, true)
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
