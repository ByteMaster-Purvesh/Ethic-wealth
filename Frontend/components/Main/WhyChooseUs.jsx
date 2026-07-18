import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const IconCheck = ({ size = 56, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 448 512" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
  </svg>
);

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Fast Executions",
      description: "Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet",
    },
    {
      id: 2,
      title: "Financial Secure",
      description: "Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet",
    }
    // Add more if needed based on the design
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-2 rounded-full border border-blue-200 bg-white text-blue-600 text-sm font-medium">
              Why Choosing Us!
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-jost text-[#0b1b3d] leading-tight pr-4">
              Few Reasons Why People Choosing Us!
            </h2>
            
            <p className="text-gray-600 leading-relaxed pt-2">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. 
              Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
              dolore erat amet.
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg mt-4 inline-flex items-center space-x-2">
              <span>Read More</span>
              <ArrowRight size={16} />
            </button>
          </motion.div>

          {/* Right Column - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            {/* Column 1: Two cards */}
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white border border-blue-100 rounded-lg p-8 shadow-[0_0_15px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all"
              >
                <div className="text-blue-600 mb-5">
                  <IconCheck size={40} />
                </div>
                <h3 className="font-bold text-xl text-[#0b1b3d] mb-3">Fast Executions</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet
                </p>
                <a href="#" className="inline-flex items-center space-x-1 text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors">
                  <span>Read More</span>
                  <ArrowRight size={14} />
                </a>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white border border-blue-100 rounded-lg p-8 shadow-[0_0_15px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all"
              >
                <div className="text-blue-600 mb-5">
                  <IconCheck size={40} />
                </div>
                <h3 className="font-bold text-xl text-[#0b1b3d] mb-3">Guide & Support</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet
                </p>
                <a href="#" className="inline-flex items-center space-x-1 text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors">
                  <span>Read More</span>
                  <ArrowRight size={14} />
                </a>
              </motion.div>
            </div>

            {/* Column 2: One card, pushed down */}
            <div className="space-y-6 sm:mt-20">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white border border-blue-100 rounded-lg p-8 shadow-[0_0_15px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all"
              >
                <div className="text-blue-600 mb-5">
                  <IconCheck size={40} />
                </div>
                <h3 className="font-bold text-xl text-[#0b1b3d] mb-3">Financial Secure</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet
                </p>
                <a href="#" className="inline-flex items-center space-x-1 text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors">
                  <span>Read More</span>
                  <ArrowRight size={14} />
                </a>
              </motion.div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
