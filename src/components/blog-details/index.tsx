
import React from 'react'
import Breadcrumnd from '../common/Breadcrumnd'
import BlogDetailsArea from './BlogDetailsArea'
import HeaderOne from '@/layouts/headers/HeaderOne'
import SubscribeHomeOne from '../homes/home/SubscribeHomeOne'
import FooterOne from '@/layouts/footers/FooterOne'

export default function BlogDetails() {
  return (
    <>
      <HeaderOne/>
      <Breadcrumnd title="Blog Details" subtitle="Blog Details" />
      <BlogDetailsArea />
      <SubscribeHomeOne />
      <FooterOne />
    </>
  )
}
