"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Linkedin, Mail, Sparkles } from "lucide-react"

const teamMembers = [
  {
    name: "Mr. Michael Buckman",
    role: "Executive Director",
    image: "/images/team/mbkman.jpg",
    bio: "As the founder and Executive Director, Michael brings years of experience in event planning and a passion for creating unforgettable experiences. His attention to detail and commitment to excellence has made XceedMac Events a trusted name in the industry.",
  },
  {
    name: "Miss Freda Stephanie Essel",
    role: "Executive Assistant",
    image: "/images/team/WhatsApp Image 2022-05-13 at 6.59.39 PM.jpeg",
    bio: "Freda ensures smooth operations across all our events with her exceptional organizational skills. Her dedication to client satisfaction and ability to handle multiple tasks simultaneously makes her an invaluable part of our team.",
  },
  {
    name: "Mr. Kusi Appiah",
    role: "Lead Event Coordinator",
    image: "/images/team/IMG_0322.jpeg",
    bio: "Kusi brings creativity and precision to every event he coordinates. With a keen eye for detail and excellent vendor relationships, he ensures every celebration is executed flawlessly from start to finish.",
  },
  {
    name: "Mr. David-Gordon Asseh Jr.",
    role: "Brand Manager",
    image: "/images/team/WhatsApp Image 2022-05-13 at 11.42.11 PM.jpeg",
    bio: "David is responsible for shaping and maintaining the XceedMac brand identity. His creative vision and marketing expertise help us connect with clients and communicate our commitment to excellence.",
  },
]

export default function TeamPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHeader
          title="Meet the Team"
          subtitle="Our dedicated team of experienced professionals is passionate about creating unforgettable experiences."
        />

        {/* How We Work */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm tracking-widest uppercase font-medium">
                  Our Approach
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
                How We Work
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our team of experienced professionals will work closely with you
                to understand your objectives, preferences, and budget. We will
                then craft a customized event plan that meets your unique needs
                and exceeds your expectations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 stagger-children">
              {[
                {
                  num: "1",
                  title: "Consultation",
                  desc: "We start with a complimentary consultation to understand your vision, preferences, and budget for your special event.",
                },
                {
                  num: "2",
                  title: "Planning",
                  desc: "Our team crafts a customized plan, handles vendor coordination, and manages every detail leading up to your event.",
                },
                {
                  num: "3",
                  title: "Execution",
                  desc: "On the day of your event, we ensure flawless execution so you can relax and enjoy every moment of your celebration.",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="text-center p-8 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 animate-slide-up group"
                >
                  <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold group-hover:scale-110 group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-500">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-secondary/20 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-secondary-foreground" />
                <span className="text-secondary-foreground text-sm tracking-widest uppercase font-medium">
                  Our Team
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                The People Behind XceedMac
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg overflow-hidden group hover:border-primary/50 hover:shadow-2xl transition-all duration-500 animate-slide-up"
                >
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-primary text-sm mb-4">{member.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {member.bio}
                    </p>
                    <div className="flex items-center gap-4 mt-4">
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${member.name}'s `}
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages CTA */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm tracking-widest uppercase font-medium">
                Get Started
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Work With Our Team?
            </h2>
            <p className="text-muted-foreground mb-8">
              Explore our packages and find the perfect fit for your event.
            </p>
            <Link
              href="/packages"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium tracking-wide uppercase hover:bg-primary/90 transition-all duration-300 rounded-sm hover:scale-105"
            >
              <Sparkles className="w-4 h-4 group-hover:animate-spin" />
              View Packages
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/80 relative overflow-hidden">
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
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground leading-tight mb-6">
              Work With <span className="text-secondary">Our Team</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10">
              Let our experienced professionals bring your vision to life.
              Contact us today to get started.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground text-sm font-medium tracking-wide uppercase hover:bg-secondary/90 transition-all duration-300 rounded-sm hover:scale-105"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
