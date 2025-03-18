import Image from "next/image"
import React from "react"
const PeopleSection: React.FC = () => {
  return (
    <div className="mx-auto w-full">
      <div className="flex flex-col gap-8  pt-16 md:mx-8 md:flex-col lg:flex-row">
        <div className="w-2/2 space-y-4 md:w-2/2 lg:w-1/2 lg:mr-12 xl:mr-12">
          <h2 className="font-serif text-4xl text-gray-900 md:text-6xl">
            We're passionate about our <span className="italic">people</span>.
          </h2>
          <p className="text-xl text-gray-900">Our people-first culture attracts and retains top talent.</p>
          <p className="text-gray-600 text-xl">
            For nearly a decade, we've fostered the growth, well-being, and career development of our team members — and
            that's earned us industry-high talent retention rates.
          </p>
          <button className="mt-2 w-auto rounded-full border-2 border-[#0c3a23] bg-[#0c3a23] px-4 py-2 font-medium text-white transition-all duration-300 hover:cursor-pointer hover:bg-transparent hover:text-[#0c3a23]">
            Read our story
          </button>
        </div>
        <div className="relative h-[500px] w-2/2 md:mx-12 md:w-[100%] lg:w-1/2 lg:ml-12 xl:ml-12">
          <div className="absolute top-0 left-0 h-25 w-25 overflow-hidden rounded-2xl bg-[#b9bbb4] shadow-lg md:h-50 md:w-50 lg:h-45 lg:w-45">
            <img
              src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c1677ce47c0_Tile__Man.webp"
              alt="Person smiling"
              className="h-full w-full object-cover"
              width={100}
              height={100}
            />
          </div>

          <div className="absolute top-0 left-[35%] flex h-25 w-25 items-center justify-center overflow-hidden rounded-2xl bg-orange-100 shadow-lg md:left-[32%] md:h-50 md:w-50 lg:left-[32%] lg:h-45 lg:w-45">
            <img
              src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c32c6ce47ba_Tile%20Illustrations__Pie%20Chart.webp"
              alt="Pie chart"
              className="h-48 w-48 object-contain"
              width={100}
              height={100}
            />
          </div>

          <div className="absolute top-[-7%] right-0 left-[65%] h-25 w-25 overflow-hidden rounded-2xl bg-[#b9bbb4] shadow-lg shadow-[#b9bbb4] md:left-[58%] md:h-50 md:w-50 lg:left-[60%] lg:h-45 lg:w-45">
            <img
              src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cf161ce47c1_Tile__Woman.webp"
              alt="Woman smiling"
              className="h-full w-full object-cover"
              width={100}
              height={100}
            />
          </div>

          <div className="absolute top-[23%] left-[0] flex h-25 w-25 items-center justify-center overflow-hidden rounded-2xl bg-orange-100 shadow-lg md:top-[45%] md:h-50 md:w-50 lg:top-[40%] lg:h-45 lg:w-45">
            <img
              src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cbdf4ce47b9_Tile%20Illustrations__Laptop.webp"
              alt="Dashboard icon"
              className="h-48 w-48 object-contain"
              width={100}
              height={100}
            />
          </div>

          <div className="absolute top-[25%] left-[28%] h-25 w-25 overflow-hidden rounded-2xl bg-[#b9bbb4] shadow-lg md:top-[50%] md:left-[25%] md:h-50 md:w-50 lg:left-[28%] lg:h-45 lg:w-45">
            <img
              src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c141ace47c2_Tile__Man%202.webp"
              alt="Person thinking"
              className="h-full w-full object-cover"
              width={100}
              height={100}
            />
          </div>

          <div className="absolute top-[20%] right-0 left-[65%] flex h-25 w-25 items-center justify-center overflow-hidden rounded-2xl bg-orange-100 shadow-lg md:top-[45%] md:left-[60%] md:h-50 md:w-50 lg:top-[40%] lg:left-[65%] lg:h-45 lg:w-45">
            <img
              src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cb7f6ce47b8_Tile%20Illustrations__Bar%20Chart.webp"
              alt="Bar chart"
              className="h-48 w-48 object-contain"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PeopleSection