import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUp } from 'lucide-react';
import About from './About';
import Stats from './Stats';
import WhyChooseUs from './WhyChooseUs';
import Services from './Services';
import Callback from './Callback';
import Calculator from './Calculator';
import Projects from './Projects';
import Team from './Team';
import Testimonial from './Testimonial';
import Footer from '../Footer/Footer.jsx';

const slides = [
  {
    id: 1,
    title: "Your Financial Status\nIs Our Goal",
    subtitle: "Welcome to Sikka Financial Services",
    image: "/carousel/carousel-1.jpg"
  },
  {
    id: 2,
    title: "True Financial\nSupport For You",
    subtitle: "Welcome to Sikka Financial Services",
    image: "/carousel/carousel-2.jpg"
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main>
    <div className="relative w-full overflow-hidden bg-[#eef1ff]">
      {/* Invisible dummy image to force the exact native aspect ratio height, with a minimum height for mobile */}
      <img src={slides[0].image} className="w-full h-auto min-h-[500px] md:min-h-[600px] object-cover invisible pointer-events-none block" alt="" />

      {/* Background Image that changes per slide, on the right side */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          <div 
            className="w-full h-full bg-cover bg-[80%_15%] md:bg-[100%_15%] lg:bg-[center_15%] bg-no-repeat"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
        </motion.div>
      </AnimatePresence>


      {/* Content - added pt-24 lg:pt-32 to push text below navbar */}
      <div className="absolute inset-0 z-10 flex items-center pt-28 md:pt-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-xl lg:max-w-2xl xl:max-w-3xl"
          >
            <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-blue-200 bg-blue-50/50 backdrop-blur-sm text-blue-600 text-xs md:text-sm lg:text-base font-medium mb-4 md:mb-6">
              {slides[currentSlide].subtitle}
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-jost text-[#0b1b3d] leading-tight mb-5 md:mb-8 whitespace-pre-line">
              {slides[currentSlide].title}
            </h1>
            
            <button className="bg-[#3b63f6] hover:bg-blue-700 text-white px-4 py-2 md:px-8 md:py-4 rounded-md text-xs md:text-base font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Explore More
            </button>
          </motion.div>
        </AnimatePresence>
        </div>
      </div>


      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 w-4 h-6 md:w-8 md:h-10 lg:w-14 lg:h-12 bg-blue-400 hover:bg-blue-600 text-white flex items-center justify-center rounded-r-full transition-colors z-20 group"
      >
        <ChevronLeft className="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6 transform group-hover:-translate-x-1.5 transition-transform duration-300" />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 w-4 h-6 md:w-8 md:h-10 lg:w-14 lg:h-12 bg-blue-400 hover:bg-blue-600 text-white flex items-center justify-center rounded-l-full transition-colors z-20 group"
      >
        <ChevronRight className="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6 transform group-hover:translate-x-1.5 transition-transform duration-300" />
      </button>

      {/* Scroll to top placeholder (usually handled globally, but placed here to match design) */}
      {/* <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-20">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
        >
          <ArrowUp className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div> */}
    </div>
    <About />
    <Stats />
    <WhyChooseUs />
    <Services />
    <Calculator />
    <Callback />
    <Projects />
    <Team />
    <Testimonial />
    <Footer />
    </main>
  );
};

export default Home;
