"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X, Sparkles, Crown, ArrowRight } from "lucide-react"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true)
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [isDismissed])

  if (!isVisible || isDismissed) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50 animate-fade-in"
        onClick={() => setIsDismissed(true)}
      />

      {/* Popup */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4 animate-slide-up">
        <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />

          {/* Close button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute top-4 right-4 p-1 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close popup"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative z-10 text-center">
            {/* Icon */}
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-slow">
              <Crown className="w-8 h-8 text-primary" />
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Plan Your Dream Event!
            </h3>
            <p className="text-muted-foreground mb-6">
              Explore our exclusive packages and let us create an unforgettable experience for you.
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-3">
              <Link
                href="/packages"
                onClick={() => setIsDismissed(true)}
                className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium tracking-wide uppercase hover:bg-primary/90 transition-all duration-300 rounded-sm hover:scale-105"
              >
                <Sparkles className="w-4 h-4 group-hover:animate-spin" />
                View Packages
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsDismissed(true)}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground text-sm font-medium tracking-wide uppercase hover:bg-secondary/90 transition-all duration-300 rounded-sm"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
