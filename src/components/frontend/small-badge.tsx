import React from 'react'
import { Sparkles } from 'lucide-react'

export default function SmallBadge({title}: {title: string}) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200 shadow-sm">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-gray-700">
              {title}
            </span>
          </div>
  )
}
