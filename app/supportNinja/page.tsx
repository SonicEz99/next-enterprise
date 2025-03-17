import SupportNinjaStickyNavbar from "features/supportNinja/components/SupportNinjaStickyNavbar"
import SupportNinjaNavbar from "../../features/supportNinja/components/SupportNinjaNavbar"
import ServiceSelection from "features/supportNinja/components/Service"
import ButtonGetStarted from "features/supportNinja/components/getstartButton"
import Content from "features/supportNinja/components/Content"

const supportNinjaPage = () => {
  return (
    <div className="min-h-screen">
      <SupportNinjaStickyNavbar />
      <SupportNinjaNavbar></SupportNinjaNavbar>
      <main className="bg-[#f7e1d2] pt-20 md:pt-24">
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-center text-center">
            <h3 className="mb-4 max-w-4xl text-xl font-medium sm:text-2xl md:text-3xl">
              Quickly and seamlessly scale your team with agile, highly customizable outsourcing solutions that power
              your growth.
            </h3>
            <h1 className="max-w-7xl font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              Outsourcing worth talking about
            </h1>
          </div>
        </section>

        <hr className="mx-auto max-w-7xl border-t border-gray-300" />

        <section className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col items-center justify-center text-center">
            <h2 className="mb-2 font-sans text-xl font-bold sm:text-2xl">
              Which outsourcing solutions are you looking for?
            </h2>
            <p className="text-gray-700">Choose as many as you need.</p>
          </div>

          <ServiceSelection />

          <div className="flex justify-center">
            <ButtonGetStarted />
          </div>
          <div className="flex justify-center">
            <Content />
          </div>
        </section>
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
      <main className="mx-auto flex max-w-7xl flex-col items-center gap-6 gap-16 p-6 md:flex-row">
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
              We work closely with you to continually adjust strategies, realize efficiencies, and drive scale according
              to your unique needs. Plus, flexibility is baked in from day one, so you’re never locked into rigid,
              long-term contracts.
            </p>
            <p className="text-xl">Now that’s outsourcing worth talking about.</p>
          </div>
        </div>
      </main>

      <main className="mx-auto flex max-w-7xl flex-col items-center gap-6 gap-16 p-6 md:flex-row justify-between">
        <div className="w-full space-y-2 md:w-1/2">
          <h1 className="text-6xl font-semibold">Don’t grow it alone</h1>
          <div className="mt-10 w-full space-y-10">
            <p className="text-xl">
              Don't let headcount become a headache. We’ll connect you with talent that meets your needs.
            </p>
            <p className="text-xl">
              Your dedicated new team members will become experts in your world — your customers, your tech, your data,
              your systems — so they can expand on what you’ve built.
            </p>
          </div>
        </div>
        <img className="" src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c4794ce4765_Illustration%3DPlant%201.svg" loading="lazy" alt="Illustration of green plant inside of red and white vase"></img>
      </main>
    </div>
  )
}

export default supportNinjaPage
