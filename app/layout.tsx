import { GeistSans } from 'geist/font'
import { GeistMono } from 'geist/font'
import './globals.css'
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'LifeCalc - Your All-in-One Calculator',
  description: 'Calculate everything from EMI to BMI, SIP to Fuel Costs, and more with our comprehensive calculator suite.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  )
} 