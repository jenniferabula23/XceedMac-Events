import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Wedding Events",
    description: "From intimate ceremonies to grand celebrations, we create the wedding of your dreams with meticulous attention to every detail.",
    image: "/images/hero-wedding.jpg",
  },
  {
    title: "Corporate Events",
    description: "Professional conferences, product launches, and business gatherings executed with precision and sophistication.",
    image: "/images/corporate-event.jpg",
  },
  {
    title: "Venue & Decor",
    description: "Transform any space into a breathtaking setting with our expert venue styling and decoration services.",
    image: "/images/venue-decor.jpg",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
            Our Service Range
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            We offer comprehensive event planning services tailored to meet your unique needs and exceed your expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-sm overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wide uppercase hover:bg-primary/90 transition-colors rounded-sm"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
