


import React from 'react'
import Breadcrumnd from '../common/Breadcrumnd'

import GalleryArea from './GalleryArea'
import HeaderOne from '@/layouts/headers/HeaderOne'
import SubscribeHomeOne from '../homes/home/SubscribeHomeOne'
import FooterOne from '@/layouts/footers/FooterOne'

export default function Gallery() {
  return (
    <>
      <HeaderOne />
      <Breadcrumnd title="Gallery" subtitle="Gallery" />
      <GalleryArea />
      <SubscribeHomeOne />
      <FooterOne />

    </>
  )
}
