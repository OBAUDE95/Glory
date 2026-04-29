import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section-container">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <span className="text-gradient">About Me</span>
        </h2>
        
        <div className="about-content glass-panel">
          <div className="about-icon-wrapper">
            <User size={40} className="about-icon" />
          </div>
          <p className="about-text">
            I am a versatile professional with expertise in media production, customer service, and community engagement. 
            I bring a strong background in visual content creation, event coordination, and communications. 
            My work experience spans organizations such as ECOWAS, where I supported audiovisual operations and public relations. 
            With certifications in forensic studies, intelligence, and virtual assistance, I thrive in dynamic, 
            team-oriented environments and enjoy making a meaningful impact.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
