"use client"

import React, { useState } from "react"

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const goToPrevious = () => {
    const isFirstTestimonial = currentIndex === 0
    const newIndex = isFirstTestimonial ? testimonials.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastTestimonial = currentIndex === testimonials.length - 1
    const newIndex = isLastTestimonial ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSpecificSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }
  const testimonials = [
    {
      quote:
        "SupportNinja has really been flexible with us as we're growing the business, and have been really responsive and accommodating. They've been integral to helping our business grow.",
      author: "Pam Schwab",
      title: "VP of Quality & Customer Care, SymmetryRx",
    },
    {
      quote:
        "The team at SupportNinja consistently exceeds our expectations with their attention to detail and quick response times.",
      author: "Michael Johnson",
      title: "CTO, TechForward Inc.",
    },
    {
      quote:
        "Working with SupportNinja has transformed our customer service operations. Their dedicated team feels like an extension of our own.",
      author: "Sarah Williams",
      title: "Head of Operations, GrowthScale",
    },
    {
      quote:
        "Since partnering with SupportNinja, our customer satisfaction scores have increased by 40%. Their expertise has been invaluable.",
      author: "David Chen",
      title: "Customer Success Director, NovaCloud",
    },
  ]

  return (
    <section className="mx-auto max-w-7xl px-4">
      <h2 className="mb-10 text-center font-serif text-5xl text-gray-800 md:text-5xl">Why our clients stick with us</h2>

      <div className="relative mx-auto max-w-7xl rounded-xl bg-[#f7e1d2] p-8 md:p-16">
        <div className="absolute top-8 left-8 text-gray-300">
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 90 Q30 70 10 50 Q30 30 10 10" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M30 90 Q50 70 30 50 Q50 30 30 10" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>
        <div className="absolute right-8 bottom-8 text-gray-300">
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M90 10 Q70 30 90 50 Q70 70 90 90" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M70 10 Q50 30 70 50 Q50 70 70 90" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>

        <div className="mb-10 text-center max-w-3xl mx-auto">
          <p className="mb-8 text-xl text-gray-700 italic md:text-2xl">"{testimonials[currentIndex]!.quote}"</p>
          <div>
            <p className="font-semibold text-gray-800">{testimonials[currentIndex]!.author}</p>
            <p className="text-gray-600">{testimonials[currentIndex]!.title}</p>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-3 bg-gray-800" : "w-2 bg-gray-300"
              }`}
              onClick={() => goToSpecificSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex justify-end mr-15">
          <div className="flex overflow-hidden rounded-full bg-green-900">
            <button
              onClick={goToPrevious}
              className="p-3 text-white transition-colors hover:bg-green-800"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="p-3 text-white transition-colors hover:bg-green-800"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSlider
