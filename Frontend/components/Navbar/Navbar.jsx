import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Clock, Mail, Phone, ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Twitter = ({ size = 24, strokeWidth = 2, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);
const Facebook = ({ size = 24, strokeWidth = 2, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const Youtube = ({ size = 24, strokeWidth = 2, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
);
const Linkedin = ({ size = 24, strokeWidth = 2, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const Navbar = () => {
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full z-50 transition-all duration-300 ${isScrolled ? 'fixed top-0 left-0 bg-white shadow-lg' : 'absolute top-0 left-0 bg-transparent'}`}>
      {/* Top Bar - Hidden on Mobile/Tablet, scaled on desktop */}
      <div className={`hidden lg:flex justify-between items-center text-[0.7rem] lg:text-sm text-gray-600 border-b border-blue-400/10 transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0 py-0 opacity-0 border-0' : 'h-auto py-3 px-14 md:px-6 lg:px-8 xl:px-12 opacity-100'}`}>
        <div className="flex space-x-3 lg:space-x-6">
          <div className="flex items-center space-x-1 lg:space-x-2">
            <MapPin size={14} className="text-blue-600 lg:w-4 lg:h-4" />
            <span>123, Chhatrapati Sambhajinagar</span>
          </div>
          <div className="flex items-center space-x-1 lg:space-x-2">
            <Clock size={14} className="text-blue-600 lg:w-4 lg:h-4" />
            <span suppressHydrationWarning>{currentTime}</span>
          </div>
        </div>
        <div className="flex space-x-3 lg:space-x-6">
          <div className="flex items-center space-x-1 lg:space-x-2">
            <Mail size={14} className="text-blue-600 lg:w-4 lg:h-4" />
            <span>Sikkafinancialservices@gmail.com</span>
          </div>
          <div className="flex items-center space-x-1 lg:space-x-2">
            <Phone size={14} className="text-blue-600 lg:w-4 lg:h-4" />
            <span>+91 9511707784</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`px-4 md:px-6 lg:px-8 xl:px-12 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-2 lg:py-3' : 'py-3 lg:py-4'}`}>
        {/* Stylized Logo / Image Logo */}
        <Link to="/" className="flex items-center">
          {isScrolled ? (
            <img src="/logo/sikka_logo.jpeg" alt="Sikka Financial Services" className="h-10 md:h-12 lg:h-14 object-contain" />
          ) : (
            <div className="bg-blue-800 text-white p-1.5 md:p-2 rounded flex flex-col items-center justify-center leading-none shadow-md">
              <span className="font-bold text-base md:text-xl lg:text-2xl tracking-wider">SIKKA</span>
              <span className="text-[0.4rem] md:text-[0.5rem] lg:text-[0.55rem] uppercase tracking-widest font-semibold mt-0.5 md:mt-1">Financial Services</span>
            </div>
          )}
        </Link>

        {/* Desktop Links - Hidden on mobile and tablet (md), shown on lg+ */}
        <div className="hidden lg:flex items-center space-x-8 text-gray-700 font-medium font-jost text-base">
          <Link to="/" className={`transition-colors ${isActive('/') ? 'text-blue-600 hover:text-blue-700' : 'hover:text-blue-600'}`}>Home</Link>
          <Link to="/about" className={`transition-colors ${isActive('/about') ? 'text-blue-600 hover:text-blue-700' : 'hover:text-blue-600'}`}>About</Link>
          <Link to="/server" className={`transition-colors ${isActive('/server') ? 'text-blue-600 hover:text-blue-700' : 'hover:text-blue-600'}`}>Services</Link>

          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setIsPagesOpen(true)}
            onMouseLeave={() => setIsPagesOpen(false)}
          >
            <div className={`flex items-center space-x-1 transition-colors ${location.pathname.startsWith('/pages') ? 'text-blue-600 hover:text-blue-700' : 'hover:text-blue-600'}`}>
              <span>Pages</span>
              <ChevronDown size={14} />
            </div>
            <AnimatePresence>
              {isPagesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 overflow-hidden flex flex-col z-50"
                >
                  <Link to="/pages/project" className="px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition-colors">Project</Link>
                  <Link to="/pages/feature" className="px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition-colors">Feature</Link>
                  <Link to="/pages/team-member" className="px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition-colors">Team Member</Link>
                  <Link to="/pages/testimonial" className="px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition-colors">Testimonial</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/contact" className={`transition-colors ${isActive('/contact') ? 'text-blue-600 hover:text-blue-700' : 'hover:text-blue-600'}`}>Contact</Link>
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden lg:flex items-center space-x-3">
          <a href="#" className="w-8 h-8 rounded-full border border-blue-400 text-blue-400 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all">
            <Twitter size={14} className="w-4 h-4" strokeWidth={2} />
          </a>
          <a href="#" className="w-8 h-8 rounded-full border border-blue-400 text-blue-400 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all">
            <Facebook size={14} className="w-4 h-4" strokeWidth={2} />
          </a>
          <a href="#" className="w-8 h-8 rounded-full border border-blue-400 text-blue-400 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all">
            <Youtube size={14} className="w-4 h-4" strokeWidth={2} />
          </a>
          <a href="#" className="w-8 h-8 rounded-full border border-blue-400 text-blue-400 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all">
            <Linkedin size={14} className="w-4 h-4" strokeWidth={2} />
          </a>
        </div>

        {/* Mobile Menu Button - Shown on mobile and tablet */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 hover:text-blue-600 transition-colors">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-sm shadow-xl overflow-hidden border-t border-gray-200"
          >
            <div className="px-4 py-4 flex flex-col space-y-4 text-gray-700 font-medium text-base">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={`${isActive('/') ? 'text-blue-600 hover:text-blue-700' : 'hover:text-blue-600'}`}>Home</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className={`${isActive('/about') ? 'text-blue-600 hover:text-blue-700' : 'hover:text-blue-600'}`}>About</Link>
              <Link to="/server" onClick={() => setIsMobileMenuOpen(false)} className={`${isActive('/server') ? 'text-blue-600 hover:text-blue-700' : 'hover:text-blue-600'}`}>Services</Link>

              <div className="flex flex-col space-y-2">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setIsPagesOpen(!isPagesOpen)}
                >
                  <span className={`${location.pathname.startsWith('/pages') ? 'text-blue-600 hover:text-blue-700' : 'hover:text-blue-600'}`}>Pages</span>
                  <ChevronDown size={14} className={`transform transition-transform ${isPagesOpen ? 'rotate-180' : ''}`} />
                </div>
                <AnimatePresence>
                  {isPagesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col pl-4 space-y-2 text-sm text-gray-600 overflow-hidden"
                    >
                      <Link to="/pages/team-member" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 py-1">Team Member</Link>
                      <Link to="/pages/testimonial" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 py-1">Testimonial</Link>
                      <Link to="/pages/project" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 py-1">Project</Link>
                      <Link to="/pages/feature" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 py-1">Feature</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`${isActive('/contact') ? 'text-blue-600 hover:text-blue-700' : 'hover:text-blue-600'}`}>Contact</Link>
            </div>

            <div className="px-4 pb-6 pt-2 flex items-center space-x-4 border-t border-gray-100">
              <a href="#" className="w-10 h-10 rounded-full border border-blue-200 text-[#0b1b3d] flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all">
                <Twitter size={20} strokeWidth={2} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-blue-200 text-[#0b1b3d] flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all">
                <Facebook size={20} strokeWidth={2} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-blue-200 text-[#0b1b3d] flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all">
                <Youtube size={20} strokeWidth={2} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-blue-200 text-[#0b1b3d] flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all">
                <Linkedin size={20} strokeWidth={2} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
