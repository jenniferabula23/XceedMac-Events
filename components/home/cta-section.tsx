"use client"

import Link from "next/link"
import { ArrowRight, Sparkles, Phone, Calendar } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/80 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-secondary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-secondary/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-2 mb-6 animate-bounce-slow">
          <Sparkles className="w-4 h-4 text-secondary" />
          <span className="text-secondary text-sm tracking-widest uppercase font-medium">
            {"Let's Get Started"}
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in">
          {"Let's Create Your"}
          <br />
          <span className="text-secondary">Dream Event</span>
        </h2>

        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-delay">
          Get in touch with us today to begin planning your unforgettable event
          experience. Our team is ready to bring your vision to life.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link
            href="/packages"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground text-sm font-medium tracking-wide uppercase hover:bg-secondary/90 transition-all duration-300 rounded-sm hover:scale-105 hover:shadow-lg"
          >
            <Sparkles className="w-4 h-4 group-hover:animate-spin" />
            Explore Packages
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground text-sm font-medium tracking-wide uppercase hover:bg-primary-foreground/10 transition-all duration-300 rounded-sm"
          >
            <Calendar className="w-4 h-4" />
            Book Consultation
          </Link>
        </div>

        {/* Quick contact */}
        <div className="flex items-center justify-center gap-2 text-primary-foreground/70">
          <Phone className="w-4 h-4" />
          <span>Or call us directly:</span>
          <a
            href="tel:++233558189100"
            className="text-secondary hover:text-secondary/80 font-medium transition-colors"
          >
            +233 558-189-100
          </a>
        </div>
      </div>
    </section>
  )
}
