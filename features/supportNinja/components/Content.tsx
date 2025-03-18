import React from "react"

function Content() {
  return (
    <div className="container mt-[150px] flex w-full flex-col gap-10 rounded-2xl bg-[#bfc1b9] px-4 py-6 xl:flex-row xl:justify-between">
      <div className="flex items-center justify-center p-4 xl:w-1/3 xl:justify-start">
        <h2 className="text-center text-2xl font-light text-gray-800 xl:text-left">
          <b>
            Driving better business results <br /> for 200+ companies.
          </b>
        </h2>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 px-2 xl:w-2/3">
        <img
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c0380ce484b_B%26MG_foundation.svg"
          alt="Company Logo"
          className="h-26 w-26 object-contain sm:h-8"
        />
        <img
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64f9e7ede9b6df55f6f1a029_Midjourney%20Logo%20(1).svg"
          alt="Company Logo"
          className="h-26 w-26 object-contain sm:h-8"
        />
        <img
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/65a7f1f93afe1bee1bb429a4_Happy%20Socks%20Logo.svg"
          alt="Company Logo"
          className="h-26 w-26 object-contain sm:h-8"
        />
        <img
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c0a86ce483a_Customer%20Logo__Vidyard.svg"
          alt="Company Logo"
          className="h-26 w-26 object-contain sm:h-8"
        />
        <img
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cd632ce484a_redweek.svg"
          alt="Company Logo"
          className="h-26 w-26 object-contain sm:h-8"
        />
        <img
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cd161ce4839_Customer%20Logo__Product%20Madness.svg"
          alt="Company Logo"
          className="h-26 w-26 object-contain sm:h-8"
        />
      </div>
    </div>
  )
}

export default Content