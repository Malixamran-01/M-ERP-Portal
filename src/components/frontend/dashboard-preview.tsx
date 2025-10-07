import React from "react"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import SmallBadge from "./small-badge";

export function DashboardPreview() {
  return (
    <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-24 sm:py-32">
      <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-emerald-200 shadow-sm text-sm font-medium text-teal-800">
            ✨ Dashboard Preview
          </span>
        </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border border-emerald-100/50 overflow-hidden">
          <div className="flex flex-col items-center justify-center p-8">
            <img 
              src="/images/StudentDashboard.png" 
              alt="Dashboard Preview" 
              className="mb-4 rounded-lg shadow-lg border border-teal-100" 
              width={1309} 
              height={948} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
