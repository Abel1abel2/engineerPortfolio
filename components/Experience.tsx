const experiences = [
  {
    title: "Cabin Technician — Ethiopian Airlines",
    date: "Jan 2025 - Present",
    description:
      "Serving as a Cabin Technician after completing an intensive 8-month specialized Cabin Technician training program prior to recruitment.",
  },
  {
    title: "Junior Underwriter & Claim Officer — Nile Insurance",
    date: "Sep 2023 - Mar 2024",
    description:
      "Handled risk underwriting, assessment, technical documentation, and claims processing with accuracy and attention to detail.",
  },
  {
    title: "B.Sc. in Mechanical Engineering — Bahir Dar University",
    date: "Sep 2017 - Aug 2022",
    description:
      "Graduated from Bahir Dar Institute of Technology with a focus on Thermal Systems, mechanical design, and simulation.",
  },
  {
    title: "B.A. in Management — Unity University",
    date: "Oct 2022 - Present",
    description:
      "Pursuing degree in Management to complement engineering expertise with leadership, operational, and organizational skills (Expected Graduation: 2026).",
  },
];

const Experience = () => {
  return (
    <section className="w-full min-h-screen bg-[#08170b] mt-60 flex flex-col py-20 gap-10 items-center">
      <div className="flex flex-col justify-center items-center gap-4 px-4 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-white">
          Professional <span className="text-[#cb7949]">Journey</span>
        </h1>
        <p className="text-white text-base sm:text-lg ">
          A diverse background in aviation maintenance, thermal engineering, and
          corporate operations
        </p>
      </div>

      <div className="relative w-full max-w-5xl mx-auto px-4 mt-15 sm:px-6">
        {/* Center timeline line */}
        <div className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/20 -translate-x-1/2" />

        <div className="flex flex-col gap-10 sm:gap-12">
          {experiences.map((experience, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className="relative flex items-start md:items-center"
              >
                {/* Circle marker on the timeline */}
                <div className="absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#cb7949] border-4 border-[#08170b] shadow-[0_0_0_4px_rgba(203,121,73,0.25)]" />
                </div>

                {/* Content card */}
                <div
                  className={`ml-10 sm:ml-14 md:ml-0 md:w-1/2 ${
                    isLeft
                      ? "md:pr-10 "
                      : "md:ml-auto md:pl-10"
                  }`}
                >
                  <div className="flex flex-col gap-2 bg-white rounded-xl p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:-translate-y-1">
                    <div className="flex flex-col items-center gap-2 md:items-stretch">
                      <h1 className="text-xl font-bold text-gray-800">
                        {experience.title}
                      </h1>
                      <p className="text-gray-600">{experience.date}</p>
                    </div>
                    <p className="text-gray-600">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
