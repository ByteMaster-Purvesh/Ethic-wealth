import React from 'react';

const Callback = () => {
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
        <div className="bg-white rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.08)] p-8 md:p-12 lg:p-16 text-center">
          
          <div className="inline-block border border-blue-200 bg-white text-blue-500 rounded-full px-5 py-1.5 text-sm font-medium mb-6 shadow-sm">
            Get In Touch
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1b3d] mb-10">
            Request A Call-Back
          </h2>

          <form className="space-y-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full border border-gray-200 rounded-md px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-700 bg-white placeholder-gray-400"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full border border-gray-200 rounded-md px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-700 bg-white placeholder-gray-400"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="tel" 
                placeholder="Your Mobile" 
                className="w-full border border-gray-200 rounded-md px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-700 bg-white placeholder-gray-400"
              />
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full border border-gray-200 rounded-md px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-700 bg-white placeholder-gray-400"
              />
            </div>

            <textarea 
              placeholder="Message" 
              rows="4"
              className="w-full border border-gray-200 rounded-md px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-700 bg-white placeholder-gray-400 resize-none"
            ></textarea>

            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 rounded-md transition-colors shadow-md"
            >
              Submit Now
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Callback;
