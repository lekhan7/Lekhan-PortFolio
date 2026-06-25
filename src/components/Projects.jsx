import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaBrain, FaEye, FaChartLine, FaFutbol, FaAdn } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Bunk Brain',
      tech: 'MERN Stack',
      score: 99,
      icon: FaBrain,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      description: 'AI-powered Educational website and Start up',
      features: [
        'Bunk Brain is your ultimate online',
        'learning platform! Connect with ',
        'friends, chat with AI tutors, attend',
        ' live video classes, compete on',
        'leaderboards, and explore interactive ',
        'study content—all in one place.'
      ],

      demo: 'https://bunk-brain.pages.dev/BB'
    },
    {
      id: 2,
      title: 'Rebulk',
      tech: 'MERN Stack — JWT Auth',
      score: 93,
      icon: FaBrain,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      description: 'AI-powered resume builder web application with secure JWT authentication. Users can upload resumes, certificates, and other documents.',
      features: [
        'Modern responsive UI with real-time AI suggestions',
        'Secure JWT-based authentication system',
        'Cloud storage integration for documents',
        'Resume improvement recommendations',
        'Fully tested and deployed'
      ],
      github: 'https://github.com/lekhan7/rebulk.git'


    },
    {
      id: 3,
      title: 'SnapScholar',
      tech: 'MERN Stack — OCR — AI',
      score: 83,
      icon: FaEye,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      description: 'Learning platform that converts uploaded topic images into text using OCR and provides AI-generated answers, quizzes, and relevant YouTube explanations.',
      features: [
        'OCR technology for image to text conversion',
        'AI-generated quizzes and answers',
        'User progress tracking and personalized dashboard',
        'YouTube integration for explanations',
        'Optimized for mobile and web'
      ],
      github: 'https://github.com/lekhan7/snapscholor.git'

    }, {
      id: 4,
      title: 'Exam Hub',
      tech: 'MERN Stack Multilingual ',
      score: 83,
      icon: FaAdn,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      description: 'Multilingual exam preparation platform featuring live classes, real-time chat, and an interactive Meets',
      features: [
        'Public rooma and Private Rooms ',
        'Public chat room and Private chat room ',
        'live classes',
        'Optimized for mobile and web'
      ],
      github: 'https://github.com/lekhan7/ExamHub.git',
      demo: 'https://exam-hub2.vercel.app/',

    },

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
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Some of my recent work and side projects</p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-header" style={{ background: project.gradient }}>
                <div className="project-icon">
                  <project.icon />
                </div>
                <div className="project-score">{project.score}%</div>
              </div>
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-tech">{project.tech}</p>
                <p className="project-description">{project.description}</p>
                <button className="project-button">View Details</button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="project-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="modal-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
                <div className="modal-header" style={{ background: selectedProject.gradient }}>
                  <div className="modal-icon">
                    <selectedProject.icon />
                  </div>
                  <div>
                    <h2>{selectedProject.title}</h2>
                    <p>{selectedProject.tech}</p>
                  </div>
                  <div className="modal-score">{selectedProject.score}%</div>
                </div>
                <div className="modal-body">
                  <p className="modal-description">{selectedProject.description}</p>
                  <h3>Key Features:</h3>
                  <ul className="features-list">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <div className="modal-links">
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="modal-link">
                      <FaGithub /> GitHub
                    </a>
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="modal-link">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects

