"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles, X, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useMemo, useEffect } from "react"

// Define types based on your JSON structure
type GalleryItem = {
  title: string;
  category: string;
  image: string;
}

type GalleryData = {
  images: GalleryItem[];
}

const categories = ["All", "Weddings", "Corporate", "Social Events"]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(9)
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  // Fix hydration - only render animations after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  // Load images from the API route
  useEffect(() => {
    const loadImages = async () => {
      setLoading(true)
      try {
        const response = await fetch('/gallery-data.json')
        const data: GalleryData = await response.json()
        setGalleryItems(data.images)
      } catch (error) {
        console.error('Error loading gallery images:', error)
        // Fallback to empty array
        setGalleryItems([])
      } finally {
        setLoading(false)
      }
    }

    loadImages()
  }, [])

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return galleryItems
    }
    return galleryItems.filter((item) => item.category === activeCategory)
  }, [activeCategory, galleryItems])

  const visibleItems = filteredItems.slice(0, visibleCount)
  const hasMore = visibleCount < filteredItems.length

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 9, filteredItems.length))
  }

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setVisibleCount(9)
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % visibleItems.length)
  }

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + visibleItems.length) % visibleItems.length)
  }

  return (
    <>
      <Navigation />
      <main>
        <PageHeader
          title="Our Gallery"
          subtitle="Browse through our portfolio of beautifully executed events and celebrations."
        />

        {/* Gallery Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-6 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 rounded-full ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                      : "bg-muted text-muted-foreground hover:bg-primary/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Loading State */}
            {loading && (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                <p className="mt-4 text-muted-foreground">Loading gallery...</p>
              </div>
            )}

            {/* Results Count */}
            {!loading && (
              <div className="text-center mb-8">
                <p className="text-muted-foreground text-sm">
                  Showing {visibleItems.length} of {filteredItems.length} {activeCategory === "All" ? "events" : activeCategory.toLowerCase()}
                </p>
              </div>
            )}

            {/* Gallery Grid */}
            {!loading && galleryItems.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
                {visibleItems.map((item, index) => (
                  <div
                    key={`${item.category}-${index}`}
                    onClick={() => openLightbox(index)}
                    className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer animate-slide-up hover:shadow-2xl transition-all duration-500"
                  >
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <h3 className="text-xl font-bold text-primary-foreground mb-2 px-4 text-center">
                        {item.title}
                      </h3>
                      <p className="text-secondary text-sm tracking-wide uppercase">
                        {item.category}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Load More Button */}
            {!loading && hasMore && (
              <div className="flex justify-center mt-12">
                <button
                  onClick={loadMore}
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wide uppercase hover:bg-primary/90 transition-all duration-300 rounded-sm hover:scale-105 shadow-lg"
                >
                  Load More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}

            {/* No Results */}
            {!loading && filteredItems.length === 0 && galleryItems.length > 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No images found in this category.</p>
              </div>
            )}

            {/* No Images at all */}
            {!loading && galleryItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No gallery images found. Please run the gallery generator script.</p>
              </div>
            )}
          </div>
        </section>

        {/* Packages CTA */}
        <section className="py-16 bg-muted">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm tracking-widest uppercase font-medium">
                Special Offer
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Create Your Own Memories?
            </h2>
            <p className="text-muted-foreground mb-8">
              Check out our packages and find the perfect fit for your event.
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

        {/* CTA - Only render animations after mount to avoid hydration issues */}
        <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/80 relative overflow-hidden">
          {mounted && (
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
          )}
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground leading-tight mb-6">
              Let Us Create Your <span className="text-secondary">Vision</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10">
              Ready to create your own unforgettable event? Contact us today to start planning.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground text-sm font-medium tracking-wide uppercase hover:bg-secondary/90 transition-all duration-300 rounded-sm hover:scale-105"
            >
              Start Planning
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />

      {/* Lightbox */}
      {lightboxOpen && visibleItems.length > 0 && (
        <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center animate-fade-in">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 p-2 text-background hover:text-secondary transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 p-2 text-background hover:text-secondary transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <div className="relative w-full max-w-5xl mx-4 aspect-video">
            <Image
              src={visibleItems[lightboxIndex]?.image || "/placeholder.svg"}
              alt={visibleItems[lightboxIndex]?.title || "Gallery image"}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 p-2 text-background hover:text-secondary transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <h3 className="text-xl font-bold text-background mb-1">
              {visibleItems[lightboxIndex]?.title}
            </h3>
            <p className="text-secondary text-sm">{visibleItems[lightboxIndex]?.category}</p>
          </div>
        </div>
      )}
    </>
  )
}