import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({ title, breadcrumbs }) => {
  return (
    <div className="relative w-full overflow-hidden bg-[#eef1ff]">
      {/* Invisible dummy element to force a minimum height */}
      <div className="w-full min-h-[300px] md:min-h-[400px]"></div>

      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="w-full h-full bg-cover bg-[80%_15%] md:bg-[100%_15%] lg:bg-[center_15%] bg-no-repeat"
          style={{ backgroundImage: 'url(/header.jpg)' }}
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center pt-20 md:pt-28">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-jost text-[#0b1b3d] mb-4">
              {title}
            </h1>
            
            <div className="flex items-center text-sm md:text-base font-medium text-gray-500">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  {crumb.link ? (
                    <Link to={crumb.link} className="text-blue-500 hover:text-blue-700 transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={index === breadcrumbs.length - 1 ? 'text-gray-500' : 'text-blue-500 hover:text-blue-700'}>{crumb.label}</span>
                  )}
                  {index < breadcrumbs.length - 1 && (
                    <span className="mx-2 text-gray-400">/</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
