"use client"
import React from 'react'
import ScrollToTop from '@/components/common/scroll-to-top'
import ChatBotButton from '../components/common/Chatbotbutton';

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <div className="button-group-wrapper" style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        display: 'flex',
        gap: '50px',
        zIndex: 1000
      }}>
        <ScrollToTop />
        <ChatBotButton />
      </div>
    </>
  )
}