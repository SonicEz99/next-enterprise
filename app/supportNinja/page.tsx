import SupportNinjaStickyNavbar from "features/supportNinja/components/SupportNinjaStickyNavbar"
import SupportNinjaNavbar from "../../features/supportNinja/components/SupportNinjaNavbar"
import ServiceSelection from "features/supportNinja/components/Service"
import ButtonGetStarted from "features/supportNinja/components/getstartButton"
import Content from "features/supportNinja/components/Content"
import ServicesSection from "features/supportNinja/components/ServiceSection"
import TestimonialSlider from "features/supportNinja/components/Testimonials"
import Footer from "features/supportNinja/components/Footer"
import Spanning from "features/supportNinja/components/Spining"
import CustomApproach from "features/supportNinja/components/CustomApproach"
import PeopleSection from "features/supportNinja/components/Peoplesection"

const supportNinjaPage = () => {
  return (
    <div className="min-h-screen">
      <SupportNinjaStickyNavbar />
      <SupportNinjaNavbar />
      <main className="bg-[#f7e1d2] pt-20 md:pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <section className="py-12 md:py-16 lg:py-20">
            <div className="flex flex-col items-center justify-center text-center">
              <h3 className="mb-4 max-w-4xl text-xl leading-relaxed text-[#474546] sm:text-xl md:text-3xl">
                Quickly and seamlessly scale your team with agile, highly customizable outsourcing solutions that power
                your growth.
              </h3>
              <h1 className="w-full font-serif text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl">
                Outsourcing worth talking about
              </h1>
            </div>
          </section>

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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section className="flex flex-col items-center gap-6 gap-16 py-16 md:flex-row">
          <img
            src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c5b45ce4789_Character%20Illustration__Woman%20Watering%20Bar%20Chart.webp"
            loading="lazy"
            sizes="(max-width: 1725px) 100vw, 1725px"
            srcSet="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c5b45ce4789_Character%2520Illustration__Woman%2520Watering%2520Bar%2520Chart-p-500.webp 500w, https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c5b45ce4789_Character%2520Illustration__Woman%2520Watering%2520Bar%2520Chart-p-800.webp 800w, https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c5b45ce4789_Character%2520Illustration__Woman%2520Watering%2520Bar%2520Chart-p-1080.webp 1080w, https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c5b45ce4789_Character%20Illustration__Woman%20Watering%20Bar%20Chart.webp 1725w"
            alt=""
            className="w-full object-contain md:w-1/2"
          />
          <div className="w-full space-y-2 md:w-1/2">
            <h1 className="text-6xl font-semibold">Free up resources, accelerate growth, and solve for scale.</h1>
            <div className="mt-10 w-full space-y-10">
              <p className="text-xl">
                At SupportNinja, we combine cutting-edge technology with value-centricity to foster high-performing,
                reliable teams that turn growing pains into efficient pathways to profitability.
              </p>
              <p className="text-xl">
                Our customized, agile, AI-enabled solutions don’t just deliver cost savings — they also help you achieve
                key business outcomes.
              </p>
              <p className="text-xl">
                We work closely with you to continually adjust strategies, realize efficiencies, and drive scale
                according to your unique needs. Plus, flexibility is baked in from day one, so you’re never locked into
                rigid, long-term contracts.
              </p>
              <p className="text-xl">Now that’s outsourcing worth talking about.</p>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center justify-between gap-6 gap-16 py-16 md:flex-row">
          <div className="w-full space-y-2 md:w-1/2">
            <h1 className="text-6xl font-semibold">Don’t grow it alone</h1>
            <div className="mt-10 w-full space-y-10">
              <p className="text-xl">
                Don't let headcount become a headache. We’ll connect you with talent that meets your needs.
              </p>
              <p className="text-xl">
                Your dedicated new team members will become experts in your world — your customers, your tech, your
                data, your systems — so they can expand on what you’ve built.
              </p>
            </div>
          </div>
          <img
            className=""
            src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c4794ce4765_Illustration%3DPlant%201.svg"
            loading="lazy"
            alt="Illustration of green plant inside of red and white vase"
          />
        </section>
      </div>

      <ServicesSection />
      <TestimonialSlider />
      <Spanning/>
      <CustomApproach/>
      <PeopleSection/>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section className="flex flex-col-reverse items-center justify-between gap-[100] py-16 md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7fc2ce4791_Stock%20Image__Conference%20Room.webp"
              alt=""
              sizes="50vw"
              srcSet="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7fc2ce4791_Stock%2520Image__Conference%2520Room-p-500.webp 500w, https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7fc2ce4791_Stock%2520Image__Conference%2520Room-p-800.webp 800w, https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7fc2ce4791_Stock%2520Image__Conference%2520Room-p-1080.webp 1080w, https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7fc2ce4791_Stock%2520Image__Conference%2520Room-p-1600.webp 1600w, https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7fc2ce4791_Stock%20Image__Conference%20Room.webp 1720w"
              className="w-full rounded-lg object-cover"
            />
          </div>
          <div className="w-full space-y-6 md:w-1/2">
            <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl">
              Grow your career and unleash your potential.
            </h1>
            <div className="space-y-4">
              <p className="text-xl">Ready to expand your horizons at a truly global company?</p>
              <p className="text-xl">
                Your dedicated new team members will become experts in your world — your customers, your tech, your
                data, your systems — so they can expand on what you've built.
              </p>
            </div>
            <div>
              <button className="w-auto rounded-full border-2 border-[#0c3a23] bg-[#0c3a23] px-4 py-2 font-medium text-white transition-all duration-300 hover:cursor-pointer hover:bg-transparent hover:text-[#0c3a23]">
                {" "}
                View Open roles
              </button>
            </div>
          </div>
        </section>
      </div>

      <img
        className="w-full"
        src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c211cce4793_Section%20Curve%2003.svg"
        alt=""
      />
      <div className="w-full bg-[#f7e1d2]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <section className="flex flex-col-reverse items-center justify-between gap-[100] py-16 md:flex-row">
            <div className="w-full space-y-6 md:w-1/2">
              <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl">
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
