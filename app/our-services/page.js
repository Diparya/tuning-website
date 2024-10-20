import React from 'react'
import OurServices from '@/components/OurServices'
import ServiceSection from '@/components/ServiceSection'
import PopularServices from '@/components/PopularServices'
import ClientFeedback from '@/components/ClientFeedback'
import CollisionRepair from '@/components/CollisionRepair'
import Footer from '@/components/Footer'
import HeaderTwo from '@/components/HeaderTwo'

const OurServicesPage = () => {
  return (
    <>
        <HeaderTwo/>
        <OurServices/>
        <ServiceSection/>
        <PopularServices/>
        <ClientFeedback/>
        <CollisionRepair/>
        <Footer/>
    </>
  )
}

export default OurServicesPage