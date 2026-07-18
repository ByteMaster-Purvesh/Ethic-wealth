import React, { useState } from 'react';
import { AlignLeft, Check } from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, title: 'Financial Planning', icon: <AlignLeft size={22} strokeWidth={3} /> },
    { id: 1, title: 'Cash Investment', icon: <AlignLeft size={22} strokeWidth={3} /> },
    { id: 2, title: 'Financial Consultancy', icon: <AlignLeft size={22} strokeWidth={3} /> },
    { id: 3, title: 'Business Loans', icon: <AlignLeft size={22} strokeWidth={3} /> },
  ];

  const content = [
    {
      title: '25 Years Of Experience In Financial Support',
      desc: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet.',
      image: '/service/service-1.jpg',
      points: ['Secured Loans', 'Credit Facilities', 'Cash Advanced']
    },
    {
      title: 'Expert Cash Investment Strategies For Growth',
      desc: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet.',
      image: '/service/service-2.jpg',
      points: ['High Return Rates', 'Risk Management', 'Portfolio Diversification']
    },
    {
      title: 'Professional Financial Consultancy Services',
      desc: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet.',
      image: '/service/service-3.jpg',
      points: ['Tax Optimization', 'Strategic Planning', 'Market Analysis']
    },
    {
      title: 'Reliable Business Loans For Scaling Fast',
      desc: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet.',
      image: '/service/service-4.jpg',
      points: ['Low Interest Rates', 'Flexible Repayment', 'Quick Approval']
    }
  ];

  return (
      <section className="py-20 lg:py-28 bg-white overflow-hidden font-sans" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block border border-blue-200 bg-white text-blue-500 rounded-full px-5 py-1.5 text-sm font-medium mb-4 shadow-sm">
            Our Services
          </div>
          <h2 className="text-4xl md:text-[3.5rem] font-extrabold text-[#0b1b3d] leading-tight">
            Awesome Financial<br />Services For Business
          </h2>
        </div>

        {/* Content Section - 3 Equal Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Panel 1: Left Tabs */}
          <div className="flex flex-col justify-between space-y-3">
            {tabs.map((tab, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full flex items-center gap-4 px-12 py-16 lg:py-[26px] rounded-lg text-left font-extrabold transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.03)] border cursor-pointer box-border ${
                    isActive 
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
                      : 'bg-white text-[#0b1b3d] border-blue-50/50 hover:border-blue-200 hover:shadow-md'
                  }`}
                >
                  <span className={`${isActive ? 'text-white' : 'text-blue-600'}`}>
                    {tab.icon}
                  </span>
                  <span className="text-base md:text-lg tracking-wide">{tab.title}</span>
                </button>
              );
            })}
          </div>

          {/* Panel 2: Center Image (Square) */}
          <div className="w-full aspect-square rounded-xl overflow-hidden relative group">
            <img 
              src={content[activeTab].image} 
              alt={tabs[activeTab].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-xl"
            />
          </div>

          {/* Panel 3: Right Text Content */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-[28px] lg:text-3xl font-extrabold text-[#0b1b3d] mb-4 leading-[1.3]">
              {content[activeTab].title}
            </h3>
            <p className="text-gray-600 font-medium text-sm md:text-base leading-[1.6] mb-6">
              {content[activeTab].desc}
            </p>
            
            <ul className="space-y-3 mb-6">
              {content[activeTab].points.map((point, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 text-blue-600">
                    <Check size={20} strokeWidth={4} />
                  </div>
                  <span className="text-[#0b1b3d] text-base font-bold">{point}</span>
                </li>
              ))}
            </ul>

            <div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-base font-bold px-8 py-3.5 rounded-md transition-colors shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] cursor-pointer">
                Read More
              </button>
            </div>
          </div>
          
        </div>
        </div>
      </section>
  );
};

export default Services;
