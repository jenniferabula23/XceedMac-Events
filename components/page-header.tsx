"use client"

import { Sparkles } from "lucide-react"

interface PageHeaderProps {
  title: string
  subtitle?: string
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-primary/80 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-secondary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient overlays */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-2 mb-6 animate-bounce-slow">
          <Sparkles className="w-4 h-4 text-secondary" />
          <span className="text-secondary text-sm tracking-widest uppercase font-medium">
            XceedMac Events
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in">
          {title}
        </h1>

        {subtitle && (
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in-delay">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
