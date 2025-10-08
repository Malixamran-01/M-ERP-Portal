import React from 'react'
import { Sparkles } from 'lucide-react'

export default function SmallBadge({title}: {title: string}) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-emerald-200 shadow-sm text-sm font-medium text-teal-800">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-gray-700">
              {title}
            </span>
          </div>
  )
}
