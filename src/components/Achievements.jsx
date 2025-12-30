import React from 'react'
import { motion } from 'framer-motion'
import { FaTrophy, FaAward, FaUsers, FaCode, FaRocket, FaGift } from 'react-icons/fa'
import './Achievements.css'

const Achievements = () => {
  const achievements = [
    {
      icon: FaTrophy,
      title: '6 National-Level Hackathons',
      description: 'Participated in diverse problem statements'
    },
    {
      icon: FaRocket,
      title: '24-Hour Deadlines',
      description: 'Built innovative full-stack solutions under tight deadlines'
    },
    {
      icon: FaUsers,
      title: 'Cross-Functional Teams',
      description: 'Collaborated with diverse teams to develop working MVPs'
    },
    {
      icon: FaCode,
      title: 'Real-Time Coding',
      description: 'Hands-on experience in real-time coding, APIs, and deployment'
    },
    {
      icon: FaAward,
      title: 'Recognition',
      description: 'Received certificates, prizes, and honorable gifts'
    }
  ]

  const activities = [
    {
      icon: FaUsers,
      title: 'National Service Scheme',
      role: 'Group Leader',
      description: 'Serving as Group Leader in NSS'
    },
    {
      icon: FaTrophy,
      title: 'Sports',
      role: 'Cricket',
      description: 'Active wicketkeeper in cricket'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="achievements" className="achievements">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Achievements & Activities</h2>
          <div className="title-underline"></div>
        </motion.div>

        <motion.div
          className="achievements-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="achievement-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="achievement-icon">
                <achievement.icon />
              </div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="activities-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="activities-title">Activities</h3>
          <div className="activities-grid">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                className="activity-card"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="activity-icon">
                  <activity.icon />
                </div>
                <div className="activity-content">
                  <h4 className="activity-title">{activity.title}</h4>
                  <p className="activity-role">{activity.role}</p>
                  <p className="activity-description">{activity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements

