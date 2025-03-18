"use client"
import { useState } from "react"

function ButtonGetStarted() {
  return (
    <button className="group relative w-full mt-10 inline-flex items-center rounded-full bg-[#E33D3D] py-3 pr-14 pl-6 text-white transition-all duration-500 ease-out hover:cursor-pointer hover:bg-[#3f3f3f] hover:shadow-xl hover:ring-white/20 active:scale-95 xl:w-3xs">
      <span className="font-serif text-xl font-medium">Get started</span>
      <div className="absolute top-1/2 right-1 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white transition-all duration-500 ease-out group-hover:text-black group-hover:shadow-md">
        <svg
          className="arrow-animation transition-transform duration-500 ease-out"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="arrow-path"
            d="M5 12H19M19 12L12 5M19 12L12 19"
            stroke="#E33D3D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <style jsx>{`
        .group:hover .arrow-animation .arrow-path {
          animation: arrow-move 0.5s forwards;
        }

        @keyframes arrow-move {
          0% {
            transform: translateX(0);
            stroke: #e33d3d;
          }
          50% {
            transform: translateX(100%);
            opacity: 0;
          }
          51% {
            transform: translateX(-100%);
            opacity: 0;
            stroke: #000000;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
            stroke: #000000;
          }
        }
      `}</style>
    </button>
  )
}

export default ButtonGetStarted
