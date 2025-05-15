

import React from 'react'

import Breadcrumnd from '../common/Breadcrumnd'
import ServiceArea from './ServiceArea'

import HeaderOne from '@/layouts/headers/HeaderOne'
import SubscribeHomeOne from '../homes/home/SubscribeHomeOne'
import FooterOne from '@/layouts/footers/FooterOne'

export default function Service() {
  return (
    <>
      <HeaderOne />
      <Breadcrumnd title="Services" subtitle="Services" />
      <ServiceArea />
      <SubscribeHomeOne />
      <FooterOne />

    </>
  )
}
