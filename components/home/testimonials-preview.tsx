"use client"

import Link from "next/link"
import { ArrowRight, Quote, Star, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    quote:
      "If anyone wants to know how it felt to have been a stress free bride, they should ask me. I literally had to show up and get married. All thanks to the Xceedmac team for planning every part of our wedding ceremony and delivering beautifully on the day.",
    author: "Mr & Mrs Berchie",
    event: "Wedding Clients",
    rating: 5,
  },
  {
    quote:
      "Xceedmac is the best period! Mr. Buckman was very responsive and transparent throughout the planning process. His professionalism, timeliness, and organization was above and beyond. Everything went perfectly on my day.",
    author: "Happy Client",
    event: "Wedding Client",
    rating: 5,
  },
  {
    quote:
      "Xceedmac events takes care of you, your guests, and your entire event, relieving you from all the stress. The timely and classic organization by Xceedmac will just blow your brain. Definitely the #1!",
    author: "Fred Ulysis",
    event: "Event Client",
    rating: 5,
  },
]

export function TestimonialsPreview() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm tracking-widest uppercase font-medium">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            What Our <span className="text-primary">Clients</span> Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Hear from the couples and clients who trusted us with their special
            moments.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 relative overflow-hidden group hover:border-primary/50 transition-all duration-500 hover:shadow-2xl">
            <Quote className="w-16 h-16 text-primary/10 absolute top-6 right-6 group-hover:text-primary/20 transition-colors" />

            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-secondary text-secondary"
                />
              ))}
            </div>

            <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 relative z-10 animate-fade-in">
              &quot;{testimonials[activeIndex].quote}&quot;
            </p>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-foreground text-lg">
                  {testimonials[activeIndex].author}
                </p>
                <p className="text-primary">{testimonials[activeIndex].event}</p>
              </div>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "bg-primary w-8"
                        : "bg-muted hover:bg-primary/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 stagger-children">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`bg-card p-6 border rounded-lg cursor-pointer transition-all duration-500 animate-slide-up hover:-translate-y-2 ${
                index === activeIndex
                  ? "border-primary shadow-lg shadow-primary/20"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-secondary text-secondary"
                  />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                &quot;{testimonial.quote}&quot;
              </p>
              <div>
                <p className="font-semibold text-foreground text-sm">
                  {testimonial.author}
                </p>
                <p className="text-xs text-primary">{testimonial.event}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/testimonials"
            className="group inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all"
          >
            Read More Testimonials
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}


