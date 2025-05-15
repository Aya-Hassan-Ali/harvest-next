


import React from 'react'
import Breadcrumnd from '../common/Breadcrumnd'

import ServiceDetailsArea from './ServiceDetailsArea'
import HeaderOne from '@/layouts/headers/HeaderOne'
import SubscribeHomeOne from '../homes/home/SubscribeHomeOne'
import FooterOne from '@/layouts/footers/FooterOne'

export default function ServiceDetails() {
  return (
    <>
      <HeaderOne />
      <Breadcrumnd title="Service Details" subtitle="Service Details" />
      <ServiceDetailsArea />
      <SubscribeHomeOne />
      <FooterOne />
    </>
  )
}
