import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"
import { fadeInUp, staggerChildren } from "../../../utils/animations"

function Content() {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerChildren}
      className="container mt-[150px] flex w-full flex-col gap-10 rounded-2xl bg-[#bfc1b9] px-4 py-6 xl:flex-row xl:justify-between"
    >
      <motion.div 
        variants={fadeInUp}
        className="flex items-center justify-center p-4 xl:w-1/3 xl:justify-start"
      >
        <h2 className="text-center text-lg font-light text-gray-800 block sm:block md:hidden lg:hidden xl:hidden">
          <b>
            Driving better business results  for <br />200+ companies.
          </b>
        </h2>
        <h2 className="text-center text-2xl font-light text-gray-800 hidden sm:hidden md:block lg:block lg:block xl:text-left">
          <b>
            Driving better business results  <br /> for 200+ companies.
          </b>
        </h2>
      </motion.div>
      <motion.div 
        variants={fadeInUp}
        className="flex flex-wrap items-center justify-center sm:justify-center md:justify-center lg:justify-center xl:justify-end gap-4 px-2 xl:w-2/3"
      >
        <Image
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c0380ce484b_B%26MG_foundation.svg"
          alt="Company Logo"
          width={100}
          height={100}
          className="h-6 w-22 object-contain sm:h-8"
        />
        <Image
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64f9e7ede9b6df55f6f1a029_Midjourney%20Logo%20(1).svg"
          alt="Company Logo"
          width={100}
          height={100}
          className="h-6 w-22 object-contain sm:h-8"
        />
        <Image
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/65a7f1f93afe1bee1bb429a4_Happy%20Socks%20Logo.svg"
          alt="Company Logo"
          width={100}
          height={100}
          className="h-6 w-22 object-contain sm:h-8"
        />
        <Image
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c0a86ce483a_Customer%20Logo__Vidyard.svg"
          alt="Company Logo"
          width={100}
          height={100}
          className="h-6 w-22 object-contain sm:h-8 sm:w-8"
        />
        <Image
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cd632ce484a_redweek.svg"
          alt="Company Logo"
          width={100}
          height={100}
          className="h-6 w-22 object-contain sm:h-8"
        />
        <Image
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cd161ce4839_Customer%20Logo__Product%20Madness.svg"
          alt="Company Logo"
          width={100}
          height={50}
          className="h-6 w-22 object-contain sm:h-8"
        />
      </motion.div>
    </motion.div>
  )
}

export default Content