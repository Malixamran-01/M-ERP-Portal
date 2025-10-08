"use client";

import React from 'react';
import { Quote } from 'lucide-react';
import SmallBadge from './small-badge';

export default function TestimonialsSection() {
  const testimonials = [
    // Left Column
    [
      {
        text: "Madrasa ERP has completely transformed the way we manage our institution. The RBAC system saves us hours on administrative tasks, and the automated result calculation is a game-changer for our teachers!",
        name: "Dr. Ahmed Hassan",
        role: "Principal, Al-Azhar Academy",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        platform: "linkedin"
      },
      {
        text: "As an administrator, I need reliable software that can handle complex workflows. Madrasa ERP not only speeds up our processes but also delivers professional results with minimal effort. It's like having a digital assistant!",
        name: "Fatima Abdullah",
        role: "Administrator, Darul Uloom",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        platform: "twitter"
      },
      {
        text: "The custom fields feature is brilliant! We can adapt the system to our specific needs without any coding. The support team is also incredibly responsive and helpful.",
        name: "Zainab Ali",
        role: "Operations Manager, Madrasa Al-Noor",
        image: "https://randomuser.me/api/portraits/women/28.jpg",
        platform: "twitter"
      },
    ],
    // Middle Column
    [
      {
        text: "I was amazed by how intuitive Madrasa ERP is. I've used several management systems, but none come close to the seamless experience and powerful features this platform offers.",
        name: "Muhammad Tariq",
        role: "Academic Director, Jamia Islamia",
        image: "https://randomuser.me/api/portraits/men/52.jpg",
        platform: "twitter"
      },
      {
        text: "With Madrasa ERP, I no longer have to worry about tedious attendance tracking and fee management. The system does everything from enrollment to result generation, leaving me more time to focus on student development.",
        name: "Aisha Rahman",
        role: "Department Head, Islamic Institute",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        platform: "youtube"
      },
      {
        text: "Madrasa ERP made it easy for our entire staff to collaborate on academic planning. The integration with notifications and the ability to generate reports from custom criteria have taken our efficiency to the next level.",
        name: "Ibrahim Khan",
        role: "IT Manager, Al-Huda School",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
        platform: "instagram"
      },
    ],
    // Right Column
    [
      {
        text: "Madrasa ERP has taken our institution management to a whole new level. The automated grading system and attendance tracking are incredible, making our processes more efficient and accurate than ever before.",
        name: "Hassan Mahmood",
        role: "Vice Principal, Dar-e-Arqam",
        image: "https://randomuser.me/api/portraits/men/67.jpg",
        platform: "tiktok"
      },
      {
        text: "This is the perfect tool for educational institutions like ours. We can manage thousands of students easily, and the analytics dashboard provides insights that help us make better decisions for our community.",
        name: "Mariam Siddiqui",
        role: "Dean of Students, Jamia Ashrafia",
        image: "https://randomuser.me/api/portraits/women/72.jpg",
        platform: "twitter"
      },
      {
        text: "The multi-institution support is fantastic! We manage three branches from one dashboard, and the role-based permissions ensure everyone has the right access. Highly recommended!",
        name: "Yusuf Ahmed",
        role: "Regional Director, Al-Falah Network",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        platform: "linkedin"
      }
    ]
  ];

  const platformIcons: Record<'twitter' | 'linkedin' | 'youtube' | 'instagram' | 'tiktok', string> = {
    twitter: "𝕏",
    linkedin: "in",
    youtube: "▶",
    instagram: "📷",
    tiktok: "♪"
  };

  return (
    <section className="w-full py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          {/* <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-sm font-medium text-gray-700">
            💬 Testimonials
          </span> */}
            <SmallBadge title="Testimonials" />
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Words from our users
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Some words from institutions who love using Madrasa ERP.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-6">
              {column.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-teal-500 mb-3" />
                    <p className="text-gray-700 leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-gray-400 text-sm font-medium">
                      {platformIcons[testimonial.platform as keyof typeof platformIcons]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Join hundreds of satisfied institutions using Madrasa ERP
          </p>
          <button className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-semibold shadow-lg transition-colors">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}