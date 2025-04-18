"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { fadeInUp } from "../../../utils/animations"

const steps = {
  "Management-as-a-Service": [
    "Deep dive with us into your goals and hiring needs.",
    "We’ll work with you to design a customized solution for your business.",
    "Once you're on board, we’ll source the best talent for you.",
    "We’ll create a customized training program that aligns with your goals.",
    "Sit back and enjoy the efficiencies ahead — it's grow time.",
  ],
  "Talent-as-a-Service": [
    "Deep dive with us into your goals and hiring needs.",
    "Access a private portal with hand-picked talent to browse and shortlist candidates.",
    "Start interviewing.",
    "Refine your list until you have the right team.",
    "With us beside you, welcome your new team aboard and prepare for scale!",
  ],
} as const

export default function CustomApproach() {
  const [selectedTab, setSelectedTab] = useState<keyof typeof steps>("Management-as-a-Service")

  return (
    <div className="font-san mx-auto w-full px-4 bg-[#bfc1b9]">
      <div className="container mx-auto sm:px-6">
        
        <div className="flex flex-col gap-6 px-4 py-8 sm:gap-8 sm:p-8 md:flex-col md:gap-10 md:p-10 xl:flex-row">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="lg:block lg:w-1/2 mx-auto"
          >
            <h2 className="font-serif max-w-xl mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Our customized <br className="hidden sm:block md:block lg:block" /> approach
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-base text-gray-700 sm:text-lg">
              We tailor our strategies and services based on your roadblocks and needs, delivering a strategic
              outsourcing playbook — inclusive of technology, talent, and timing — that drives your business forward.
            </p>
          </motion.div>

          
          <div className="w-full max-w-xl mx-auto md:w-full sm:block md:block lg:block ">
            <h3 className="mb-5 text-lg font-semibold">Get set up in 5 easy steps</h3>
            <div className="mb-6 flex flex-row gap-2 overflow-x-auto ">
              {Object.keys(steps).map((tab) => (
                <button
                  key={tab}
                  className={`rounded-full px-4 py-2 text-sm whitespace-nowrap w-full ${
                    selectedTab === tab ? "bg-white text-black font-semibold" : "bg-white/30 text-black font-semibold"
                  }`}
                  onClick={() => setSelectedTab(tab as keyof typeof steps)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="relative">
              {/* Vertical line connecting steps */}
              <div className="absolute top-4 left-4 h-[calc(100%-40px)] w-0.5 bg-gray-300"></div>

              <div className="space-y-8">
                {steps[selectedTab].map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="z-10 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-gray-800">
                      {index + 1}
                    </div>
                    <p className="ml-4 font-sans text-md font-semibold">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <button className="mt-10 mb-15 w-full rounded-full border-2 border-[#0c3a23] bg-[#0c3a23] py-3 font-medium text-white transition-all duration-300 hover:cursor-pointer hover:bg-transparent hover:text-black">
              View details
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
