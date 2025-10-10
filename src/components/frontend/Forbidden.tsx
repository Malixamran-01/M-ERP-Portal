 'use client';
import Link from 'next/link';
import React from 'react'
import { Home } from 'lucide-react';
    // 403 Forbidden Page
export function ForbiddenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated 403 */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text animate-pulse">
            403
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-teal-900 mb-4">
            Access Forbidden
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            You don't have permission to access this resource. 
            If you believe this is a mistake, please contact your administrator.
          </p>
        </div>

        {/* Illustration */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-30 h-30 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center">
              <svg className="w-15 h-15 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
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
          <Link href="/login">
            <button className="flex items-center gap-2 px-6 py-3 bg-white text-teal-700 rounded-xl font-semibold shadow-md border border-emerald-200 hover:bg-emerald-50 transition-all">
              Sign In
            </button>
          </Link>
        </div>

        {/* Help Text */}
        <div className="mt-12 pt-8 border-t border-emerald-200">
          <p className="text-sm text-gray-600">
            Need help? Contact your institution administrator or our{' '}
            <Link href="/support" className="text-teal-600 hover:underline">
              support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
