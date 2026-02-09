import Link from "next/link"
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react"

const quickLinks = [
  { href: "/about", label: "About & Services" },
  { href: "/packages", label: "Our Packages" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
]

const services = [
  "Wedding Planning",
  "Corporate Events",
  "Event Coordination",
  "Social Gatherings",
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div>
              <span className="text-2xl font-semibold tracking-wide">
                XceedMac
              </span>
              <span className="text-sm text-primary font-medium tracking-widest uppercase ml-2">
                Events
              </span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Creating unforgettable experiences that exceed your expectations. Your trusted event planning partner.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/xceedmac?utm_medium=copy_link" className="text-background/70 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://web.facebook.com/XceedMac/" className="text-background/70 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wide">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-background/70">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wide">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/70">Ashanti Region, Kumasi, Ghana</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+233558189100" className="text-background/70 hover:text-primary transition-colors">
                  +233 558-189-100
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:xceedmac@gmail.com" className="text-background/70 hover:text-primary transition-colors">
                  xceedmac@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            &copy; {new Date().getFullYear()} XceedMac Events. All rights reserved.
          </p>
          <p className="text-background/50 text-sm">
            Beyond Limit
          </p>
        </div>
      </div>
    </footer>
  )
}
