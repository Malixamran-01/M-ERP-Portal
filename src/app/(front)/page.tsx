import { DashboardPreview } from '@/components/frontend/dashboard-preview'
import TopFeaturesSection from '@/components/frontend/features-grid'
import HeroSection from '@/components/frontend/hero-section'
import LogoCloud from '@/components/frontend/logo-cloud'
import PricingSection from '@/components/frontend/pricing'
import TestimonialsSection from '@/components/frontend/testimonials'
import Logo from '@/components/logo'
import React from 'react'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <LogoCloud/>
      <DashboardPreview/>
      <TopFeaturesSection/>
      <TestimonialsSection/>
      <PricingSection/>
    </div> 
  )
}
