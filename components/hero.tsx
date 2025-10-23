"use client"
import React, { useEffect, useState } from 'react'
import { MessageCircle, Users, Calendar } from 'lucide-react';
// import Image from 'next/image';
import { WhatsappChannel } from './WhatsappCTA';

// Prefer static assets or public folder URLs for performance
const bgUrls = [
  '/group_sug.webp',
  '/nacoss_nem.webp',
  '/new_central_masjid.jpg',
]

const Hero: React.FC = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0)

  // Preload images once on mount
  useEffect(() => {
    bgUrls.forEach((url) => {
      const img = new Image()
      img.src = url
    })
  }, [])

  // Change background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % bgUrls.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="relative w-full bg-no-repeat bg-cover bg-center text-white transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${bgUrls[currentBgIndex]})` }}
    >
      <div className="max-w-screen-2xl bg-blue-900/60 min-h-screen px-4 py-16 sm:px-20 lg:px-24 md:py-24 lg:py-32">
           <div className="w-full px-4 sm:px-6 lg:px-8 z-20 relative">
                <div className="text-center max-w-4xl mx-auto animate-fadeInUp">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                    Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-200">SUGBUK</span>
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl text-blue-50 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Your voice, your representation, your union. Stay connected with the latest updates and initiatives from your student government.
                  </p>
                  <WhatsappChannel />
                  {/* Stats */}
                  <div className="flex items-center justify-around gap-4 mt-20 max-w-2xl mx-auto">
                    <div className="bg-blue-800/10 backdrop-blur-sm rounded-2xl p-6 px-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                      <Users className="w-8 h-8 text-white mx-auto mb-2" />
                      <div className="text-3xl font-bold text-white mb-1">10K+</div>
                      <div className="text-sm text-blue-100">Students</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 px-10 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                      <Calendar className="w-8 h-8 text-white mx-auto mb-2" />
                      <div className="text-3xl font-bold text-white mb-1">50+</div>
                      <div className="text-sm text-blue-100">Events</div>
                    </div>
                    <div className="hidden sm:block bg-white/10 backdrop-blur-sm rounded-2xl p-6 px-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                      <MessageCircle className="w-8 h-8 text-white mx-auto mb-2" />
                      <div className="text-3xl font-bold text-white mb-1">24/7</div>
                      <div className="text-sm text-blue-100">Support</div>
                    </div>
                  </div>
                </div>
              </div>
        
      </div>
    </section>
  )
}

export default Hero
