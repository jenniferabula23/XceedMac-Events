"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "Why should I hire an event planner?",
    answer: "For many clients, this is their very first time planning an event. They are confused as to where to begin, how much everything should cost, and how to choose vendors that are the best fit for them. Planning an event is not only about choosing your colors, flowers, bridal party attire and menu. There are logistical matters to attend to, such as, the timing of events, parking situations, where the cake table is to be placed and knowing which vendors are reputable. We are here to guide you and to take care of all of these concerns. We are able to help save you time, money and, perhaps most importantly, your sanity so you can enjoy your event day!",
  },
  {
    question: "An event coordinator is expensive; can't my staff help out?",
    answer: "A coordinator is an investment in making sure your event day is beautiful & flawless while taking that stress & duty off you and your staff. Just like you, the staff of the organization want to enjoy the day and create lasting memories rather than working on an event.",
  },
  {
    question: "How early should clients start to plan their event? Hire an event coordinator?",
    answer: "Anywhere from 6-9 months prior to the event date is a good time to start planning. You don't want to wait until the last minute and feel overwhelmed, but you also don't want to be planning for too long. We do recommend hiring your event coordinator right away, even for the 'month of/day of' package. You'll want to get a contract signed to ensure the coordinator is available for your event date.",
  },
  {
    question: "My venue has a coordinator. Do I still need an event planner or day-of-coordinator?",
    answer: "A venue coordinator and an event planner do very different things. A venue coordinator works for the venue to maintain & manage the venue only. They ensure the facility runs smoothly not necessarily your event. An event coordinator works only for you to make every aspect run smoothly, greet all your vendors, send out a timeline prior, make sure you are having a great time celebrating and to ensure that your vision has become a reality.",
  },
  {
    question: "As a vendor, what are the benefits to working with an event coordinator such as you?",
    answer: "So often we are told by other vendors that we are very easy to work with and very professional and friendly. We are flexible and get along with everyone. We don't see ourselves as a higher rank than the other vendors, which some coordinators do. We are all there for the best interest of the client. It's so important to work as a team on the event day with all vendors making sure everything goes well and to ensure a smooth & flawless event.",
  },
  {
    question: "What makes your service different than others?",
    answer: "Our experience and our friendly personality. We are able to take care of all the details in an organized & business-like manner, while maintaining our poise, style & grace. We gain more experience with every event that we do, coming across all kinds of different clients, styles & trends. We truly love what we do and want every event to be perfect for our clients.",
  },
  {
    question: "Do you charge an initial consultation?",
    answer: "No, our initial consultation is complimentary. We like to take this time to get to know you & ensure that we're the best fit for your needs. We want to make sure that you feel comfortable trusting us to tend to the details on your big day. However, you pay a non-refundable amount to secure a booking officially.",
  },
  {
    question: "Will you work with vendors we select, or only those you recommend?",
    answer: "We will absolutely work with your choice of vendors; however, we have a great team of preferred vendors that we work with should you need any referrals.",
  },
  {
    question: "What type of packages do you offer?",
    answer: "We offer 2 main packages depending on the type of service the client is looking for and how much assistance they need. We have full planning and coordination services. We can also customize packages to meet specific needs.",
  },
  {
    question: "Do you take any kickbacks or commissions from any vendors?",
    answer: "No, we do not take kickbacks or commissions from any vendors. We only refer well qualified, reputable vendors who fit your needs, style & budget. Not accepting kickbacks ensures that your needs are our first priority.",
  },
  {
    question: "What does the term 'Day of Coordination' really mean?",
    answer: "There is no such thing as 'day of'. A coordinator cannot just show up to your event day blind with no information or meetings prior. Too many things can go wrong. A coordinator needs to meet with the client prior to the actual day to gather information and details so that he/she can be the contact person for the client ensuring that everything goes smoothly as well as be able to properly execute their vision and run a successful event. We call our Silver Package 'month of/day of' because we schedule the final detail meeting with our clients 4-6 weeks prior. We are able to really get to know our clients, gather all of their information & details for the big day, confirm times with all vendors and help to create a timeline.",
  },
  {
    question: "What areas do you service?",
    answer: "Though we are currently based in the Ashanti Region, Kumasi, we provide services across Ghana as a country. We are always available to travel within the country.",
  },
]

function FAQItem({ question, answer, isOpen, onClick }: { 
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="text-lg font-medium text-foreground pr-8">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <>
      <Navigation />
      <main>
        <PageHeader
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our event planning services."
        />

        {/* FAQ Section */}
        <section className="py-24 bg-background">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-24 bg-secondary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-6">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              We&apos;re here to help. Contact us for a complimentary consultation and let us answer all your questions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wide uppercase hover:bg-primary/90 transition-colors rounded-sm"
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
