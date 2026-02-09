import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import Link from "next/link"
import { ArrowRight, Quote, Star } from "lucide-react"

export const metadata = {
  title: "Testimonials | XceedMac Events",
  description: "Read what our clients say about their experience with XceedMac Events.",
}

const testimonials = [
  {
    quote: "If anyone wants to know how it felt to have been a stress free bride, they should ask me. I never even had a chat with our decorator or bothered about how my bouquet's arrangement was going and it's delivery. I literally had to show up and get married. All thanks to the Xceedmac team for planning every part of our wedding ceremony and delivering beautifully on the day. You guys sprung some wonderful surprises on me and that was so thoughtful. I want to thank you so much for rocking my world and giving me a memorable event.",
    author: "Mr & Mrs Berchie",
    event: "Wedding Clients",
    rating: 5,
    featured: true,
  },
  {
    quote: "Xceedmac is the best period! Mr. Buckman was very responsive and transparent throughout the planning process. His professionalism, timeliness, and organization was above and beyond. Everything went perfectly on my day and I owe it to Mr. Buckman and his Team (especially Prince). Thank you for all you do!",
    author: "Happy Client",
    event: "Wedding Client",
    rating: 5,
    featured: false,
  },
  {
    quote: "Xceedmac events - takes care of you, your guests, and your entire event, relieving you from all the stress and stuff that gives you sleepless nights. The timely and classic organization by Xceedmac will just blow your brain. @Xceedmac is definitely the #1. Above all xceedmac is very professional with the job.",
    author: "Fred Ulysis",
    event: "Event Client",
    rating: 5,
    featured: false,
  },
  {
    quote: "Huge shoutout to my one and only planner XceedMac Event, the best out there!! Mr BUCKMAN and his team worked tirelessly behind the scenes to make my day a success. You are truly my godsend. Words will fail me once I start to talk about this man. A week in and we are still in awe when we look back on everything you did for us before, during and after our wedding. Without your tremendous help, our special day would not have been the picture-perfect event we always dreamed of. Your planning, preparation, professionalism, friendliness, honesty and attention to detail was amazing. As busy as you were that weekend, you made yourself available on my every call. Not once did you make me feel I was a burden or a bother to you. You went above and beyond for us. You truly delivered, you EXCEEDED our expectations. May God richly bless and expand your brand on our behalf. We are forever grateful. XceedMac Event is the way to go and I promise you, you won't regret it. Mr Buckman is the BEST. We love and appreciate you...",
    author: "Client Liz",
    event: "Wedding Client",
    rating: 5,
    featured: true,
  },
  {
    quote: "Thank you so much to the XceedMac team for giving me the wedding of my dreams. I was an extremely calm bride because Michael Buckman was taking away all my stress. My fiance and I were both in Accra and the wedding was done in Kumasi but every little detail was taken care of by the XceedMac team. I didn't need to travel in and out. I barely had to speak to any of the vendors. My planner even helped me with choosing my wedding dress! On D-Day, I couldn't be bothered by the overflow of people because they kept everything under control and the wedding was flawless! Months after the wedding I still receive compliments about how great the wedding was. When brides to be call me, I tell them my planner knew his work. Thank you so much and I recommend you over and over and over.",
    author: "Amma",
    event: "Wedding Client",
    rating: 5,
    featured: true,
  },
]

export default function TestimonialsPage() {
  const featuredTestimonials = testimonials.filter((t) => t.featured)
  const otherTestimonials = testimonials.filter((t) => !t.featured)

  return (
    <>
      <Navigation />
      <main>
        <PageHeader
          title="Client Testimonials"
          subtitle="Hear from the couples and clients who trusted us with their special moments."
        />

        {/* Featured Testimonials */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Success Stories
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
                Featured Reviews
              </h2>
            </div>

            <div className="space-y-12">
              {featuredTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-card p-8 md:p-12 border border-border rounded-sm relative"
                >
                  <Quote className="w-16 h-16 text-primary/10 absolute top-8 right-8" />
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8 relative z-10">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-primary">{testimonial.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Testimonials */}
        <section className="py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                More Reviews
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
                What Others Say
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {otherTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-card p-8 border border-border rounded-sm relative"
                >
                  <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6" />
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-primary">{testimonial.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary-foreground leading-tight mb-6">
              Ready to Create Your Story?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10">
              Join our satisfied clients and let us create an unforgettable experience for you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground text-sm font-medium tracking-wide uppercase hover:bg-background/90 transition-colors rounded-sm"
            >
              Start Planning
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
