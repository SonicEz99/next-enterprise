"use client"
import SupportNinjaStickyNavbar from "features/supportNinja/components/SupportNinjaStickyNavbar"
import SupportNinjaNavbar from "../../features/supportNinja/components/SupportNinjaNavbar"
import ServiceSelection from "features/supportNinja/components/Service"
import ButtonGetStarted from "features/supportNinja/components/getstartButton"
import Content from "features/supportNinja/components/Content"
import ServicesSection from "features/supportNinja/components/ServiceSection"
import TestimonialSlider from "features/supportNinja/components/Testimonials"
import Footer from "features/supportNinja/components/Footer"
import Spanning from "features/supportNinja/components/Spinning"
import CustomApproach from "features/supportNinja/components/CustomApproach"
import PeopleSection from "features/supportNinja/components/Peoplesection"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const supportNinjaPage = () => {
  return (
    <div className="bg-[#fffcfa] font-sans text-gray-800">
      <SupportNinjaStickyNavbar />
      <SupportNinjaNavbar />
      <main className="bg-[#f7e1d2] pt-20 md:pt-24">
        <div className="mx-auto px-8 sm:px-6 lg:px-8">
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "100px" }}
            variants={staggerChildren}
            className="py-12 md:py-16 lg:py-20"
          >
            <motion.div variants={fadeInUp} className="flex flex-col items-center justify-center text-center">
              <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="font-tenon mb-4 max-w-5xl text-lg leading-relaxed font-[500] text-[#474546] sm:text-lg md:max-w-xl md:text-xl lg:max-w-2xl lg:text-2xl xl:text-2xl"
              >
                Quickly and seamlessly scale your team with agile, highly customizable outsourcing solutions that power
                your growth.
              </motion.h3>
              <motion.h1
                variants={fadeInUp}
                className="w-full max-w-7xl font-serif text-5xl font-thin sm:text-4xl md:max-w-xl md:text-6xl lg:text-7xl xl:max-w-7xl xl:text-7xl"
              >
                Outsourcing worth talking about
              </motion.h1>
            </motion.div>
          </motion.section>

          <hr className="mx-auto mt-6 mb-8 max-w-7xl border-t border-gray-300" />

          <section className="py-8">
            <div className="mb-8 flex flex-col items-center justify-center text-center">
              <h2 className="mb-2 font-sans text-xl font-bold sm:text-2xl">
                Which outsourcing solutions are you looking for?
              </h2>
              <p className="font-semibold text-gray-700">Choose as many as you need.</p>
            </div>
            <div className="md:mx-10">
              <ServiceSelection />

              <div className="container mx-auto flex w-full justify-center">
                <ButtonGetStarted />
              </div>
            </div>

            <div className="flex justify-center">
              <Content />
            </div>
          </section>
        </div>
      </main>

      <div>
        <img
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cc5c4ce4784_Bottom%20Squiggle.svg"
          alt=""
          width="1792"
          height="128"
          className="w-full bg-[#fffcfa]"
        />
      </div>

      <div className="container mx-auto bg-[#fffcfa] px-4 sm:px-8 md:px-8 lg:px-8 xl:px-8">
        <section className="flex flex-col items-center justify-between py-16 xl:flex-row">
          <div className="w-full xl:w-1/2">
            <img
              src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c5b45ce4789_Character%20Illustration__Woman%20Watering%20Bar%20Chart.webp"
              loading="lazy"
              sizes="(max-width: 1725px) 100vw, 1725px"
              srcSet="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c5b45ce4789_Character%2520Illustration__Woman%2520Watering%2520Bar%2520Chart-p-500.webp 500w, https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c5b45ce4789_Character%2520Illustration__Woman%2520Watering%2520Bar%2520Chart-p-800.webp 800w, https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c5b45ce4789_Character%2520Illustration__Woman%2520Watering%2520Bar%2520Chart-p-1080.webp 1080w, https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c5b45ce4789_Character%20Illustration__Woman%20Watering%20Bar%20Chart.webp 1725w"
              alt=""
              className="w-full object-contain lg:w-full xl:mr-16 xl:w-full xl:pr-16"
            />
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mt-8 w-full space-y-6 xl:mt-0 xl:ml-16 xl:w-1/2 xl:pl-16 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8"
          >
            <h1 className="font-serif text-4xl font-light sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl ">
              Free up resources, accelerate growth, and solve for scale.
            </h1>
            <div className="mt-6 space-y-5 text-lg text-gray-700">
              <p>
                At SupportNinja, we combine cutting-edge technology with value-centricity to foster high-performing,
                reliable teams that turn growing pains into efficient pathways to profitability.
              </p>
              <p>
                Our customized, agile, AI-enabled solutions don't just deliver cost savings — they also help you achieve
                key business outcomes.
              </p>
              <p>
                We work closely with you to continually adjust strategies, realize efficiencies, and drive scale
                according to your unique needs. Plus, flexibility is baked in from day one, so you're never locked into
                rigid, long-term contracts.
              </p>
              <p>Now that's outsourcing worth talking about.</p>
            </div>
          </motion.div>
        </section>

        <section className="flex flex-col-reverse items-center justify-between gap-8 bg-[#fffcfa] py-16 xl:flex-row px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mt-8 w-full space-y-6 xl:mt-0 xl:w-2/3"
          >
            <h1 className="font-serif text-4xl font-light sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
              Don't grow it alone
            </h1>
            <div className="mt-6 w-full space-y-5 text-lg text-gray-700 sm:space-y-5 md:space-y-5 xl:space-y-6">
              <p className="text-xl">
                Don't let headcount become a headache. We'll connect you with talent that meets your needs.
              </p>
              <p className="text-xl">
                Your dedicated new team members will become experts in your world — your customers, your tech, your
                data, your systems — so they can expand on what you've built.
              </p>
            </div>
          </motion.div>
          <div className="flex w-full justify-start sm:justify-start md:justify-start lg:justify-start xl:w-1/3 xl:justify-end">
            <img
              className="lg:w-1/4"
              src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c4794ce4765_Illustration%3DPlant%201.svg"
              loading="lazy"
              alt="Illustration of green plant inside of red and white vase"
            />
          </div>
        </section>
        <ServicesSection />
      </div>

      <div className="mt-15 bg-[#fffcfa] md:px-16 xl:px-20">
        <TestimonialSlider />
      </div>

        <Spanning />
      <CustomApproach />
      <div className="px-8">
      </div>


      <div className="container mx-auto px-8 sm:px-6 lg:px-8">
        <PeopleSection />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-4">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
          className="flex flex-col-reverse items-center justify-between gap-12 py-16 xl:flex-row"
        >
          <motion.div variants={fadeInUp} className="relative mt-12 w-full px-4 xl:mt-0 xl:w-1/2">
            <img
              src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7fc2ce4791_Stock%20Image__Conference%20Room.webp"
              alt="Team meeting in conference room"
              sizes="50vw"
              srcSet="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7fc2ce4791_Stock%2520Image__Conference%2520Room-p-500.webp 500w, https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7fc2ce4791_Stock%2520Image__Conference%2520Room-p-800.webp 800w, https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7fc2ce4791_Stock%2520Image__Conference%2520Room-p-1080.webp 1080w, https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7fc2ce4791_Stock%2520Image__Conference%2520Room-p-1600.webp 1600w, https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7fc2ce4791_Stock%20Image__Conference%20Room.webp 1720w"
              className="w-full rounded-lg object-cover"
            />

            <div className="xs:w-40 xs:h-40 absolute bottom-4 left-4 h-36 w-36 translate-x-1/4 translate-y-1/4 transform shadow-xl sm:h-28 sm:w-28 md:h-40 md:w-40 lg:h-48 lg:w-48">
              <img
                loading="lazy"
                sizes="100vw"
                srcSet="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c34dace47c3_Tile%2520Illustrations__Document%25202-p-500.png 500w, https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c34dace47c3_Tile%20Illustrations__Document%202.webp 660w"
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c34dace47c3_Tile%20Illustrations__Document%202.webp"
                alt="Spot illustration of a pencil and a piece of paper."
                className="h-full w-full rounded-lg bg-[#f7e1d2] object-contain shadow-lg"
              />
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className="w-full space-y-6 px-4 md:max-w-2xl xl:w-1/2">
            <motion.h1
              variants={fadeInUp}
              className="font-serif text-4xl font-light sm:text-5xl md:text-6xl lg:ml-12 xl:ml-12"
            >
              Grow your career and unleash your potential.
            </motion.h1>
            <motion.div variants={fadeInUp} className="space-y-4 lg:ml-12 xl:ml-12">
              <p className="text-xl font-medium text-gray-900">
                Ready to expand your horizons at a truly global company?
              </p>
              <p className="text-xl text-gray-900">
                Your dedicated new team members will become experts in your world — your customers, your tech, your
                data, your systems — so they can expand on what you've built.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <button className="mt-5 w-auto rounded-full border-2 border-[#0c3a23] bg-[#0c3a23] px-6 py-3 font-medium text-white transition-all duration-300 hover:cursor-pointer hover:bg-transparent hover:text-[#0c3a23] lg:ml-12 xl:ml-12">
                View Open roles
              </button>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>

      <img
        className="w-full lg:w-full xl:w-full"
        src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c211cce4793_Section%20Curve%2003.svg"
        alt=""
      />
      <div className="w-full bg-[#f7e1d2] px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <section className="flex flex-col-reverse items-center justify-between gap-12 py-16 xl:flex-row">
            <div className="mt-8 w-full space-y-6 xl:mt-0 xl:w-1/2">
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="font-serif text-4xl font-light sm:text-5xl md:text-6xl"
              >
                We're better together. Start building your dream team.
              </motion.h1>
              <div className="space-y-4">
                <p className="text-xl">Design a custom outsourcing solution that drives results.</p>
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
              >
                <ButtonGetStarted />
              </motion.div>
            </div>

            <div className="w-full xl:w-1/2">
              <img
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cc4e1ce4794_Character%20Illustration__Footer-CTA.webp"
                loading="lazy"
                sizes="100vw"
                srcSet="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cc4e1ce4794_Character%2520Illustration__Footer-CTA-p-500.webp 500w, https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cc4e1ce4794_Character%2520Illustration__Footer-CTA-p-800.webp 800w, https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cc4e1ce4794_Character%2520Illustration__Footer-CTA-p-1080.webp 1080w, https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cc4e1ce4794_Character%20Illustration__Footer-CTA.webp 1638w"
                alt="An illustration of A woman holding a clipboard, a woman planting, and a man holding a cup and and phone"
                className="full-width-image"
              ></img>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default supportNinjaPage
