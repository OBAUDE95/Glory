import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-gradient">Get In Touch</span>
      </motion.h2>
      
      <div className="contact-container">
        <motion.div 
          className="contact-card glass-panel"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="contact-item">
            <div className="contact-icon">
              <Mail size={24} />
            </div>
            <div className="contact-info">
              <h3>Email</h3>
              <a href="mailto:nathanielglory031@gmail.com">nathanielglory031@gmail.com</a>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <Phone size={24} />
            </div>
            <div className="contact-info">
              <h3>Phone</h3>
              <a href="tel:+2348155285170">+234 815 528 5170</a>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <MapPin size={24} />
            </div>
            <div className="contact-info">
              <h3>Location</h3>
              <p>Abuja, Nigeria</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
