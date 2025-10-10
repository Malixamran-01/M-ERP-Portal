'use client';

import React from 'react'
import { Home, RefreshCw } from 'lucide-react';
import Link from 'next/link';

// 500 Error Page
export default function ServerErrorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated 500 */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text animate-pulse">
            500
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-teal-900 mb-4">
            Internal Server Error
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Something went wrong on our end. Our team has been notified and is working to fix the issue.
            Please try again in a few moments.
          </p>
        </div>

        {/* Illustration */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-30 h-30 bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center">
              <RefreshCw className="w-15 h-15 text-red-400 animate-spin" style={{ animationDuration: '3s' }} />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl font-semibold shadow-lg transition-all"
          >
            <RefreshCw className="w-5 h-5" />
            Try Again
          </button>
          <Link href="/">
            <button className="flex items-center gap-2 px-6 py-3 bg-white text-teal-700 rounded-xl font-semibold shadow-md border border-emerald-200 hover:bg-emerald-50 transition-all">
              <Home className="w-5 h-5" />
              Go to Homepage
            </button>
          </Link>
        </div>

        {/* Support Info */}
        <div className="mt-12 pt-8 border-t border-emerald-200">
          <p className="text-sm text-gray-600 mb-2">Need immediate assistance?</p>
          <p className="text-sm text-teal-600 font-medium">
            Contact our support team at{' '}
            <a href="mailto:support@madrasaerp.com" className="hover:underline">
              support@madrasaerp.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

