import React from 'react';
import { motion } from 'framer-motion';

const socialLinks = {
  facebook: "https://facebook.com",
  twitter: "https://twitter.com",
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com"
};

const Team = () => {
  const teamMembers = [
    { 
      id: 1, 
      name: 'Sudarshan Jain', 
      role: 'Founder & CEO', 
      image: '/team/team-1.jpeg' 
    },
    { 
      id: 2, 
      name: 'Surbhi Jain', 
      role: 'Co-Founder', 
      image: '/team/team-2.jpeg' 
    }
  ];

  return (
    <section className="py-10 lg:py-16 bg-white font-sans" id="team">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-block border border-blue-200 bg-white text-blue-500 rounded-full px-5 py-1.5 text-sm font-medium mb-4 shadow-sm">
            Our Team
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b1b3d] leading-tight">
            Exclusive Team
          </h2>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={member.id} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 h-[520px] cursor-pointer"
            >
              
              {/* Background Image */}
              <img 
                src={member.image} 
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:grayscale"
              />
              
              {/* Gradient Overlay (Hidden by default, appears on hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b3d] via-[#0b1b3d]/80 via-40% to-transparent opacity-0 group-hover:opacity-95 transition-opacity duration-500"></div>

              {/* Top-Left Badge (Appears on hover) */}
              <div className="absolute top-5 left-5 bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-full flex items-center gap-1.5 shadow-md opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-10">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z"/>
                </svg>
                {member.role}
              </div>

              {/* Top-Right Circular Button */}
              <div className="absolute top-5 right-5 bg-[#0b1b3d] group-hover:bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-500 shadow-lg z-10">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:-rotate-45 transition-transform duration-500">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>

              {/* Bottom Content (Appears on hover) */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end z-10 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">{member.name}</h3>
                <p className="text-white/90 text-sm md:text-base leading-relaxed pr-4">
                  Dedicated {member.role.toLowerCase()} focused on driving growth, building strong client relationships, and delivering excellent financial solutions.
                </p>
                
                {/* Social Icons (Minimalist) */}
                <div className="flex gap-5 mt-5">
                  <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white hover:scale-110 transition-all duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white hover:scale-110 transition-all duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </a>
                  <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white hover:scale-110 transition-all duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white hover:scale-110 transition-all duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                </div>
              </div>
              
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;
