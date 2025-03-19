"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Content from "features/supportNinja/components/Content"
import CustomApproach from "features/supportNinja/components/CustomApproach"
import Footer from "features/supportNinja/components/Footer"
import ButtonGetStarted from "features/supportNinja/components/getstartButton"
import PeopleSection from "features/supportNinja/components/Peoplesection"
import ServiceSelection from "features/supportNinja/components/Service"
import ServicesSection from "features/supportNinja/components/ServiceSection"
import Spanning from "features/supportNinja/components/Spinning"
import SupportNinjaStickyNavbar from "features/supportNinja/components/SupportNinjaStickyNavbar"
import TestimonialSlider from "features/supportNinja/components/Testimonials"
import SupportNinjaNavbar from "../../features/supportNinja/components/SupportNinjaNavbar"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
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
    <div className="mx-auto w-full bg-[#fffcfa] bg-red-600 font-sans text-gray-800">
      <div className="bg-[#fffcfa]">
        <div className="mx-8 sm:mx-10 md:mx-15 lg:mx-22 xl:mx-10">
          <SupportNinjaStickyNavbar />
        </div>
        <SupportNinjaNavbar />
        <main className="bg-[#f7e1d2] pt-20 md:pt-24">
          <div className="mx-8 sm:mx-8 md:mx-15 lg:mx-22 xl:mx-30">
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
                  className="font-tenon mb-2 max-w-5xl text-[15px] leading-relaxed font-semibold text-[#66615f] sm:text-lg sm:font-semibold md:max-w-xl md:text-[20px] md:font-semibold lg:max-w-2xl lg:text-2xl xl:max-w-4xl xl:font-[#2b2c30] xl:text-3xl xl:font-medium"
                >
                  Quickly and seamlessly scale your team with agile, highly customizable outsourcing solutions that
                  power your growth.
                </motion.h3>
                <motion.h1
                  variants={fadeInUp}
                  className="w-full max-w-7xl font-serif text-[45px] font-bold font-thin sm:text-4xl md:max-w-xl md:text-6xl lg:text-7xl xl:max-w-full xl:text-[83px] xl:font-thin"
                >
                  Outsourcing worth talking about
                </motion.h1>
              </motion.div>
            </motion.section>
            <hr className="container mx-auto mt-6 mb-8 border-t border-[#bfc1b9]" />

            <section className="flex w-full flex-col py-8">
              <div className="mb-8 flex flex-col">
                <h2 className="mb-2 text-center font-sans text-[15px] font-bold sm:text-center sm:text-[15px] md:text-start md:text-2xl lg:text-center lg:text-3xl xl:text-center xl:text-3xl">
                  Which outsourcing solutions are you looking for?
                </h2>
                <p className="text-center text-xs font-medium sm:text-xs md:text-center md:text-lg md:font-semibold lg:text-2xl xl:mb-5 xl:text-center xl:font-[#2b2c30] xl:text-base">
                  Choose as many as you need.
                </p>
              </div>
              <div className="container mx-auto w-full">
                <ServiceSelection />
              </div>

              <div className="container mx-auto flex w-full justify-center">
                <ButtonGetStarted />
              </div>

              <div className="container w-full self-center">
                <Content />
              </div>
            </section>
          </div>
        </main>

        <div>
          <Image
            src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cc5c4ce4784_Bottom%20Squiggle.svg"
            alt=""
            width={100}
            height={100}
            className="w-full bg-[#fffcfa]"
          />
        </div>

        <div className="mx-8 bg-[#fffcfa] sm:mx-10 md:mx-15 lg:mx-22 xl:mx-30">
          <section className="flex flex-col items-center justify-between bg-[#fffcfa] py-16 xl:flex-row">
            <div className="w-full xl:w-1/2">
              <Image
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c5b45ce4789_Character%2520Illustration__Woman%2520Watering%2520Bar%2520Chart-p-1080.webp"
                width={600}
                height={600}
                alt=""
                className="w-full object-contain lg:w-full xl:mr-16 xl:w-full xl:pr-16"
              />
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mt-8 w-full space-y-6 bg-[#fffcfa] lg:px-8 xl:mt-0 xl:ml-2 xl:w-1/2 xl:pl-15"
            >
              <div className="mr-0 sm:mr-0 md:mr-0 lg:mr-0 ">
                <h1 className="font-serif text-4xl font-light sm:text-4xl md:text-5xl lg:text-5xl xl:max-w-2xl xl:text-6xl">
                  Free up resources, accelerate growth, and solve for scale.
                </h1>
                <div className="text-md sm:text-md mt-6 space-y-5 font-semibold text-[#2b2c30] sm:font-medium md:max-w-3xl md:text-xl md:font-semibold lg:max-w-2xl lg:text-2xl xl:text-2xl xl:font-normal xl:text-[#727173]">
                  <p>
                    At SupportNinja, we combine cutting-edge technology with value-centricity to foster high-performing,
                    reliable teams that turn growing pains into efficient pathways to profitability.
                  </p>
                  <p>
                    Our customized, agile, AI-enabled solutions don't just deliver cost savings — they also help you
                    achieve key business outcomes.
                  </p>
                  <p>
                    We work closely with you to continually adjust strategies, realize efficiencies, and drive scale
                    according to your unique needs. Plus, flexibility is baked in from day one, so you're never locked
                    into rigid, long-term contracts.
                  </p>
                  <p>Now that's outsourcing worth talking about.</p>
                </div>
              </div>
            </motion.div>
          </section>

          <section className="mx-auto flex flex-col-reverse items-center justify-between gap-8 bg-[#fffcfa] py-16 xl:max-w-6xl xl:flex-row">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mt-8 w-full space-y-6 xl:mt-0 xl:w-2/3"
            >
              <div></div>
              <div className="pl-0 sm:pl-0 md:pl-0">
                <h1 className="font-serif text-4xl font-light sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
                  Don't grow it alone
                </h1>
                <div className="mt-6 w-full space-y-5 text-lg text-gray-700 sm:space-y-5 md:space-y-5 xl:space-y-6">
                  <p className="text-md sm:text-md font-semibold text-[#8d8d8d] sm:font-medium md:max-w-xl md:text-xl md:font-semibold lg:max-w-2xl lg:text-2xl xl:font-[#2b2c30] xl:text-2xl xl:font-[400] xl:font-normal">
                    Don't let headcount become a headache. We'll connect you with talent that meets your needs.
                  </p>
                  <p className="text-md sm:text-md font-semibold text-[#8d8d8d] sm:font-medium md:max-w-xl md:text-xl md:font-semibold lg:max-w-2xl lg:text-2xl xl:font-[#2b2c30] xl:text-2xl xl:font-[400] xl:font-normal">
                    Your dedicated new team members will become experts in your world — your customers, your tech, your
                    data, your systems — so they can expand on what you've built.
                  </p>
                </div>
              </div>
            </motion.div>
            <div className="flex w-full justify-start sm:justify-start md:justify-start lg:justify-start xl:w-1/4 xl:justify-end">
              <Image
                className="md:w-1/4 lg:w-1/2"
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c4794ce4765_Illustration%3DPlant%201.svg"
                loading="lazy"
                width={100}
                height={100}
                alt="Illustration of green plant inside of red and white vase"
              />
            </div>
            <hr className="mx-0 mt-6 border-t border-[#bfc1b9] bg-[#fffcfa] sm:mx-0 md:mx-0 lg:mx-0 xl:mx-20" />
          </section>
          <div className="container mx-auto max-w-6xl">
            <ServicesSection />
            <TestimonialSlider />
          </div>
        </div>

        <div className="mt-15 bg-[#fffcfa] md:px-16 xl:px-20"></div>

        <Spanning />
        <CustomApproach />

        <div className="mx-8 sm:mx-8 md:mx-[60px] lg:mx-[88px] xl:mx-[200px] xl:max-w-[1500px]">
          <PeopleSection />
        </div>

        <div className="mx-8 sm:mx-8 md:mx-15 lg:mx-22 xl:mx-30">
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="flex flex-col-reverse items-center justify-between gap-12 py-16 xl:flex-row"
          >
            <motion.div variants={fadeInUp} className="relative mt-12 w-full xl:mt-0 xl:w-1/2">
              <Image
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7fc2ce4791_Stock%20Image__Conference%20Room.webp"
                alt="Team meeting in conference room"
                sizes="50vw"
                width={600}
                height={600}
                className="w-full rounded-lg object-cover"
              />

              <div className="xs:w-40 xs:h-40 absolute bottom-4 left-4 h-36 w-36 translate-x-1/4 translate-y-1/4 transform shadow-xl sm:h-28 sm:w-28 md:h-40 md:w-40 lg:h-48 lg:w-48">
                <Image
                  loading="lazy"
                  sizes="100vw"
                  width={200}
                  height={200}
                  src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c34dace47c3_Tile%20Illustrations__Document%202.webp"
                  alt="Spot illustration of a pencil and a piece of paper."
                  className="h-full w-full rounded-lg bg-[#f7e1d2] object-contain shadow-lg"
                />
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="w-full space-y-6 md:max-w-2xl">
              <motion.h1
                variants={fadeInUp}
                className="font-serif text-4xl font-light sm:text-5xl md:text-6xl lg:ml-12 xl:ml-12"
              >
                Grow your career and unleash your potential.
              </motion.h1>

              <motion.div variants={fadeInUp} className="space-y-4 lg:ml-12 xl:ml-12">
                <p className="text-based sm:text-based font-bold text-gray-900 md:text-lg xl:text-xl">
                  Ready to expand your horizons at a truly global company?
                </p>
                <p className="text-based sm:text-based font-semibold text-gray-600 md:text-lg xl:text-xl">
                  Your dedicated new team members will become experts in your world — your customers, your tech, your
                  data, your systems — so they can expand on what you've built.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <button className="mt-5 w-auto rounded-full border-2 border-[#0c3a23] bg-[#0c3a23] px-4 py-3 font-medium text-white transition-all duration-300 hover:cursor-pointer hover:bg-transparent hover:text-[#0c3a23] lg:ml-12 xl:ml-12">
                  View Open roles
                </button>
              </motion.div>
            </motion.div>
          </motion.section>
        </div>

        <Image
          className="w-full lg:w-full xl:w-full"
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c211cce4793_Section%20Curve%2003.svg"
          alt=""
          width={100}
          height={100}
        />

        <div className="w-full bg-[#f7e1d2]">
          <div className="mx-8 bg-[#f7e1d2] sm:mx-8 md:mx-15 lg:mx-22 xl:mx-30">
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
                  <p className="text-xs font-bold text-gray-900 sm:text-xs md:text-lg xl:text-xl">
                    Design a custom outsourcing solution that drives results.
                  </p>
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

              <div className="container mx-auto w-full xl:w-1/2">
                <Image
                  src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cc4e1ce4794_Character%20Illustration__Footer-CTA.webp"
                  loading="lazy"
                  sizes="100vw"
                  width={800}
                  height={600}
                  alt="An illustration of A woman holding a clipboard, a woman planting, and a man holding a cup and and phone"
                  className="full-width-image"
                ></Image>
              </div>
            </section>
          </div>
        </div>
        <div className="bg-[#bfc1b9]">
          <div className="mx-8 sm:mx-8 md:mx-15 lg:mx-22 xl:mx-30">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default supportNinjaPage
