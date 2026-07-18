import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { X, Users, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import PageHeader from '../Header/PageHeader';
import Stats from './Stats';
import Team from './Team';
import Footer from '../Footer/Footer.jsx';

const About = () => {
  const [activeTab, setActiveTab] = useState('Story');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const tabContent = {
    Story: (
      <div className="text-gray-600 leading-relaxed text-sm">
        <p className="mb-4">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu
          diam amet diam et eos labore.
        </p>
        <p>
          Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.
          Clita erat ipsum et lorem et sit
        </p>
      </div>
    ),
    Mission: (
      <div className="text-gray-600 leading-relaxed text-sm">
        <p className="mb-4">
          Our mission is to provide the best financial support for our clients and help them
          grow their businesses sustainably.
        </p>
        <p>
          We strive for excellence, transparency, and building long-lasting relationships based on trust.
        </p>
      </div>
    ),
    Vision: (
      <div className="text-gray-600 leading-relaxed text-sm">
        <p className="mb-4">
          To be the leading financial service provider recognized globally for our innovative solutions
          and client-centric approach.
        </p>
        <p>
          We envision a future where financial freedom and business growth are accessible to everyone.
        </p>
      </div>
    )
  };

  const aboutSection = (
      <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-10 items-stretch box-border">
          {/* Left Column - Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[450px] lg:h-[620px] lg:col-span-6 box-border"
          >
            <img 
              src="/about.jpg" 
              alt="About Us - Team" 
              className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg box-border"
            />
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-between lg:col-span-6 pt-6 box-border h-full"
          >
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full border border-blue-200 bg-white text-blue-600 text-sm font-medium box-border mt-20">
                About Us
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-jost text-[#0b1b3d] leading-tight box-border">
                We Help Our Clients To Grow Their Business
              </h2>
              
              <p className="text-gray-600 leading-relaxed box-border">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. 
                Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
            </div>

            {/* Tabs Section */}
            <div className="border border-blue-200 bg-white shadow-sm rounded-lg p-6 box-border mt-8">
              {/* Tab Headers */}
              <div className="flex border-b border-blue-200 mb-6 box-border">
                {['Story', 'Mission', 'Vision'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 font-medium text-sm transition-colors cursor-pointer box-border border-b-2 ${
                      activeTab === tab 
                        ? 'text-blue-800 border-blue-800' 
                        : 'text-gray-400 hover:text-blue-800 border-transparent'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-h-[130px] box-border">
                {tabContent[activeTab]}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 box-border">
          
          {/* Feature 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-start space-x-4 p-6 border border-blue-100 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
              <X size={20} strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="font-bold text-[#0b1b3d] text-lg mb-1">No Hidden Cost</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Clita erat ipsum lorem sit sed stet duo justo
              </p>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-start space-x-4 p-6 border border-blue-100 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
              <Users size={20} strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="font-bold text-[#0b1b3d] text-lg mb-1">Dedicated Team</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Clita erat ipsum lorem sit sed stet duo justo
              </p>
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-start space-x-4 p-6 border border-blue-100 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
              <Phone size={20} strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="font-bold text-[#0b1b3d] text-lg mb-1">24/7 Available</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Clita erat ipsum lorem sit sed stet duo justo
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );

  if (isHomePage) {
    return aboutSection;
  }

  return (
    <main>
      <PageHeader 
        title="About" 
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Pages' },
          { label: 'About' }
        ]} 
      />
      {aboutSection}
      <Stats />
      <Team />
      <Footer />
    </main>
  );
};

export default About;
