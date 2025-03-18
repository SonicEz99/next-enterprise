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
      ease: "easeOut"
    }
  }
}

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const supportNinjaPage = () => {
  return (
    <div className="min-h-screen">
      <SupportNinjaStickyNavbar />
      <SupportNinjaNavbar />
      <main className="bg-[#f7e1d2] pt-20 md:pt-24">
        <div className="container mx-auto px-8 sm:px-6 lg:px-8">
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="py-12 md:py-16 lg:py-20"
          >
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col items-center justify-center text-center"
            >
              <motion.h3 
                variants={fadeInUp}
                className="font-tenon mb-4 max-w-4xl text-lg leading-relaxed font-[550] text-[#474546] sm:text-xl md:text-3xl"
              >
                Quickly and seamlessly scale your team with agile, highly customizable outsourcing solutions that power
                your growth.
              </motion.h3>
              <motion.h1 
                variants={fadeInUp}
                className="font-ivypresto w-full font-serif text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl"
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

            <ServiceSelection />

            <div className="flex justify-center">
              <ButtonGetStarted />
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
          className="w-full bg-white"
        />
      </div>

      <div className="container mx-auto bg-[#fffcfa] px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8">
        <section className="flex flex-col items-center justify-center gap-6 bg-[#fffcfa] py-16 md:flex-col lg:flex-col xl:flew-row">
          <img
            src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c5b45ce4789_Character%20Illustration__Woman%20Watering%20Bar%20Chart.webp"
            loading="lazy"
            sizes="(max-width: 1725px) 100vw, 1725px"
            srcSet="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c5b45ce4789_Character%2520Illustration__Woman%2520Watering%2520Bar%2520Chart-p-500.webp 500w, https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c5b45ce4789_Character%2520Illustration__Woman%2520Watering%2520Bar%2520Chart-p-800.webp 800w, https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c5b45ce4789_Character%2520Illustration__Woman%2520Watering%2520Bar%2520Chart-p-1080.webp 1080w, https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c5b45ce4789_Character%20Illustration__Woman%20Watering%20Bar%20Chart.webp 1725w"
            alt=""
            className="w-full object-contain lg:w-3/4 xl:w-1/2"
          />
          <div className="w-full space-y-2 md:w-full lg:w-full">
            <h1 className="font-serif text-4xl font-[100] sm:text-2xl md:text-5xl lg:text-5xl xl:text-6xl">
              Free up resources, accelerate growth, and solve for scale.
            </h1>
            <div className="font-tenon mt-10 w-full space-y-5 sm:space-y-5 md:space-y-5 xl:space-y-10 text-lg text-gray-700 sm:text-lg xl:text-xl">
              <p className="">
                At SupportNinja, we combine cutting-edge technology with value-centricity to foster high-performing,
                reliable teams that turn growing pains into efficient pathways to profitability.
              </p>
              <p className="">
                Our customized, agile, AI-enabled solutions don't just deliver cost savings — they also help you achieve
                key business outcomes.
              </p>
              <p className="">
                We work closely with you to continually adjust strategies, realize efficiencies, and drive scale
                according to your unique needs. Plus, flexibility is baked in from day one, so you're never locked into
                rigid, long-term contracts.
              </p>
              <p className="">Now that's outsourcing worth talking about.</p>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center justify-between gap-6 bg-[#fffcfa] py-16 md:flex-col lg:flex-row xl:flew-row">
          <div className="w-full space-y-2 md:w-full lg:w-full">
            <h1 className="font-serif text-4xl font-[100] sm:text-2xl md:text-5xl lg:text-5xl xl:text-6xl">Don't grow it alone</h1>
            <div className="font-tenon mt-10 w-full space-y-5 sm:space-y-5 md:space-y-5 xl:space-y-10 text-lg text-gray-700 sm:text-lg xl:text-xl">
              <p className="text-xl">
                Don't let headcount become a headache. We'll connect you with talent that meets your needs.
              </p>
              <p className="text-xl">
                Your dedicated new team members will become experts in your world — your customers, your tech, your
                data, your systems — so they can expand on what you've built.
              </p>
            </div>
          </div>
          <img
            className="lg:w-1/4"
            src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c4794ce4765_Illustration%3DPlant%201.svg"
            loading="lazy"
            alt="Illustration of green plant inside of red and white vase"
          />
        </section>
      </div>
      <div className="bg-[#fffcfa] xl:px-20">
        <ServicesSection />
      </div>
      <div className="bg-[#fffcfa] md:px-16 xl:px-20">
        <TestimonialSlider />
      </div>

      <Spanning />

      <CustomApproach />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PeopleSection />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
          className="flex flex-col-reverse items-center justify-between gap-[100]  md:flex-row"
        >
          <motion.div variants={fadeInUp} className="w-full md:w-1/2">
            <img
              src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7fc2ce4791_Stock%20Image__Conference%20Room.webp"
              alt=""
              sizes="50vw"
              srcSet="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7fc2ce4791_Stock%2520Image__Conference%2520Room-p-500.webp 500w, https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7fc2ce4791_Stock%2520Image__Conference%2520Room-p-800.webp 800w, https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7fc2ce4791_Stock%2520Image__Conference%2520Room-p-1080.webp 1080w, https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7fc2ce4791_Stock%2520Image__Conference%2520Room-p-1600.webp 1600w, https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7fc2ce4791_Stock%20Image__Conference%20Room.webp 1720w"
              className="w-full rounded-lg object-cover"
            />
          </motion.div>
          <motion.div 
            variants={fadeInUp}
            className="w-full space-y-6 sm:space-y-1 md:w-1/2"
          >
            <motion.h1 
              variants={fadeInUp}
              className="font-serif font-[200] text-4xl sm:text-5xl md:text-6xl"
            >
              Grow your career and unleash your potential.
            </motion.h1>
            <motion.div variants={fadeInUp} className="space-y-4 sm:space-y-1">
              <p className="font-medium text-gray-900">Ready to expand your horizons at a truly global company?</p>
              <p className=" text-gray-900">
                Your dedicated new team members will become experts in your world — your customers, your tech, your
                data, your systems — so they can expand on what you've built.
              </p>
            </motion.div>
            <div>
              <button className="w-auto mt-5 rounded-full border-2 border-[#0c3a23] bg-[#0c3a23] px-4 py-2 font-medium text-white transition-all duration-300 hover:cursor-pointer hover:bg-transparent hover:text-[#0c3a23]">
                {" "}
                View Open roles
              </button>
            </div>
          </motion.div>
        </motion.section>
      </div>

      <img
        className="w-full"
        src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c211cce4793_Section%20Curve%2003.svg"
        alt=""
      />
      <div className="w-full bg-[#f7e1d2]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <section className="flex flex-col-reverse items-center justify-between gap-[] py-16 md:flex-row">
            <div className="w-full space-y-6 md:w-1/2">
              <h1 className="text-4xl font-serif font-[200] sm:text-5xl md:text-6xl">
                We’re better together. Start building your dream team.
              </h1>
              <div className="space-y-4">
                <p className="text-xl">Design a custom outsourcing solution that drives results.</p>
              </div>
              <div>
                <ButtonGetStarted />
              </div>
            </div>

            <div className="w-full md:w-1/2">
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
