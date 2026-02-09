import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { AboutPreview } from "@/components/home/about-preview"
import { PackagesPreview } from "@/components/home/packages-preview"
import { StatsSection } from "@/components/home/stats-section"
import { TestimonialsPreview } from "@/components/home/testimonials-preview"
import { CTASection } from "@/components/home/cta-section"
import { FloatingCTA } from "@/components/floating-cta"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AboutPreview />
        <PackagesPreview />
        <StatsSection />
        <TestimonialsPreview />
        <CTASection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
