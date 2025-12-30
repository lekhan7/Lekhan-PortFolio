import React from 'react'
import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="about-text">
            <p className="about-description">
              I'm a passionate full-stack developer with expertise in the MERN stack and modern web technologies. 
              My journey in web development has been fueled by a love for creating innovative solutions and 
              solving complex problems.
            </p>
            <p className="about-description">
              I specialize in building AI-integrated applications, RESTful APIs, and responsive web interfaces. 
              With experience in cloud deployment, authentication systems, and third-party API integrations, 
              I bring ideas to life through clean, efficient code.
            </p>
            <p className="about-description">
              When I'm not coding, you'll find me participating in hackathons, collaborating with teams to 
              build working MVPs under tight deadlines, or contributing to open-source projects. I believe in 
              continuous learning and staying updated with the latest technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

