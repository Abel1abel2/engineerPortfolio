import React from 'react'
import { Wrench, Settings, Ruler } from "lucide-react"

const jobs = [
  {
    icon: Wrench,
    bg: 'bg-[#286F6B]',
    title: 'Aircraft Mechanic - IFE Maintenance',
    years: '3 years',
  },
  {
    icon: Settings,
    bg: 'bg-[#E9BF4C]',
    title: 'Pre-Flight Inspection',
    years: '3 years',
  },
  {
    icon: Ruler,
    bg: 'bg-[#EE653E]',
    title: 'Cabin Interior Maintenance',
    years: '3 years',
  },
]

const Job = () => {
  return (
    <section className="px-4 py-5 sm:px-8 lg:px-16">
      <div className="customShape mx-auto">
        <div className="flex w-full flex-col items-center justify-between gap-5 p-4 sm:p-5 lg:flex-row lg:gap-6 lg:p-3 lg:pr-10 lg:py-6 xl:pr-16">
          <div className="flex w-full justify-center lg:w-1/2">
            <img
              src="/images/plane.png"
              alt="Job Image"
              className="h-32 w-full rounded-lg object-cover object-center sm:h-40 md:h-48 lg:h-auto lg:w-full lg:max-w-[320px] lg:rounded-none lg:object-contain"
            />
          </div>

          <div className="flex w-full flex-col lg:w-1/2">
            <div className="flex h-full flex-col items-center gap-3 p-1 sm:gap-3.5 sm:p-2 lg:py-4">
              <h1 className="text-center font-poppins text-sm text-[#EE653E] sm:text-base">
                Currently Working as Cabin Technician
              </h1>

              {jobs.map((job) => {
                const Icon = job.icon;
                return (
                  <div
                    key={job.title}
                    className="group flex min-h-[68px] w-full cursor-pointer items-center gap-4 rounded-xl bg-white p-3 shadow-[0_2px_10px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.15)] sm:min-h-[76px] sm:gap-4 sm:p-3.5"
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${job.bg} sm:h-11 sm:w-11`}
                    >
                      <Icon className="h-5 w-5 text-white sm:h-[22px] sm:w-[22px]" />
                    </div>

                    <div className="min-w-0">
                      <h2 className="text-sm font-medium sm:text-[15px]">
                        {job.title}
                      </h2>
                      <p className="py-0.5 text-xs font-light sm:text-sm">
                        {job.years}
                      </p>
                    </div>
                  </div>
                );
              })}

              <div className="mt-3 flex w-full justify-center lg:mt-0 lg:justify-end lg:pr-2">
                <img
                  src="/images/ethiopian-logo.png"
                  alt="Ethiopian Airlines"
                  className="h-auto w-20 object-contain sm:h-12 sm:w-28 md:h-[60px] md:w-36 lg:h-20 lg:w-52"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Job