import About from '@/components/About'
import CarEnhancement from '@/components/CarEnhancement'
import CarServices from '@/components/CarServices'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import HeaderTwo from '@/components/HeaderTwo'
import Services from '@/components/Services'
import React from 'react'

const AboutUs = () => {
  return (
    <>
        <HeaderTwo/>
        <About/>
        <CarServices/>
        <CarEnhancement/>
        <Services/>
        <FAQ/>
        <Footer/>
    </>
  )
}

export default AboutUs