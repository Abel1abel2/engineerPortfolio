import { Wrench, Plane, FileText, DraftingCompass, Users, Briefcase, LucideIcon } from "lucide-react"


interface Skill {
  name: string;
  icon: LucideIcon;
}

const Skiils = () => {
  const skills: Skill[] = [
    { name: "Mechanical System & Maintenance", icon: Wrench },
    { name: "Aircraft Maintenance Support", icon: Plane },
    { name: "Technical Documentation", icon: FileText },
    { name: "Engineering Design & Simulation", icon: DraftingCompass },
    { name: "Teamwork & Communication", icon: Users },
    { name: "Management & Operations", icon: Briefcase },
  ];

  return (
   <>

   <div className="w-full bg-[#eff4ee] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
     <div className="max-w-6xl mx-auto">
       <div className="text-center mb-12 sm:mb-16">
         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
           Among My <span className="text-[#c97c46]">Skills</span>
         </h2>
         <div className="mt-4 w-16 sm:w-24 h-1 bg-[#c97c46] mx-auto rounded-full"></div>
       </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
         {skills.map((skill) => {
           const Icon = skill.icon;
           return (
             <div
               key={skill.name}
               className="group bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col items-center text-center border border-gray-100"
             >
               <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#f3efe6] flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#c97c46] transition-colors duration-300">
                 <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-gray-700 group-hover:text-white transition-colors duration-300" />
               </div>
               <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 group-hover:text-[#c97c46] transition-colors duration-300">
                 {skill.name}
               </h3>
             </div>
           );
         })}
       </div>
     </div>
   </div>


   </>
  )
}

export default Skiils