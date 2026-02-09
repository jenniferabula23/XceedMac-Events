"use client"

import Link from "next/link"
import { ArrowRight, Phone, Mail, Sparkles } from "lucide-react"

export function PackagesCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/80 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
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

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-2 mb-6 animate-bounce-slow">
          <Sparkles className="w-4 h-4 text-secondary" />
          <span className="text-secondary text-sm tracking-widest uppercase font-medium">
            Ready to Start?
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in">
          {"Let's Create Something"} <span className="text-secondary">Extraordinary</span>
        </h2>

        <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto animate-fade-in-delay">
          Have questions about our packages? Our team is here to help you choose the perfect solution for your event.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground text-sm font-medium tracking-wide uppercase hover:bg-secondary/90 transition-all duration-300 rounded-sm hover:scale-105 hover:shadow-lg"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="tel:+233558189100"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground text-sm font-medium tracking-wide uppercase hover:bg-primary-foreground/10 transition-all duration-300 rounded-sm"
          >
            <Phone className="w-4 h-4" />
            Call Us Now
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-primary-foreground/70">
          <a
            href="tel:+233558189100"
            className="flex items-center gap-2 hover:text-secondary transition-colors"
          >
            <Phone className="w-5 h-5" />
            +233 558-189-100
          </a>
          <a
            href="mailto:info@xceedmac.com"
            className="flex items-center gap-2 hover:text-secondary transition-colors"
          >
            <Mail className="w-5 h-5" />
           xceedmac@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}
