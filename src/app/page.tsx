
import React from 'react'
import { Metadata } from 'next';
import HomeOne from '@/components/homes/home';
import Wrapper from '@/layouts/Wrapper';

export const metadata: Metadata = {
  title: 'Harvest Guard - HarvestGuard: Smart Farm Monitoring & Management Made Easy',
  description: 'HarvestGuard empowers you to efficiently track and manage your farm, acting as your vigilant eyes on the ground, ensuring everything runs smoothly.',
};

export default function index() {
  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  )
}
