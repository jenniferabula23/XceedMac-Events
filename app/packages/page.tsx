"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { PackageCard } from "@/components/packages/package-card"
import { BookingForm } from "@/components/packages/booking-form"
import { PackagesCTA } from "@/components/packages/packages-cta"

const packages = [
  {
    name: "XceedMac Elite Package",
    description: "Our Complete Service Package is reserved for premium clients, offering exclusive privileges and bespoke attention. We dedicate the entire day solely to your event, ensuring absolute focus and a refined, elevated experience.",
    price: "Contact for Quote",
    popular: true,
    features: [
      "Exclusive full-day dedication",
      "Premium vendor partnerships",
      "Personalized attention",
      "Luxury experience design",
      "VIP coordination team",
      "Post-event follow-up",
    ],
  },
  {
    name: "XceedMac International Package",
    description: "Planning an event from afar? We serve as your dedicated event consultants, managing every detail to bring your vision to life seamlessly—giving you clarity, options, and a flawless event plan, wherever you are in the world.",
    price: "Starts from $3,000.00",
    popular: false,
    features: [
      "Virtual consultation sessions",
      "International vendor coordination",
      "Travel & accommodation planning",
      "Cultural integration support",
      "Timeline management across timezones",
      "On-ground team coordination",
    ],
  },
  {
    name: "XceedMac Full Package",
    description: "Our Complete Service Package covers everything you need in one solution: planning, coordination, protocol, security, and janitorial services—for a smooth, stress-free event experience.",
    price: "Starts from GHC 25,000",
    note: "*Flight & accommodation exclusive*",
    popular: false,
    features: [
      "Complete event planning",
      "Day-of coordination",
      "Protocol management",
      "Security services",
      "Janitorial support",
      "Vendor management",
    ],
  },
  {
    name: "Planning & Coordination",
    description: "Need professional support to plan your event? We act as your personal consultant, handling every detail to bring your vision to life and deliver the perfect blueprint for your event.",
    price: "Starts from GHC 18,000",
    popular: false,
    features: [
      "Event planning consultation",
      "Budget development",
      "Vendor sourcing",
      "Timeline creation",
      "Design consultation",
      "Coordination support",
    ],
  },
  {
    name: "Single Service",
    description: "Our standalone service offerings include event coordination, protocol management, security services, and professional janitorial support.",
    price: "Contact for Quote",
    popular: false,
    features: [
      "Event coordination",
      "Protocol management",
      "Security services",
      "Professional janitorial support",
      "Flexible booking",
      "À la carte options",
    ],
  },
]

export default function PackagesPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHeader
          title="Our Packages"
          subtitle="Choose the perfect package for your event. From intimate gatherings to grand celebrations, we have you covered."
        />

        {/* Packages Grid */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
              {packages.map((pkg, index) => (
                <PackageCard key={index} package={pkg} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section id="booking-form" className="py-24 bg-muted">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Get Started
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
                Book Your Event
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Fill out the form below and our team will get back to you within 24 hours with a customized quote.
              </p>
            </div>
            <BookingForm />
          </div>
        </section>

        <PackagesCTA />
      </main>
      <Footer />
    </>
  )
}
