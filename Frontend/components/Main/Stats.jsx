import React from 'react';

// Exact SVG paths for the requested icons
const IconUsers = ({ size = 56, color = "white" }) => (
  <svg width={size} height={size} viewBox="0 0 640 512" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h66.1c6.2-47.4 34.8-87.3 75.1-109.4z"/>
  </svg>
);

const IconCheck = ({ size = 56, color = "white" }) => (
  <svg width={size} height={size} viewBox="0 0 448 512" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
  </svg>
);

const IconUserCog = ({ size = 56, color = "white" }) => (
  <svg width={size} height={size} viewBox="0 0 640 512" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M610.5 341.3c2.6-14.1 2.6-28.5 0-42.6l25.8-14.9c3-1.7 4.3-5.2 3.3-8.5-6.7-21.6-18.2-41.2-33.2-57.4-2.3-2.5-6-3.1-9-1.4l-25.8 14.9c-10.9-9.3-23.4-16.5-36.9-21.3v-29.8c0-3.4-2.4-6.4-5.7-7.1-22.3-5-45-4.8-66.2 0-3.3.7-5.7 3.7-5.7 7.1v29.8c-13.5 4.8-26 12-36.9 21.3l-25.8-14.9c-2.9-1.7-6.7-1.1-9 1.4-15 16.2-26.5 35.8-33.2 57.4-1 3.3.4 6.8 3.3 8.5l25.8 14.9c-2.6 14.1-2.6 28.5 0 42.6l-25.8 14.9c-3 1.7-4.3 5.2-3.3 8.5 6.7 21.6 18.2 41.2 33.2 57.4 2.3 2.5 6 3.1 9 1.4l25.8-14.9c10.9 9.3 23.4 16.5 36.9 21.3v29.8c0 3.4 2.4 6.4 5.7 7.1 22.3 5 45 4.8 66.2 0 3.3-.7 5.7-3.7 5.7-7.1v-29.8c13.5-4.8 26-12 36.9-21.3l25.8 14.9c2.9 1.7 6.7 1.1 9-1.4 15-16.2 26.5-35.8 33.2-57.4 1-3.3-.4-6.8-3.3-8.5l-25.8-14.9zM496 368c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm-142.1-41c-2.7-14.1-2.7-28.5 0-42.6-8.6 4-17.7 7.1-27.1 9.4V320c0 28.8-12.7 54.4-32.8 72 23.4 5.9 45.4 15.6 65.5 28.5v-27.4c10-5.8 19.3-12.5 28.2-19.9-10.7-21.2-19.7-44-23.8-66.2zM288 160c44.2 0 80-35.8 80-80S332.2 0 288 0s-80 35.8-80 80 35.8 80 80 80zm-173.8 20.8c-20.8-11.7-43.9-19-68.5-19h-8.3C17.6 161.8 0 179.4 0 201.1V224c0 26.5 21.5 48 48 48h14.7c6.2-42.3 33.1-78.3 71.5-98.2zm232.1-12c-23-11.3-48.4-18.1-75.1-18.9-63.5-2.1-122.9 29-158.4 79.5-3 4.3-6.1 8.5-9 13v69.7c0 26.5 21.5 48 48 48h228.4c-22.9-19.5-41.2-43.7-52.5-71.1-20.5-4.4-40.4-11.6-59.2-21.2-22.6-11.5-42-26.9-57.8-45.2-14.7-17-26.6-36.4-34.9-57.3-6-15.1-9.9-31-11.3-47.5zM96 128c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48z"/>
  </svg>
);

const IconAward = ({ size = 56, color = "white" }) => (
  <svg width={size} height={size} viewBox="0 0 384 512" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M288 358.3c13.9 8 28.8 17.2 41.5 29.7l10.3 10.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-10.3-10.3c-23.7-23.7-47.4-47.4-71.1-71.1-14.6 27.6-32.5 53.9-53 78.4 12.4 2.8 25.1 5.3 37.3 8.3zM151.8 353.6c-20.5-24.5-38.4-50.8-53-78.4-23.7 23.7-47.4 47.4-71.1 71.1l-10.3 10.3c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l10.3-10.3c12.7-12.5 27.6-21.7 41.5-29.7 12.2-3 24.9-5.5 37.3-8.3zM192 352c88.4 0 160-71.6 160-160S280.4 32 192 32 32 103.6 32 192s71.6 160 160 160zm0-240c44.2 0 80 35.8 80 80s-35.8 80-80 80-80-35.8-80-80 35.8-80 80-80z"/>
  </svg>
);

const Stats = () => {
  const stats = [
    { id: 1, icon: <IconUsers size={56} />, count: "1234", label: "Happy Clients" },
    { id: 2, icon: <IconCheck size={56} />, count: "1234", label: "Projects Completed" },
    { id: 3, icon: <IconUserCog size={56} />, count: "1234", label: "Dedicated Staff" },
    { id: 4, icon: <IconAward size={56} />, count: "1234", label: "Awards Achieved" },
  ];

  return (
    <section className="bg-[#4d6bfe] py-20 lg:py-28 relative overflow-hidden">
      {/* Background Image with opacity */}
      <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-12 text-center text-white">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center justify-center">
              <div className="mb-2">
                {stat.icon}
              </div>
              <h3 className="text-5xl md:text-[56px] font-extrabold font-jost tracking-tight leading-none mb-1">
                {stat.count}
              </h3>
              <p className="text-white font-normal text-sm md:text-base">
                {stat.label}
              </p>
              {/* Faint underline below text */}
              <hr className="w-10 border-t border-white/40 mt-3" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
