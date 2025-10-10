"use client";

import React from 'react';
import { Home, ArrowLeft, Search, RefreshCw } from 'lucide-react';
import Link from 'next/link';

// 404 Error Page
export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated 404 */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text animate-pulse">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-teal-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Oops! The page you're looking for seems to have wandered off. 
            Don't worry, even the best institutions lose track sometimes.
          </p>
        </div>

        {/* Illustration */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-30 h-30 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center">
              <Search className="w-15 h-15 text-teal-400" />
            </div>
            <div className="absolute top-0 right-0 w-10 h-10 bg-emerald-500 rounded-full animate-bounce opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 bg-teal-500 rounded-full animate-bounce opacity-20" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl font-semibold shadow-lg transition-all">
              <Home className="w-5 h-5" />
              Go to Homepage
            </button>
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 bg-white text-teal-700 rounded-xl font-semibold shadow-md border border-emerald-200 hover:bg-emerald-50 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-emerald-200">
          <p className="text-sm text-gray-600 mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/features" className="text-sm text-teal-600 hover:text-teal-700 hover:underline">
              Features
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/pricing" className="text-sm text-teal-600 hover:text-teal-700 hover:underline">
              Pricing
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/contact" className="text-sm text-teal-600 hover:text-teal-700 hover:underline">
              Contact Us
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/support" className="text-sm text-teal-600 hover:text-teal-700 hover:underline">
              Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}