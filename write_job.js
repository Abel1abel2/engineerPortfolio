const fs = require('fs');
const content = `import Image from 'next/image'
import React from 'react'

const Job = () => {
  return(
    <div className="px-4 sm:px-10 md:px-20 py-8 sm:py-10">
    <div className="customShape bg-[#F3F3F3] w-full max-w-full overflow-hidden">

      <div className="flex flex-col md:flex-row justify-between items-center w-full h-full px-4 sm:px-8 md:px-12 lg:pr-52 pb-10 sm:pb-20 md:pb-40 lg:pb-152 p-5 gap-6">

        <div className="w-full md:w-1/2 h-full flex items-center justify-center pr-0 md:pr-10 pb-6 md:pb-10 pt-6 md:pt-10">
            <Image className="w-full max-w-[180px] sm:max-w-[220px] md:max-w-[260px] h-auto" src="/images/plane.png" alt="Job Image" width={200} height={200} />
       </div>

        <div className="w-full md:w-1/2 h-full py-6 md:py-10">
         
          <div className="flex flex-col justify-between items-center h-full p-4 sm:p-5 py-6 sm:py-10 gap-4">
           <div className="">
             <h1 className="text-base sm:text-lg font-poppins text-[#EE653E] text-center md:text-left">Currently Working as Cabin Technician</h1>
             </div>

           <div className="flex gap-4 sm:gap-10 items-center w-full h-20 shadow-md rounded-lg p-2">
            
             <div className="rounded-full w-10 h-10 bg-[#286F6B] flex items-center justify-center shrink-0">
               <img className="w-6 h-6 object-contain" src="/images/screw.png" alt="Job Image" />
             </div>
             <div>
             <h1 className="text-sm sm:text-base">Aircraft Mechanic - IFE Maintenance</h1>
             <p className="py-1 font-light text-sm">3 years</p>
             </div>
           </div>
          
            <div className="flex gap-4 sm:gap-10 items-center w-full h-20 shadow-md rounded-lg p-2">
            
             <div className="rounded-full w-10 h-10 bg-[#E9BF4C] flex items-center justify-center shrink-0">
               <img className="w-6 h-6 object-contain" src="/images/frame.png" alt="Job Image" />
             </div>
             <div>
             <h1 className="text-sm sm:text-base">Pre-Flight Inspection</h1>
             <p className="py-1 font-light text-sm">3 years</p>
             </div>
           </div>

            <div className="flex gap-4 sm:gap-10 items-center w-full h-20 shadow-md rounded-lg p-2">
            
             <div className="rounded-full w-10 h-10 bg-[#EE653E] flex items-center justify-center shrink-0">
               <img className="w-6 h-6 object-contain" src="/images/Vector.png" alt="Job Image" />
             </div>
             <div>
             <h1 className="text-sm sm:text-base">Cabin Interior Maintenance</h1>
             <p className="py-1 font-light text-sm">3 years</p>
             </div>
           </div>

            
          </div>

        </div>

      </div>
    
    </div> 
    </div>
    
  )
}

export default Job
`;
fs.writeFileSync('d:/personal/portfolio/engineerPortfolio/components/Job.tsx', content, 'utf8');
console.log('done');
`;
fs.writeFileSync('d:/personal/portfolio/engineerPortfolio/write_job.js', content2, 'utf8');
`;
// oops need different variable; redo below
`;
