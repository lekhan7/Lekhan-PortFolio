import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaDownload, FaPaperPlane, FaPaperclip } from 'react-icons/fa'
import './Hero.css'
import pp from "../assets/mainimg.jpeg"

const Hero = () => {
  const socialLinks = [
    { icon: FaLinkedin, url: 'https://linkedin.com/in/lekhan-karumbaiah-k-t', label: 'LinkedIn' },
    { icon: FaGithub, url: 'https://github.com/lekhan7', label: 'GitHub' },
    { icon: FaEnvelope, url: 'mailto:ktkarumbaiah@gmail.com', label: 'Email' },
    { icon: FaPhone, url: 'tel:+917019564975', label: 'Phone' },
    { icon: FaPaperclip, url: '/Lekhan_Karumbaiah_Resume inhand.pdf', label: 'Resume' }
  ]


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="hero-image-wrapper"
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="hero-image">
              <div className="image-placeholder">
                <img src={pp} />
              </div>
              <div className="image-glow"></div>
            </div>
          </motion.div>

          <motion.div className="hero-text" variants={itemVariants}>
            <motion.h1
              className="hero-name"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Hi, I'm <span className="gradient-text">Lekhan Karumbaiah K.T.</span>
            </motion.h1>

            <motion.p
              className="hero-title"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Full Stack Developer
            </motion.p>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Aspiring full-stack developer skilled in MERN stack, cloud tools, and modern web technologies.
              Experienced in building AI-integrated applications, participating in hackathons, and delivering
              functional web apps under tight deadlines.
            </motion.p>

            <motion.div
              className="google-search-link"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ marginTop: '0.5rem', marginBottom: '2rem' }}
            >
              <a
                href="https://www.google.com/search?q=Lekhan+Karumbaiah+KT"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--text-secondary, #9ca3af)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontSize: '1rem',
                  fontStyle: 'italic',
                  transition: 'color 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary-color, #6366f1)'}
                onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary, #9ca3af)'}
              >
                "Curious about my digital footprint? Discover more by asking Google: <span style={{ fontWeight: '600', marginLeft: '6px', borderBottom: '1px solid currentColor' }}>Who is Lekhan Karumbaiah KT?</span>"
              </a>
            </motion.div>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a
                href="#contact"
                className="btn btn-primary"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
            </motion.div>

            <motion.div
              className="hero-social"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.label}
                >
                  <link.icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <div className="mouse">
              <div className="wheel"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

