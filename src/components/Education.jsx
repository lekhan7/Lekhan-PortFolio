import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaSchool } from 'react-icons/fa'
import './Education.css'

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Commerce in Computer Applications',
      institution: 'Field Marshal K.M. Cariappa College, Madikeri',
      university: 'Kodagu University',
      year: 'Present',
      icon: FaGraduationCap,
      type: 'degree'
    },
    {
      degree: 'PUC (90%)',
      institution: 'ST Michael\'s Composite PU College, Madikeri',
      year: '2022',
      icon: FaSchool,
      type: 'pu'
    },
   
    {
      degree: 'Class 10th',
      institution: 'ST Michael High School Madikeri',
      year: '2019',
      icon: FaSchool,
      type: 'class10'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <section id="education" className="education">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Education</h2>
          <div className="title-underline"></div>
        </motion.div>

        <motion.div
          className="education-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-item"
              variants={itemVariants}
            >
              <div className="education-icon">
                <edu.icon />
              </div>
              <div className="education-content">
                <div className="education-header">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <span className="education-year">{edu.year}</span>
                </div>
                {edu.institution && (
                  <p className="education-institution">{edu.institution}</p>
                )}
                {edu.university && (
                  <p className="education-university">{edu.university}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Education

