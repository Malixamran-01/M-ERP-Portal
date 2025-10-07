import { DashboardPreview } from '@/components/frontend/dashboard-preview'
import TopFeaturesSection from '@/components/frontend/features-grid'
import HeroSection from '@/components/frontend/hero-section'
import LogoCloud from '@/components/frontend/logo-cloud'
import Logo from '@/components/logo'
import React from 'react'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <LogoCloud/>
      <DashboardPreview/>
      <TopFeaturesSection/>
    </div> 
  )
}
