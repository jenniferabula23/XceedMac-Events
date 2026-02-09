"use client"

import { useEffect, useState, useRef } from "react"
import { Crown, Heart, Building, Calendar } from "lucide-react"

const stats = [
  { value: 500, suffix: "+", label: "Events Planned", icon: Calendar },
  { value: 300, suffix: "+", label: "Happy Couples", icon: Heart },
  { value: 50, suffix: "+", label: "Venues Partnered", icon: Building },
  { value: 10, suffix: "+", label: "Years Experience", icon: Crown },
]

function AnimatedCounter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let startTime: number
          const duration = 2000

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            setCount(Math.floor(progress * end))
            if (progress < 1) {
              requestAnimationFrame(step)
            }
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [end, hasAnimated])

  return (
    <div ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-2">
      {count}
      {suffix}
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-secondary/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-500">
                <stat.icon className="w-8 h-8 text-secondary group-hover:text-secondary-foreground transition-colors" />
              </div>
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              <div className="text-primary-foreground/70 tracking-wide uppercase text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
