

import Service from '@/components/service'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'FarmHub Service - HarvestGuard: Smart Farm Monitoring & Management Made Easy Next js Template',
  description: 'HarvestGuard empowers you to efficiently track and manage your farm, acting as your vigilant eyes on the ground, ensuring everything runs smoothly.',
};


export default function index() {
  return (
    <Wrapper>
      <Service />
    </Wrapper>
  )
}
