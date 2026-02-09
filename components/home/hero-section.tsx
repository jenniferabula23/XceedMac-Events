"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

const slides = [
  {
    image: "/images/IMG_3624.JPG",
    title: "Luxury Wedding Planning",
    subtitle: "Where Dreams Become Reality",
  },
  {
    image: "/images/IMG_4758.JPG",
    title: "Traditional Celebrations",
    subtitle: "Honoring Culture & Heritage",
  },
  {
    image: "/images/carousel/slide-3.jpg",
    title: "Corporate Excellence",
    subtitle: "Professional Events That Impress",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setIsAnimating(false)
      }, 500)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    if (index !== currentSlide) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentSlide(index)
        setIsAnimating(false)
      }, 500)
    }
  }

  const prevSlide = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      setIsAnimating(false)
    }, 500)
  }

  const nextSlide = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setIsAnimating(false)
    }, 500)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Images with Transition */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
        </div>
      ))}

      {/* Animated Particles */}
      <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-secondary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-500 ${
            isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-2 mb-6 animate-bounce-slow">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-secondary text-sm tracking-widest uppercase font-medium">
              Beyond Limit
            </span>
            <Sparkles className="w-4 h-4 text-secondary" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-background leading-tight mb-4 animate-fade-in">
            {slides[currentSlide].title}
          </h1>

          <p className="text-secondary text-xl md:text-2xl font-medium mb-6 animate-fade-in-delay">
            {slides[currentSlide].subtitle}
          </p>

          <p className="text-background/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Welcome to XceedMac Events. We specialize in crafting bespoke weddings and events
            for discerning clients, ensuring a stress-free planning journey.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/packages"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wide uppercase hover:bg-primary/90 transition-all duration-300 rounded-sm hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
            >
              <Sparkles className="w-4 h-4 group-hover:animate-spin" />
              Explore Packages
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground text-sm font-medium tracking-wide uppercase hover:bg-secondary/90 transition-all duration-300 rounded-sm hover:scale-105"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Carousel Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="p-2 bg-background/20 backdrop-blur-sm rounded-full hover:bg-background/40 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-background" />
        </button>

        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-secondary w-8"
                  : "bg-background/40 hover:bg-background/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-2 bg-background/20 backdrop-blur-sm rounded-full hover:bg-background/40 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-background" />
        </button>
      </div>

      {/* Side decorations */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-secondary to-transparent" />
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-secondary to-transparent" />
      </div>
    </section>
  )
}
