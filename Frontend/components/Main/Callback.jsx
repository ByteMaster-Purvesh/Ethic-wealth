import React, { useState } from 'react';
import { useContact } from '../../hooks/useContact';
import { motion } from 'framer-motion';

const Callback = () => {
  const { submitContact, isLoading, error, success, resetStatus } = useContact();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error || success) resetStatus();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await submitContact(formData);
    if (result) {
      setFormData({ name: '', email: '', mobile: '', subject: '', message: '' });
    }
  };

  return (
    <section className="relative overflow-hidden font-sans">
      {/* Blue Top Background */}
      <div className="absolute top-0 left-0 w-full h-[50%] md:h-[60%] bg-blue-600 z-0">
        {/* Subtle background pattern (similar to Stats) */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circlePattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circlePattern)" />
          </svg>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-10 lg:py-12">
        
        {/* Form Card */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.08)] p-8 md:p-12 lg:p-16 text-center"
        >
          
          <div className="inline-block border border-blue-200 bg-white text-blue-500 rounded-full px-5 py-1.5 text-sm font-medium mb-6 shadow-sm">
            Get In Touch
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1b3d] mb-10">
            Request A Call-Back
          </h2>

          {/* Floating Toast Notification (White and Blue Theme) */}
          {(success || error) && (
            <div className="fixed bottom-6 left-6 z-50 flex items-center bg-white text-blue-900 px-5 py-3.5 rounded-lg shadow-2xl border border-blue-100 animate-bounce-in">
              {success ? (
                <div className="bg-blue-600 rounded-full p-1 mr-3 flex-shrink-0 flex items-center justify-center shadow-sm">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
              ) : (
                <div className="bg-red-500 rounded-full p-1 mr-3 flex-shrink-0 flex items-center justify-center shadow-sm">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                </div>
              )}
              <p className="text-sm font-semibold mr-6">
                {success ? "Your request has been submitted successfully." : error}
              </p>
              <button onClick={resetStatus} className="text-blue-300 hover:text-blue-600 transition-colors ml-auto focus:outline-none">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
          )}

          <form className="space-y-6 text-left" onSubmit={onSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name" 
                required
                className="w-full border border-gray-200 rounded-md px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-700 bg-white placeholder-gray-400"
              />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email" 
                required
                className="w-full border border-gray-200 rounded-md px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-700 bg-white placeholder-gray-400"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="tel" 
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Your Mobile" 
                required
                className="w-full border border-gray-200 rounded-md px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-700 bg-white placeholder-gray-400"
              />
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject" 
                required
                className="w-full border border-gray-200 rounded-md px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-700 bg-white placeholder-gray-400"
              />
            </div>

            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message" 
              required
              rows="4"
              className="w-full border border-gray-200 rounded-md px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-700 bg-white placeholder-gray-400 resize-none"
            ></textarea>

            <button 
              type="submit" 
              disabled={isLoading}
              className={`w-full text-white font-medium py-3.5 rounded-md transition-colors shadow-md ${isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
            >
              {isLoading ? 'Submitting...' : 'Submit Now'}
            </button>
          </form>

        </motion.div>
      </div>
    </section>
  );
};

export default Callback;
