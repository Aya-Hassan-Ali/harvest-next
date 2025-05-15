

import React from 'react'
import Breadcrumnd from '../common/Breadcrumnd'
import AboutHomeOne from '../homes/home/AboutHomeOne'
import ServiceHomeOne from '../homes/home/ServiceHomeOne'
import TestimoniaHomeOne from '../homes/home/TestimoniaHomeOne'
import CtaHomeOne from '../homes/home/CtaHomeOne'
import PortfolioHomeOne from '../homes/home/PortfolioHomeOne'
import BrandHomeOne from '../homes/home/BrandHomeOne'
import HeaderOne from '@/layouts/headers/HeaderOne'
import SubscribeHomeOne from '../homes/home/SubscribeHomeOne'
import FooterOne from '@/layouts/footers/FooterOne'
export default function About() {
  return (
    <>
      <HeaderOne />
      <Breadcrumnd title="About Us" subtitle="About Us" />
      <AboutHomeOne />
      <ServiceHomeOne style_2={true} />
      <TestimoniaHomeOne />
      <CtaHomeOne />
      <PortfolioHomeOne style_2={true} />
      <BrandHomeOne style_3={true} />
      <SubscribeHomeOne />
      <FooterOne />

    </>
  )
}
