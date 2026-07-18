import React from 'react';
import { MapPin, Phone, Mail, ArrowRight, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b1b3d] text-white pt-20 pb-10 relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Our Office */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white tracking-wide">Our Office</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-gray-400" />
                <span className="text-gray-300 text-[15px] leading-relaxed">
                  123, Chhatrapati Sambhajinagar
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gray-400" />
                <span className="text-gray-300 text-[15px]">+91 95117077840</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gray-400" />
                <span className="text-gray-300 text-[15px]">Sikkatfinancialservices@gmail.com</span>
              </li>
            </ul>
            
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-9 h-9 rounded-full border border-gray-500/50 flex items-center justify-center text-white hover:bg-white hover:text-[#0b1b3d] hover:border-white transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-gray-500/50 flex items-center justify-center text-white hover:bg-white hover:text-[#0b1b3d] hover:border-white transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-gray-500/50 flex items-center justify-center text-white hover:bg-white hover:text-[#0b1b3d] hover:border-white transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-gray-500/50 flex items-center justify-center text-white hover:bg-white hover:text-[#0b1b3d] hover:border-white transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white tracking-wide">Services</h4>
            <ul className="space-y-3">
              {['Financial Planning', 'Cash Investment', 'Financial Consultancy', 'Business Loans', 'Business Analysis'].map((item) => (
                <li key={item}>
                  <a href="#" className="flex items-center gap-2 text-gray-300 text-[15px] hover:text-white hover:tracking-wide transition-all group">
                    <ArrowRight size={14} className="text-gray-400 group-hover:text-white" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Contact Us', 'Our Services', 'Terms & Condition', 'Support'].map((item) => (
                <li key={item}>
                  <a href="#" className="flex items-center gap-2 text-gray-300 text-[15px] hover:text-white hover:tracking-wide transition-all group">
                    <ArrowRight size={14} className="text-gray-400 group-hover:text-white" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white tracking-wide">Newsletter</h4>
            <p className="text-gray-300 text-[15px] leading-relaxed mb-6">
              Dolor amet sit justo amet elitr clita ipsum elitr est.
            </p>
            <div className="relative w-full max-w-sm">
              <input 
                type="email" 
                placeholder="Your email"
                className="w-full bg-white text-gray-800 rounded-[4px] py-3.5 pl-4 pr-24 outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded px-5 text-sm font-medium transition-colors">
                SignUp
              </button>
            </div>
          </div>
          
        </div>

      </div>

      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg transition-colors z-50"
      >
        <ArrowUp size={20} strokeWidth={2.5} />
      </button>

    </footer>
  );
};

export default Footer;
