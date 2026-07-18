import React from 'react';
import PageHeader from '../Header/PageHeader';
import Footer from '../Footer/Footer.jsx';

const Contact = () => {
  return (
    <main>
      <PageHeader 
        title="Contact" 
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Pages' },
          { label: 'Contact' }
        ]} 
      />
      <section className="py-20 lg:py-28 bg-white font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
            
            {/* Form Column */}
            <div>
              <div className="inline-block border border-blue-200 bg-white text-blue-500 rounded-full px-5 py-1.5 text-sm font-medium mb-4 shadow-sm">
                Contact
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#0b1b3d] leading-tight mb-8">
                If You Have Any Query,<br />Please Contact Us
              </h2>

              <form className="space-y-6">
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
                
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full border border-gray-200 rounded-md px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-700 bg-white placeholder-gray-400"
                />

                <textarea 
                  placeholder="Message" 
                  rows="5"
                  className="w-full border border-gray-200 rounded-md px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-700 bg-white placeholder-gray-400 resize-none"
                ></textarea>

                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 px-8 rounded-md transition-colors shadow-md"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map Column */}
            <div className="w-full h-[400px] lg:h-[550px] rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.05)] border border-gray-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd" 
                className="w-full h-full border-0" 
                width="100%"
                height="100%"
                style={{ minHeight: '100%' }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Contact;
