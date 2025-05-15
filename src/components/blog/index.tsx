
import HeaderThree from '@/layouts/headers/HeaderThree'
import React from 'react'
import Breadcrumnd from '../common/Breadcrumnd'


import BlogArea from './BlogArea'

export default function Blog() {
  return (
    <>
      <HeaderThree />
      <Breadcrumnd title="Blog" subtitle="Blog" />
      <BlogArea />
     
      

    </>
  )
}
