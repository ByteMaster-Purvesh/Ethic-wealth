import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const scrollContainerRef = useRef(null);

  const projects = [
    { id: 1, title: 'Business Loans', image: '/service/service-4.jpg' },
    { id: 2, title: 'Financial Planning', image: '/service/service-2.jpg' },
    { id: 3, title: 'Cash Investment', image: '/service/service-3.jpg' },
    { id: 4, title: 'Investment Strategies', image: '/service/service-1.jpg' },
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.offsetWidth / 1; // Scroll by roughly one container width or you could use a fixed value. Let's do a fixed item width roughly
      // We'll calculate based on the first child's width
      const firstChild = current.firstElementChild;
      const itemWidth = firstChild ? firstChild.offsetWidth + 32 : 300; // 32px is the gap
      
      if (direction === 'left') {
        current.scrollBy({ left: -itemWidth, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: itemWidth, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-10 lg:py-16 bg-white font-sans" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block border border-blue-200 bg-white text-blue-500 rounded-full px-5 py-1.5 text-sm font-medium mb-4 shadow-sm">
            Our Projects
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b1b3d] leading-tight">
            We Have Completed<br />Latest Projects
          </h2>
        </div>

        {/* Projects Slider */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-8 mb-16 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project) => (
            <div key={project.id} className="min-w-[100%] md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.4rem)] snap-start relative group flex flex-col items-center">
              {/* Image */}
              <div className="w-full aspect-[4/5] rounded-xl overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Title Card (Overlapping) */}
              <div className="absolute -bottom-6 w-[85%] bg-white rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.08)] py-4 text-center border border-gray-50 z-10 transition-colors group-hover:border-blue-200 cursor-pointer">
                <h3 className="text-lg font-bold text-[#0b1b3d]">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Arrows */}
        <div className="flex justify-center items-center gap-4 mt-16">
          <button 
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Projects;
