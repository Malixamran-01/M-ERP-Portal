"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Shield, GraduationCap, Calculator, Building2, Users, BarChart3 } from 'lucide-react';
import Image from 'next/image';
import SmallBadge from './small-badge';

export default function TopFeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          {/* <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-emerald-200 shadow-sm text-sm font-medium text-teal-800">
            ✨ Top Features
          </span> */}
          <SmallBadge title="Top Features" />
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-teal-900 mb-4">
            Transform Your Institution Management
          </h2>
          <p className="text-lg text-teal-700 max-w-3xl mx-auto">
            Madrasa ERP automates complex administrative tasks, allowing you to focus on education
            while it handles operations, analytics, and compliance with precision.
          </p>
        </div>

        {/* Masonry Grid with Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {/* Left Column - Slide from Left */}
          <div className="space-y-6">
            {/* Large Feature Card - Teacher Schedule */}
            <div className={`transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-6 hover:shadow-xl transition-shadow">
                <Image
                  src="/images/TeacherSchedule.png"
                  alt="Teacher Schedule Dashboard"
                  width={800}
                  height={400}
                  className="rounded-xl w-full h-auto object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-teal-900 mb-2">
                  Teacher Schedule Management
                </h3>
                <p className="text-gray-600">
                  Schedule classes, exams and events. Track student progress and automate reporting with ease.
                </p>
              </div>
            </div>
            {/* AI Notifications */}
            <div className={`transform transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-emerald-100 rounded-lg">
                    <BarChart3 className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-teal-900 mb-2">
                      Smart Notifications
                    </h3>
                    <p className="text-gray-600 mb-4">
                      AI-powered reminders and updates for students, teachers, and staff members.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-6 border border-emerald-100">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Fee payment reminder sent</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Low attendance alert triggered</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Exam schedule published</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RBAC System */}
            <div className={`transform transition-all duration-700 delay-150 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-emerald-100 rounded-lg">
                    <Shield className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-teal-900 mb-2">
                      Dynamic RBAC System
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Define custom roles and permissions for your complete institutional hierarchy.
                    </p>
                  </div>
                </div>
                <Image
                  src="/images/AdminConsole.png"
                  alt="RBAC Admin Console"
                  width={800}
                  height={400}
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="space-y-6">
            {/* Tall Feature - Detailed Sidepanel */}
            <div className={`transform transition-all duration-700 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-emerald-100 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-teal-900 mb-2">
                      Detailed Student Panel
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Comprehensive student information with attendance, grades, and performance analytics.
                    </p>
                  </div>
                </div>
                <Image
                  src="/images/SidePanel.png"
                  alt="Student Detail Panel"
                  width={800}
                  height={1000}
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
            </div>

            
          </div>

          {/* Right Column - Slide from Right */}
          <div className="space-y-6">
            {/* Results System */}
            <div className={`transform transition-all duration-700 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-emerald-100 rounded-lg">
                    <Calculator className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-teal-900 mb-2">
                      Automated Results System
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Calculate GPA, SGPA, CGPA automatically with customizable grading and ranking criteria.
                    </p>
                  </div>
                </div>
                <Image
                  src="/images/Results.png"
                  alt="Results Dashboard"
                  width={800}
                  height={600}
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Multi-Institution */}
            <div className={`transform transition-all duration-700 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-emerald-100 rounded-lg">
                    <Building2 className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-teal-900 mb-2">
                      Multi-Institution Support
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Manage multiple institutions from one centralized dashboard with hierarchical access control.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-4 border border-emerald-100">
                    <Users className="w-5 h-5 text-teal-600 mb-2" />
                    <div className="text-2xl font-bold text-teal-700">500+</div>
                    <div className="text-xs text-gray-600">Institutions</div>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-4 border border-emerald-100">
                    <Building2 className="w-5 h-5 text-teal-600 mb-2" />
                    <div className="text-2xl font-bold text-teal-700">50K+</div>
                    <div className="text-xs text-gray-600">Students</div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Notifications */}
            <div className={`transform transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-emerald-100 rounded-lg">
                    <BarChart3 className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-teal-900 mb-2">
                      Isse Zaada G dede kya?
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Bohot features dedia hu, free me wo bhi. Abey register kar le.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-6 border border-emerald-100">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Karle register Gareeb</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Bachho ka paisa maar k krde</span>
                    </div>
                    {/* <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Exa</span>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}