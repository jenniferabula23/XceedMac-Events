"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Heart,
  Users,
  Award,
  Clock,
  CheckCircle,
  Sparkles,
  Star,
} from "lucide-react"
import { useState, useEffect } from "react"

const values = [
  {
    icon: Heart,
    title: "Passion",
    description:
      "We pour our hearts into every event, treating each celebration as if it were our own.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work closely with our clients, vendors, and team to achieve exceptional results.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We are committed to delivering the highest quality service in every aspect of event planning.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description:
      "We honor our commitments and deliver on our promises, every single time.",
  },
]

const services = [
  {
    title: "Wedding Planning",
    description:
      "From intimate ceremonies to grand celebrations, we create the wedding of your dreams with meticulous attention to every detail.",
    image: "/images/IMG_3624.JPG",
    features: [
      "Full Planning & Coordination",
      "Vendor Selection & Management",
      "Timeline & Budget Management",
      "Day-of Coordination",
      "Guest Management",
      "Decor & Styling",
    ],
  },
  {
    title: "Corporate Events",
    description:
      "Professional conferences, product launches, and business gatherings executed with precision and sophistication.",
    image: "/images/corporate-event.jpg",
    features: [
      "Conference Planning",
      "Product Launches",
      "Team Building Events",
      "Award Ceremonies",
      "Brand Activations",
      "Executive Meetings",
    ],
  },
  // {
  //   title: "Venue & Decor",
  //   description:
  //     "Transform any space into a breathtaking setting with our expert venue styling and decoration services.",
  //   image: "/images/IMG_8774.JPG",
  //   features: [
  //     "Venue Selection & Booking",
  //     "Custom Decor Design",
  //     "Floral Arrangements",
  //     "Lighting Design",
  //     "Table Settings",
  //     "Theme Development",
  //   ],
  // },
]

function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
    requestAnimationFrame(step)
  }, [end, duration])

  return <span>{count}</span>
}

export default function AboutPage() {
  const [activeService, setActiveService] = useState(0)

  return (
    <>
      <Navigation />
      <main>
        <PageHeader
          title="About & Services"
          subtitle="Creating unforgettable experiences that exceed your expectations since our founding."
        />

        {/* Welcome Section with Animation */}
        <section className="py-24 bg-background overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[500px] rounded-lg overflow-hidden group">
                <Image
                  src="/images/IMG_3594.JPG"
                  alt="XceedMac Events Team"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <p className="text-background text-lg font-medium">
                    Creating memories that last a lifetime
                  </p>
                </div>
              </div>
              <div className="animate-slide-up">
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                  <Star className="w-4 h-4 text-primary" />
                  <span className="text-primary text-sm tracking-widest uppercase font-medium">
                    Welcome Note
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
                  From Our Team Lead
                </h2>
                <div className="prose prose-lg text-muted-foreground">
                  <p className="leading-relaxed mb-6">
                    Welcome to XceedMac Events! We are thrilled to introduce our
                    event planning services, designed to bring your vision to
                    life. As the Team Lead, I want to assure you that our
                    dedicated team is passionate about creating unforgettable
                    experiences that exceed your expectations.
                  </p>
                  <p className="leading-relaxed mb-6">
                    At XceedMac Events, we understand the importance of
                    attention to detail, creativity, and precision in event
                    planning. Our goal is to provide a seamless and stress-free
                    experience for you and your guests.
                  </p>
                  <p className="font-semibold text-foreground">
                    Sincerely,
                    <br />
                    Michael Buckman
                    <br />
                    <span className="text-primary">
                      Team Lead, XceedMac Events
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section with Animated Counters */}
        <section className="py-16 bg-primary">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: 500, label: "Events Completed", suffix: "+" },
                { value: 98, label: "Happy Clients", suffix: "%" },
                { value: 10, label: "Years Experience", suffix: "+" },
                { value: 50, label: "Team Members", suffix: "+" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                    <AnimatedCounter end={stat.value} />
                    {stat.suffix}
                  </p>
                  <p className="text-primary-foreground/70 text-sm uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm tracking-widest uppercase font-medium">
                  Our Values
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                What Drives Us
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center p-8 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 animate-slide-up group"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                    <value.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section with Tabs */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-secondary/20 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-secondary-foreground" />
                <span className="text-secondary-foreground text-sm tracking-widest uppercase font-medium">
                  Our Services
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
                What We Offer
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Comprehensive event planning services tailored to meet your
                unique needs.
              </p>
            </div>

            {/* Service Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`px-6 py-3 rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                    activeService === index
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                      : "bg-muted text-muted-foreground hover:bg-primary/10"
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>

            {/* Active Service Content */}
            <div className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in">
              <div className="relative h-[400px] rounded-lg overflow-hidden group">
                <Image
                  src={services[activeService].image || "/placeholder.svg"}
                  alt={services[activeService].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {services[activeService].title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {services[activeService].description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {services[activeService].features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 animate-slide-up"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/packages"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium tracking-wide uppercase hover:bg-primary/90 transition-all duration-300 rounded-sm hover:scale-105"
                >
                  <Sparkles className="w-4 h-4" />
                  View Packages
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA with Popup Feel */}
        <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/80 relative overflow-hidden">
          {/* Floating elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-secondary/30 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 5}s`,
                }}
              />
            ))}
          </div>

          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-2 mb-6 animate-bounce-slow">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-secondary text-sm tracking-widest uppercase font-medium">
                {"Let's Work Together"}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6">
              Ready to Plan Your <span className="text-secondary">Dream Event?</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10">
              Let us help you create an unforgettable experience for you and
              your loved ones.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/packages"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground text-sm font-medium tracking-wide uppercase hover:bg-secondary/90 transition-all duration-300 rounded-sm hover:scale-105 hover:shadow-lg"
              >
                <Sparkles className="w-4 h-4 group-hover:animate-spin" />
                Explore Packages
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground text-sm font-medium tracking-wide uppercase hover:bg-primary-foreground/10 transition-all duration-300 rounded-sm"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
