import SiteHeader from '@/components/navbar'
import SiteFooter from '@/components/frontend/site-footer'
import React from 'react'

export default function frontLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
        <SiteHeader />
        {children}
        <SiteFooter />
        </div>
  )
}
