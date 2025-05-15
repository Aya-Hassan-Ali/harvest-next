


import React from 'react'
import Breadcrumnd from '../common/Breadcrumnd'


import GalleryDetailsArea from './GalleryDetailsArea'
import HeaderOne from '@/layouts/headers/HeaderOne'
import SubscribeHomeOne from '../homes/home/SubscribeHomeOne'
import FooterOne from '@/layouts/footers/FooterOne'

export default function GalleryDetails() {
  return (
    <>
    <HeaderOne />
    <Breadcrumnd title="Gallery Details" subtitle="Gallery Details" />
    <GalleryDetailsArea />
    <SubscribeHomeOne />
    <FooterOne />

    </>
  )
}
