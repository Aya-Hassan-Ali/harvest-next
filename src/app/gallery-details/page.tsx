

import GalleryDetails from '@/components/gallery-details'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'HarvestGuard: Smart Farm Monitoring & Management Made Easy Gallery Details - HarvestGuard: Smart Farm Monitoring & Management Made Easy Next js Template',
  description: 'HarvestGuard empowers you to efficiently track and manage your farm, acting as your vigilant eyes on the ground, ensuring everything runs smoothly.',
};



export default function index() {
  return (
    <Wrapper>
      <GalleryDetails />
    </Wrapper>
  )
}
