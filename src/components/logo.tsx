import { GraduationCap } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href={"/"} className="flex items-center space-x-2">
              <div className="bg-teal-600 rounded-full p-1">
                <span className="text-white font-bold text-xl"><GraduationCap/></span>
              </div>
              <span className="font-bold text-xl text-emerald-600">M- <span className="text-teal-700">ERP</span> </span>
            </Link>
  )
}
