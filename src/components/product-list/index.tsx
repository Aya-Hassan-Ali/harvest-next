

import React from 'react'
import Breadcrumnd from '../common/Breadcrumnd'
import ProductListArea from './ProductListArea'

import HeaderOne from '@/layouts/headers/HeaderOne'
import SubscribeHomeOne from '../homes/home/SubscribeHomeOne'
import FooterOne from '@/layouts/footers/FooterOne'

export default function ProductList() {
  return (
    <>
      <HeaderOne />
      <Breadcrumnd title="Product List" subtitle="Product List" />
      <ProductListArea />
      <SubscribeHomeOne />
      <FooterOne />

    </>
  )
}
