"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"
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
        

        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-8 text-xl text-gray-700 italic font-semibold md:text-2xl">"{testimonials[currentIndex]!.quote}"</p>
          <div>
            <p className="font-semibold text-gray-800">{testimonials[currentIndex]!.author}</p>
            <p className="text-gray-600">{testimonials[currentIndex]!.title}</p>
          </div>
        </div>

        <div className=" flex  items-center justify-around md:flex-row">
          <div className="mb-6 flex justify-center mt-8 gap-2 hidden sm:hidden md:flex lg:flex xl:flex">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-3 bg-gray-800" : "w-2 bg-gray-300"
                }`}
                onClick={() => goToSpecificSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                hidden={window.innerWidth < 768}
              />
            ))}
          </div>
          <hr className="container mx-auto max-w-lg border-t border-[#bfc1b9] hidden block sm:hidden md:block md:max-w-3xs lg:block xl:block xl:max-w-2xl" />
          <div className="mx-auto flex overflow-hidden rounded-full bg-[#0c3a23] md:mx-0">
            <button
              onClick={goToPrevious}
              className="cursor-pointer p-3 px-4 text-white transition-colors hover:text-[#edbc4f]"
              aria-label="Previous testimonial"
            >
              <ArrowLeft width={16} height={16} />
            </button>
            <button
              onClick={goToNext}
              className="cursor-pointer p-3 px-4 text-white transition-colors hover:text-[#edbc4f]"
              aria-label="Next testimonial"
            >
              <ArrowRight width={16} height={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSlider
