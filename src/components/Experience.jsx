import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaCode, FaCloud, FaUsers, FaRocket } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      company: 'Unified Mentores',
      duration: '6 Months',
      icon: FaBriefcase,
      responsibilities: [
        'Developed full-stack applications using MERN stack (MongoDB, Express.js, React, Node.js)',
        'Implemented REST APIs and JWT-based authentication for secure user access',
        'Built responsive UI components and integrated cloud storage (AWS S3) for file uploads',
        'Collaborated with team using Git/GitHub and followed Agile workflow'
      ]
    },
    {
      company: 'NullClass',
      duration: '6 Months',
      icon: FaCode,
      responsibilities: [
        'Created full-stack web projects with dynamic dashboards using MERN stack',
        'Integrated third-party APIs and deployed applications to cloud platforms',
        'Wrote basic unit tests and participated in team code reviews',
        'Improved front-end interactivity using React and JavaScript'
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Experience</h2>
          <div className="title-underline"></div>
        </motion.div>

        <motion.div
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-item"
              variants={itemVariants}
            >
              <div className="experience-icon">
                <exp.icon />
              </div>
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="company-name">{exp.company}</h3>
                  <span className="experience-duration">{exp.duration}</span>
                </div>
                <ul className="experience-list">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <motion.li
                      key={respIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: respIndex * 0.1 }}
                    >
                      {resp}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

