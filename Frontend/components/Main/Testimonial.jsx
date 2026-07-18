import React, { useRef, useState } from 'react';
import { Quote } from 'lucide-react';

const Testimonial = () => {
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      id: 1,
      name: 'Client Name',
      profession: 'Profession',
      image: '/testimonial/testimonial-1.jpg',
      quote: 'Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.'
    },
    {
      id: 2,
      name: 'Client Name',
      profession: 'Profession',
      image: '/testimonial/testimonial-2.jpg',
      quote: 'Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.'
    },
    {
      id: 3,
      name: 'Client Name',
      profession: 'Profession',
      image: '/testimonial/testimonial-3.jpg',
      quote: 'Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.'
    },
    {
      id: 4,
      name: 'Client Name',
      profession: 'Profession',
      image: '/testimonial/testimonial-4.jpg',
      quote: 'Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.'
    }
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollCenter = container.scrollLeft + container.offsetWidth / 2;
      
      let minDiff = Infinity;
      let closestIndex = -1;
      
      const items = container.querySelectorAll('.testimonial-item');
      Array.from(items).forEach((child, index) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const diff = Math.abs(childCenter - scrollCenter);
        if (diff < minDiff) {
          minDiff = diff;
          closestIndex = index;
        }
      });
      
      setActiveIndex(closestIndex);
    }
  };

  const scrollTo = (index) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const items = container.querySelectorAll('.testimonial-item');
      const targetChild = items[index];
      
      if (targetChild) {
        const targetScroll = targetChild.offsetLeft + targetChild.offsetWidth / 2 - container.offsetWidth / 2;
        container.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
        });
        setActiveIndex(index);
      }
    }
  };

  return (
    <section className="py-10 lg:py-16 bg-white font-sans" id="testimonial">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block border border-blue-200 bg-white text-blue-500 rounded-full px-5 py-1.5 text-sm font-medium mb-4 shadow-sm">
            Testimonial
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b1b3d] leading-tight">
            What Our Clients Say!
          </h2>
        </div>

        {/* Testimonials Slider */}
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="relative flex overflow-x-auto snap-x snap-mandatory gap-6 lg:gap-10 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {/* Spacer before to allow first item to center */}
          <div className="shrink-0 snap-center w-[0%] md:w-[calc(50%-25%-0.375rem)] lg:w-[calc(50%-16.666%-0.83rem)]"></div>
          
          {testimonials.map((test) => (
            <div key={test.id} className="testimonial-item min-w-[100%] md:min-w-[calc(50%-0.75rem)] lg:min-w-[calc(33.333%-1.66rem)] snap-center flex flex-col items-center">
              {/* Speech Bubble */}
              <div className="bg-white border border-blue-200 rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.03)] p-8 text-center relative mb-12">
                <div className="flex justify-center mb-4 text-blue-600">
                  <Quote size={40} fill="currentColor" className="opacity-80" />
                </div>
                <p className="text-gray-500 text-sm leading-[1.8]">
                  {test.quote}
                </p>
                {/* Little triangle pointing down */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-white border-b border-r border-blue-200 rotate-45"></div>
              </div>

              {/* Client Info */}
              <div className="text-center">
                <img 
                  src={test.image} 
                  alt={test.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md mx-auto mb-4"
                />
                <h4 className="text-lg font-bold text-[#0b1b3d]">{test.name}</h4>
                <p className="text-sm font-medium text-gray-500">{test.profession}</p>
              </div>
            </div>
          ))}

          {/* Spacer after to allow last item to center */}
          <div className="shrink-0 snap-center w-[0%] md:w-[calc(50%-25%-0.375rem)] lg:w-[calc(50%-16.666%-0.83rem)]"></div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`rounded-full flex items-center justify-center p-[6px] transition-all cursor-pointer ${
                activeIndex === index 
                  ? 'w-8 h-8 border-1 border-blue-600' 
                  : 'w-8 h-8 border-1 border-blue-100 hover:border-blue-300'
              }`}
            >
              <div className={`w-full h-full rounded-full transition-colors ${
                activeIndex === index ? 'bg-blue-600' : 'bg-blue-100'
              }`}></div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonial;
