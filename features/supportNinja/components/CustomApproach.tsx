"use client"
import { useState } from "react"

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
    <div className="w-full bg-[#bfc1b9]">
      <div className="container mx-auto max-w-7xl">
        <hr />
        <div className="flex flex-col gap-10 p-10 md:flex-row">
          <div className="md:w-1/2">
            <h2 className="font-serif text-6xl">
              Our customized <br /> approach
            </h2>
            <p className="mt-4 max-w-md text-gray-700">
              We tailor our strategies and services based on your roadblocks and needs, delivering a strategic
              outsourcing playbook — inclusive of technology, talent, and timing — that drives your business forward.
            </p>
          </div>

          <div className="md:w-1/2">
            <h3 className="mb-4 text-lg font-semibold">Get set up in 5 easy steps</h3>

            <div className="mb-6 flex space-x-5">
              {Object.keys(steps).map((tab) => (
                <button
                  key={tab}
                  className={`cursor-pointer rounded-full px-4 py-2 text-lg ${
                    selectedTab === tab ? "bg-white text-black" : "bg-white/30 text-black"
                  }`}
                  onClick={() => setSelectedTab(tab as keyof typeof steps)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {steps[selectedTab].map((step, index) => (
                <div key={index} className="flex max-w-xl items-start space-x-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border bg-white font-bold text-gray-800">
                    {index + 1}
                  </div>
                  <p className="font-sans text-black">{step}</p>
                </div>
              ))}
            </div>

            <button className="mt-15 w-[100%] rounded-full border-2 border-[#0c3a23] bg-[#0c3a23] px-4 py-2 font-medium text-white transition-all duration-300 hover:cursor-pointer hover:bg-transparent hover:text-black">
              View details
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}