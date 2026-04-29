import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import './Education.css';

const educations = [
  {
    institution: "The Federal Polytechnic, Bida",
    degree: "HND in Mass Communication",
    year: "2022"
  },
  {
    institution: "College of Detectives Investigation",
    degree: "Basic Intelligence & Detective Studies",
    year: "2023"
  },
  {
    institution: "Advanced Peace & Reconciliation Centre",
    degree: "Managerial Certificate in Peace & Security Studies",
    year: "2023"
  },
  {
    institution: "ALX",
    degree: "Virtual Assistance Training",
    year: "Expected 2025"
  }
];

const Education = () => {
  return (
    <section id="education" className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-gradient">Education & Certifications</span>
      </motion.h2>
      
      <div className="education-grid">
        {educations.map((edu, index) => (
          <motion.div 
            key={index}
            className="education-card glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="edu-icon-wrapper">
              <GraduationCap size={28} />
            </div>
            <h3>{edu.institution}</h3>
            <p className="degree">{edu.degree}</p>
            <span className="year">{edu.year}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
