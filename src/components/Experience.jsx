import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    role: "Audio Visual Assistant",
    company: "ECOWAS",
    date: "2024 – Present",
    desc: "Supported media teams in editing images for publications, managed press releases, and represented the audiovisual department at events."
  },
  {
    role: "Head of Customer Care Service",
    company: "Top Rank Global Project Ltd",
    date: "2024",
    desc: "Led a customer support team, managed inquiries, gathered client feedback, and improved service workflows."
  },
  {
    role: "Virtual Assistant – Legal Industry",
    company: "Freelance",
    date: "2024",
    desc: "Handled scheduling, budgeting, document prep, and client coordination for a law practice."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-gradient">Work Experience</span>
      </motion.h2>
      
      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            className="timeline-item glass-panel"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="timeline-icon">
              <Briefcase size={20} />
            </div>
            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <p className="company-date">{exp.company} <span>|</span> {exp.date}</p>
              <p className="desc">{exp.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
