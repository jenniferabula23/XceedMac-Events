"use client"

import { CheckCircle, Sparkles, Crown } from "lucide-react"
import Link from "next/link"

interface PackageProps {
  package: {
    name: string
    description: string
    price: string
    note?: string
    popular: boolean
    features: string[]
  }
  index: number
}

export function PackageCard({ package: pkg, index }: PackageProps) {
  return (
    <div
      className={`relative group bg-card border rounded-lg p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-slide-up ${
        pkg.popular
          ? "border-primary shadow-lg shadow-primary/20 animate-pulse-glow"
          : "border-border hover:border-primary/50"
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Popular Badge */}
      {pkg.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-1 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide">
            <Crown className="w-3 h-3" />
            Most Popular
          </div>
        </div>
      )}

      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer rounded-lg overflow-hidden pointer-events-none" />

      <div className="relative z-10">
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {pkg.name}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {pkg.description}
        </p>

        <div className="mb-6">
          <p className="text-2xl font-bold text-primary">{pkg.price}</p>
          {pkg.note && (
            <p className="text-xs text-muted-foreground mt-1">{pkg.note}</p>
          )}
        </div>

        <ul className="space-y-3 mb-8">
          {pkg.features.map((feature, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors"
            >
              <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
              {feature}
            </li>
          ))}
        </ul>

        <Link
          href="#booking-form"
          className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 rounded-sm ${
            pkg.popular
              ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
          }`}
        >
          <Sparkles className="w-4 h-4" />
          Book This Package
        </Link>
      </div>
    </div>
  )
}
