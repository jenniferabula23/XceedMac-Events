"use client"

import React from "react"

import { useState } from "react"
import { Send, CheckCircle, Sparkles, PartyPopper } from "lucide-react"

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    contactMethod: "",
    service: "",
    eventType: "",
    days: "",
    guests: "",
    additionalInfo: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (isSubmitted) {
    return (
      <div className="bg-card border border-border rounded-lg p-12 text-center animate-fade-in">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-slow">
          <PartyPopper className="w-10 h-10 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-4">
          Thank You for Your Inquiry!
        </h3>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          We have received your booking request. Our team will review your details and get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false)
            setFormData({
              fullName: "",
              email: "",
              phone: "",
              contactMethod: "",
              service: "",
              eventType: "",
              days: "",
              guests: "",
              additionalInfo: "",
            })
          }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium tracking-wide uppercase hover:bg-primary/90 transition-all duration-300 rounded-sm"
        >
          <Sparkles className="w-4 h-4" />
          Submit Another Request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 md:p-12 animate-slide-up">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-2">
          <label htmlFor="fullName" className="block text-sm font-medium text-foreground">
            Full Name <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-foreground">
            Email <span className="text-primary">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground"
            placeholder="your@email.com"
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-foreground">
            Phone Number <span className="text-primary">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground"
            placeholder="+233 XXX XXX XXX"
          />
        </div>

        {/* Preferred Contact Method */}
        <div className="space-y-2">
          <label htmlFor="contactMethod" className="block text-sm font-medium text-foreground">
            Preferred Contact Method <span className="text-primary">*</span>
          </label>
          <select
            id="contactMethod"
            name="contactMethod"
            required
            value={formData.contactMethod}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground"
          >
            <option value="">Select method</option>
            <option value="email">Email</option>
            <option value="phone">Phone/WhatsApp</option>
          </select>
        </div>

        {/* Service Selection */}
        <div className="space-y-2">
          <label htmlFor="service" className="block text-sm font-medium text-foreground">
            What service do you need? <span className="text-primary">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground"
          >
            <option value="">Select a package</option>
            <option value="elite">Elite Package</option>
            <option value="international">International Package</option>
            <option value="full">Full Package</option>
            <option value="planning">Planning & Coordination</option>
            <option value="single-coordination">Single Service: Coordination</option>
            <option value="single-protocol">Single Service: Protocol</option>
            <option value="single-security">Single Service: Security</option>
            <option value="single-janitors">Single Service: Janitors</option>
          </select>
        </div>

        {/* Event Type */}
        <div className="space-y-2">
          <label htmlFor="eventType" className="block text-sm font-medium text-foreground">
            Type of Event <span className="text-primary">*</span>
          </label>
          <select
            id="eventType"
            name="eventType"
            required
            value={formData.eventType}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground"
          >
            <option value="">Select event type</option>
            <option value="wedding">Wedding</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="corporate">Corporate Event</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Number of Days */}
        <div className="space-y-2">
          <label htmlFor="days" className="block text-sm font-medium text-foreground">
            How many days? <span className="text-primary">*</span>
          </label>
          <select
            id="days"
            name="days"
            required
            value={formData.days}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground"
          >
            <option value="">Select duration</option>
            <option value="1">1 day</option>
            <option value="2">2 days</option>
            <option value="3">3 days</option>
            <option value="4+">4+ days</option>
          </select>
        </div>

        {/* Number of Guests */}
        <div className="space-y-2">
          <label htmlFor="guests" className="block text-sm font-medium text-foreground">
            How many guests? <span className="text-primary">*</span>
          </label>
          <select
            id="guests"
            name="guests"
            required
            value={formData.guests}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground"
          >
            <option value="">Select guest count</option>
            <option value="<100">Less than 100</option>
            <option value="100-200">100-200</option>
            <option value="200-300">200-300</option>
            <option value="300-400">300-400</option>
            <option value="400+">400+</option>
          </select>
        </div>

        {/* Additional Information */}
        <div className="md:col-span-2 space-y-2">
          <label htmlFor="additionalInfo" className="block text-sm font-medium text-foreground">
            Additional Information
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            rows={4}
            value={formData.additionalInfo}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground resize-none"
            placeholder="Tell us more about your event vision, specific requirements, or any questions you have..."
          />
        </div>
      </div>

      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wide uppercase hover:bg-primary/90 transition-all duration-300 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/30"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Submit Booking Request
              <CheckCircle className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  )
}
