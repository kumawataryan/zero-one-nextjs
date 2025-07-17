'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'

export default function HeroVideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-2 shadow-2xl border border-white/50 w-full h-full">
      {isPlaying ? (
        <div className="w-full h-full rounded-2xl overflow-hidden">
          <iframe
            className="w-full h-full rounded-2xl"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="w-full h-full relative">
          <Image
            src="/footer-bot.png"
            alt="Website mockup"
            fill
            className="rounded-2xl object-cover"
          />
          <button
            onClick={() => setIsPlaying(true)}
            className="bg-white/10 backdrop-blur-sm absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-3 p-6 rounded-full"
          >
            <Play size={36} className="text-white fill-white" />
          </button>
        </div>
      )}
    </div>
  )
}