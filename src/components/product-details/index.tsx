


import React from 'react'
import Breadcrumnd from '../common/Breadcrumnd'

import ProductDetailsArea from './ProductDetailsArea'
import HeaderOne from '@/layouts/headers/HeaderOne'
import SubscribeHomeOne from '../homes/home/SubscribeHomeOne'
import FooterOne from '@/layouts/footers/FooterOne'

export default function ProductDetails() {
  return (
    <>
      <HeaderOne />
      <Breadcrumnd title="Product Details" subtitle="Product Details" />
      <ProductDetailsArea />       
      <SubscribeHomeOne />
      <FooterOne />
    </>
  )
}
