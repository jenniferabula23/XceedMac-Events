"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle, Crown, Sparkles } from "lucide-react"

const featuredPackages = [
  {
    name: "Elite Package",
    price: "Premium",
    description: "Full-day dedicated service with exclusive privileges",
    features: ["Exclusive dedication", "Premium vendors", "VIP coordination"],
    popular: true,
  },
  {
    name: "Full Package",
    price: "GHC 25,000+",
    description: "Complete solution: planning, coordination & more",
    features: ["Complete planning", "Day-of coordination", "Security services"],
    popular: false,
  },
  {
    name: "International",
    price: "$3,000+",
    description: "Planning events from anywhere in the world",
    features: ["Virtual consultations", "Global coordination", "On-ground team"],
    popular: false,
  },
]

export function PackagesPreview() {
  return (
    <section className="py-24 bg-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6 animate-bounce-slow">
            <Crown className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm tracking-widest uppercase font-medium">
              Our Packages
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            Choose Your <span className="text-primary">Perfect Package</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we have a package that fits your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12 stagger-children">
          {featuredPackages.map((pkg, index) => (
            <div
              key={index}
              className={`relative group bg-card border rounded-lg p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 animate-slide-up ${
                pkg.popular
                  ? "border-primary shadow-lg shadow-primary/20"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                    <Crown className="w-3 h-3" />
                    Popular
                  </div>
                </div>
              )}

              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {pkg.name}
              </h3>
              <p className="text-2xl font-bold text-primary mb-4">{pkg.price}</p>
              <p className="text-muted-foreground text-sm mb-6">{pkg.description}</p>

              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/packages"
                className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium tracking-wide uppercase transition-all duration-300 rounded-sm ${
                  pkg.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary/20 text-foreground hover:bg-secondary/40"
                }`}
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/packages"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wide uppercase hover:bg-primary/90 transition-all duration-300 rounded-sm hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
          >
            <Sparkles className="w-4 h-4 group-hover:animate-spin" />
            View All Packages
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
