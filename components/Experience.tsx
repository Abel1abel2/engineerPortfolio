const experiences = [
  {
    title: "Bahir Dar University",
    date: "2017 - 2022",
    description:
      "I hold a B.Sc. degree in Mechanical Engineering (Thermal Stream) from Bahir Dar University, completed in 2022 with a GPA of 3.52.",
  },
  {
    title: "Unity University (2017-2026)",
    date: "2017 - 2026",
    description:
      "I am also pursuing my final year in Management at Unity university.",
  },
  {
    title: "Internship Experience",
    date: "2017 - 2022",
    description:
      "During my internship at Adama Steel Factory, I gained practical exposure to industrial systems and maintenance operations",
  },
  {
    title: "Junior underwriter",
    date: "2017 - 2022",
    description:
      "Professionally, I served as a Junior Underwriter and Claims Officer at Nile Insurance.",
  },
   {
    title: "Cabin Technician",
    date: "2017 - 2022",
    description:
      "I joined Ethiopian Airlines as an Assistant Cabin Technician in January 2023, where I continue to serve Working within the maintenance team",
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
