"use client";

import React from "react";
import Image from "next/image";

export default function TopFeaturesSection() {
  return (
    <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-emerald-200 shadow-sm text-sm font-medium text-teal-800">
            ✨ Top Features
          </span>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-teal-900 mb-4">
            Transform Your Institution Management
          </h2>
          <p className="text-lg text-teal-700 max-w-3xl mx-auto">
            Automate complex administrative tasks with AI tools for education,
            analytics, and compliance.
          </p>
        </div>

        {/* Masonry Layout */}
        <div
          className="
            columns-1 sm:columns-2 lg:columns-3 
            gap-6 space-y-6
          "
        >
          {/* Large Feature Card */}
          <div className="break-inside-avoid bg-white p-6 rounded-2xl shadow-lg border border-emerald-100">
            <Image
              src="/images/TeacherSchedule.png"
              alt="Dashboard"
              width={800}
              height={400}
              className="rounded-xl w-full h-auto object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-teal-900 mb-2">
              Teacher Schedule
            </h3>
            <p className="text-gray-600">
              Schedule Classes, Exams and Events, Track student progress, and
              automate reporting.
            </p>
          </div>

          {/* RBAC System */}
          <div className="break-inside-avoid bg-white p-6 rounded-2xl shadow-lg border border-emerald-100">
            <h3 className="text-xl font-semibold text-teal-900 mb-2">
              Dynamic RBAC System
            </h3>
            <p className="text-gray-600 mb-4">
              Define custom roles and permissions for your institution hierarchy.
            </p>
            <Image
              src="/images/AdminConsole.png"
              alt="RBAC System"
              width={800}
              height={400}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>

          {/* Tall Feature */}
          <div className="break-inside-avoid bg-white p-6 rounded-2xl shadow-lg border border-emerald-100">
            <h3 className="text-xl font-semibold text-teal-900 mb-2">
              Detailed Sidepanel
            </h3>
            <p className="text-gray-600 mb-4">
              Manage attendance, grades, and performance analytics seamlessly.
            </p>
            <Image
              src="/images/SidePanel.png"
              alt="Schedule"
              width={800}
              height={1000}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>

          {/* Wide Feature */}
          <div className="break-inside-avoid bg-white p-6 rounded-2xl shadow-lg border border-emerald-100">
            <h3 className="text-xl font-semibold text-teal-900 mb-2">
              Automated Results System
            </h3>
            <p className="text-gray-600 mb-4">
              Track grades, attendance, and performance trends seamlessly.
            </p>
            <Image
              src="/images/Results.png"
              alt="Results"
              width={800}
              height={600}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>

          {/* Small Feature */}
          <div className="break-inside-avoid bg-white p-6 rounded-2xl shadow-lg border border-emerald-100">
            <h3 className="text-xl font-semibold text-teal-900 mb-2">
              AI Notifications
            </h3>
            <p className="text-gray-600 mb-4">
              Smart reminders and updates for students and staff.
            </p>
            <Image
              src="/images/Results.png"
              alt="Finance"
              width={800}
              height={300}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
