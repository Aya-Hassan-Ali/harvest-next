import HeaderOne from '@/layouts/headers/HeaderOne'
import React from 'react'
import Breadcrumnd from '../common/Breadcrumnd'
import SubscribeHomeOne from '../homes/home/SubscribeHomeOne'
import CtaHomeOne from '../homes/home/CtaHomeOne'
import GoogleMap from './GoogleMap'
import ContactInfo from './ContactInfo'
import FooterOne from '@/layouts/footers/FooterOne'
export default function Contact() {
  return (
    <>
      <HeaderOne />
      <Breadcrumnd title="Contact" subtitle="Contact" />
      <CtaHomeOne/>
      <GoogleMap />
      <ContactInfo />
      <SubscribeHomeOne/>
      <FooterOne />
    </>
  )
}
