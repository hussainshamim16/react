import React from 'react'
import HeroSection from '../components/HeroSection'
import BorderCard from '../components/BorderCard'
import Features from '../components/Features'
import About from '../screen/About'
import Pricing from '../components/Pricing'
import Testimonails from '../components/Testimonial'
import CTA from '../components/CTA'


const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <About />
      <Pricing />
      <Testimonails />
      <CTA />
    </>
  )
}

export default LandingPage