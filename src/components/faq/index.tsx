


import React from 'react'
import Breadcrumnd from '../common/Breadcrumnd'

// import FaqHomeThree from '../homes/home-3/FaqHomeThree'

import HeaderOne from '@/layouts/headers/HeaderOne'
import CounterHomeOne from '../homes/home/CounterHomeOne'
import SubscribeHomeOne from '../homes/home/SubscribeHomeOne'
import FooterOne from '@/layouts/footers/FooterOne'

export default function Faq() {
  return (
    <>
      <HeaderOne />
      <Breadcrumnd title="Posts & Faq" subtitle="Faq" />
      {/* <FaqHomeOne/> */}
      <CounterHomeOne style_2={true} />
      <SubscribeHomeOne />
      <FooterOne />
    </>
  )
}
