"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import { useState } from "react"

export function AboutPreview() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image with animated overlay */}
          <div
            className="relative h-[500px] rounded-2xl overflow-hidden group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src="/images/IMG_4016.JPG"
              alt="XceedMac Events"
              fill
              className={`object-cover transition-all duration-700 ${
                isHovered ? "scale-110" : "scale-100"
              }`}
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent transition-opacity duration-500 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* Play button overlay */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform animate-pulse-glow">
                <Play className="w-8 h-8 text-secondary-foreground ml-1" />
              </div>
            </div>

            {/* Stats card */}
            <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm rounded-lg p-4 transform translate-y-0 group-hover:translate-y-0 transition-transform">
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">500+</p>
                  <p className="text-xs text-muted-foreground">Events</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">10+</p>
                  <p className="text-xs text-muted-foreground">Years</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">98%</p>
                  <p className="text-xs text-muted-foreground">Happy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-primary text-sm tracking-widest uppercase font-medium">
                About Us
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Creating <span className="text-primary">Magical</span> Moments
              <br />
              Beyond Limits
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Welcome to XceedMac Events! We specialize in crafting bespoke
              weddings and events for discerning clients. Our dedicated team is
              passionate about creating unforgettable experiences that exceed
              your expectations.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              From intimate ceremonies to grand celebrations, we handle every
              detail with precision and creativity, ensuring a seamless and
              stress-free planning journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wide uppercase hover:bg-primary/90 transition-all duration-300 rounded-sm hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/packages"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground text-sm font-medium tracking-wide uppercase hover:bg-secondary/90 transition-all duration-300 rounded-sm"
              >
                <Sparkles className="w-4 h-4" />
                Our Packages
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
