import { motion } from "framer-motion"
import React from "react"
import { fadeInUp } from "../../../utils/animations"

const people = [
  {
    id: 1,
    src: "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c9aa1ce47b2_Avatar__07.webp",
    top: "15%",
    left: "20%",
  },
  {
    id: 2,
    src: "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c799cce47ab_Avatar__05.webp",
    top: "25%",
    left: "10%",
  },
  {
    id: 3,
    src: "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cc7dece47ad_Avatar__04.webp",
    top: "40%",
    left: "20%",
  },
  {
    id: 5,
    src: "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c188ece47af_Avatar__06.webp",
    top: "20%",
    left: "70%",
  },
  {
    id: 6,
    src: "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c87d2ce47ac_Avatar__03.webp",
    top: "55%",
    left: "15%",
  },
  {
    id: 7,
    src: "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c4f55ce47b0_Avatar__02.webp",
    top: "65%",
    left: "65%",
  },
  {
    id: 8,
    src: "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c6221ce47b1_Avatar__08.webp",
    top: "50%",
    left: "70%",
  },
  {
    id: 9,
    src: "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c514bce47ae_Avatar__01.webp",
    top: "52%",
    left: "75%",
  },
]

const Spanning = () => {
  return (
    <div className="relative flex w-full justify-center bg-[url('/bg/wave-haikei-2.svg')] bg-cover bg-top pb-[100px] text-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="container mx-auto max-w-7xl px-4 sm:px-6"
      >
        <div className="relative flex w-full justify-center bg-cover bg-top pb-[100px] text-center">
          <div className="container flex justify-center">
            <div className="flex max-w-lg flex-col justify-center px-4 pt-[350px] sm:px-0">
              <h2 className="mb-12 font-serif text-4xl text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl">
                Spanning a wider <br className="hidden sm:block" />
                world of talent
              </h2>
              <p className="mb-10 text-left text-base max-w-4xl font-semibold sm:text-base md:text-xl lg:font-medium xl:font-medium">
                What are the odds that the most qualified people in the world live in your zip code? We'll help you see
                further.
              </p>
              <p className="mb-10 text-left text-base max-w-4xl font-semibold sm:text-base md:text-xl lg:font-medium xl:font-medium">
                A global team extends your presence across time zones and languages—which means longer reach, constant
                uptime, and happier customers.
              </p>
              <p className="mb-10 text-left text-base font-bold sm:text-lg md:text-xl">
                It's time to go international. No passport required.
              </p>

              <div className="flex w-full justify-center">
                <div className="w-full sm:w-[75%]">
                  <button className="w-auto rounded-full border-2 border-[#0c3a23] bg-[#0c3a23] px-3 py-1.5 text-sm font-medium text-white transition-all duration-300 hover:cursor-pointer hover:bg-transparent hover:text-[#0c3a23] sm:px-4 sm:py-2 sm:text-base">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>

          {people.map((person) => (
            <img
              key={person.id}
              src={person.src}
              alt="Profile"
              className="absolute mt-[200px] hidden h-16 w-16 rounded-full border-4 border-red-500 lg:block"
              style={{ top: person.top, left: person.left }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Spanning
