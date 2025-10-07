"use client";

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import PrismaticBurst from './prismatic-bg';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Prismatic Background */}
      <div className="absolute inset-0 w-full h-full">
        <PrismaticBurst
          animationType="rotate3d"
          intensity={2}
          speed={0.5}
          distort={1.0}
          paused={false}
          offset={{ x: 0, y: 0 }}
          hoverDampness={0.25}
          rayCount={24}
          mixBlendMode="lighten"
          colors={['#10b981', '#0d9488', '#059669']}
        />
      </div>

      {/* Dark Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-black/60 backdrop-blur-xl rounded-full border border-emerald-500/30 shadow-lg shadow-emerald-500/20">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-100">
              Welcome to Madrasa ERP
            </span>
          </div> */}

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your
            <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Educational Institution
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Complete ERP solution with dynamic RBAC, comprehensive academic management, 
            and powerful automation—all within an intuitive interface.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-500/70 transform hover:scale-105 transition-all duration-200">
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group flex items-center gap-2 px-8 py-4 bg-black/60 backdrop-blur-xl text-emerald-100 rounded-xl font-semibold shadow-lg border border-emerald-500/30 hover:border-emerald-400/50 hover:bg-black/80 transform hover:scale-105 transition-all duration-200">
              Explore Features
              <ArrowRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats or Trust Indicators */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center backdrop-blur-sm bg-black/30 rounded-xl p-4 border border-emerald-500/20">
              <div className="text-3xl font-bold text-emerald-400 mb-1">500+</div>
              <div className="text-sm text-gray-400">Institutions</div>
            </div>
            <div className="text-center backdrop-blur-sm bg-black/30 rounded-xl p-4 border border-emerald-500/20">
              <div className="text-3xl font-bold text-emerald-400 mb-1">50K+</div>
              <div className="text-sm text-gray-400">Active Users</div>
            </div>
            <div className="text-center backdrop-blur-sm bg-black/30 rounded-xl p-4 border border-emerald-500/20">
              <div className="text-3xl font-bold text-emerald-400 mb-1">99.9%</div>
              <div className="text-sm text-gray-400">Uptime</div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Animation */}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}