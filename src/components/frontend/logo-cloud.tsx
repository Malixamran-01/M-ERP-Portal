"use client";

import React from 'react';

export default function LogoCloud() {
  const schools = [
    { name: 'Harvard University', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/1024px-Harvard_University_coat_of_arms.svg.png' },
    { name: 'Stanford University', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Seal_of_Leland_Stanford_Junior_University.svg/1024px-Seal_of_Leland_Stanford_Junior_University.svg.png' },
    { name: 'MIT', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg' },
    { name: 'University of Oxford', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Arms_of_University_of_Oxford.svg/800px-Arms_of_University_of_Oxford.svg.png' },
    { name: 'Cambridge University', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Coat_of_Arms_of_the_University_of_Cambridge.svg/330px-Coat_of_Arms_of_the_University_of_Cambridge.svg.png' },
    { name: 'Yale University', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Yale_University_Shield_1.svg/800px-Yale_University_Shield_1.svg.png' },
    { name: 'Princeton University', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Princeton_seal.svg/800px-Princeton_seal.svg.png' },
    { name: 'Columbia University', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Columbia_coat_of_arms_no_crest.svg/1280px-Columbia_coat_of_arms_no_crest.svg.png' },
    { name: 'University of Chicago', logo: 'https://upload.wikimedia.org/wikipedia/en/7/79/University_of_Chicago_shield.svg' },
    { name: 'California Institute of Technology', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Seal_of_the_California_Institute_of_Technology.svg/1024px-Seal_of_the_California_Institute_of_Technology.svg.png' }
  ];

  // Duplicate the schools array for seamless loop
  const duplicatedSchools = [...schools, ...schools];

  return (
    <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-24 sm:py-32 overflow-hidden h-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-teal-900 mb-10">
          Trusted by the Leading Institutions Worldwide
        </h2>
        
        <div className="relative">
          {/* Gradient Fade on Left */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-emerald-50 to-transparent z-10"></div>
          
          {/* Gradient Fade on Right */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-emerald-50 to-transparent z-10"></div>
          
          {/* Scrolling Container */}
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll">
              {duplicatedSchools.map((school, index) => (
                <div
                  key={`${school.name}-${index}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center group"
                >
                  <img
                    className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 group-hover:scale-110"
                    src={school.logo}
                    alt={school.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}