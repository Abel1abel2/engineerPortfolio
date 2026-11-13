import { Cog, FileText, ChevronRight } from "lucide-react"

const projects = [
  {
    icon: Cog,
    title: "Design and Simulation of Air-Conditioning Duct System",
    institution: "Bahir Dar Institute of Technology",
    description:
      "Designed and simulated an air-conditioning duct system to optimize airflow distribution and thermal efficiency for industrial-scale cooling applications.",
    tags: ["Thermal Design", "CFD Simulation", "HVAC"],
  },
]

const Projects = () => {
  return (
    <section className="w-full  py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            My <span className="text-[#c97c46]">Projects</span>
          </h2>
          <div className="mt-4 w-16 sm:w-24 h-1 bg-[#c97c46] mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out border border-gray-100"
              >
                <div className="flex flex-col gap-5 sm:gap-6">
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl bg-[#f3efe6] group-hover:bg-[#c97c46] transition-colors duration-300">
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-gray-700 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 group-hover:text-[#c97c46] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm sm:text-base text-[#c97c46] font-medium">
                        {project.institution}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 rounded-full bg-[#f3efe6] px-3 py-1.5 text-xs sm:text-sm text-gray-700"
                      >
                        <FileText className="h-3.5 w-3.5" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-2">
                    <button className="inline-flex items-center gap-2 text-sm font-medium text-[#c97c46] hover:gap-3 transition-all duration-300">
                      View Details
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects