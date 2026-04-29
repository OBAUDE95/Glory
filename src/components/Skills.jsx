import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skills = [
  "Google Workspace",
  "Corel Draw",
  "Canva",
  "Content Creation",
  "Photo Editing",
  "ChatGPT",
  "Team Coordination",
  "Public Speaking",
  "Community Engagement",
  "Market Analysis"
];

const Skills = () => {
  return (
    <section id="skills" className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-gradient">Skills & Expertise</span>
      </motion.h2>
      
      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            className="skill-pill glass-panel"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ 
              y: -5, 
              boxShadow: "0 10px 20px rgba(196, 113, 237, 0.3)",
              borderColor: "rgba(196, 113, 237, 0.5)"
            }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
