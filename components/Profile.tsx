import Button from "./Button"

const Profile = () => {
  return (
    <div className='flex flex-col py-20 p-1 mt-10 '>
      <h1 className='font-merri text-3xl md:text-6xl text-white'>
       Hi, I am Dagim Girma
      </h1>
      <h2 className='font-merri text-2xl md:text-4xl text-[#EE653E] font-extralight'>
        Mechanical Engineer
      </h2>
      <div className='mt-10'>
      <p className='font-poppins text-[14px] sm:text-lg text-left w-70 sm:w-100 text-white font-extralight'>
        Motivated and detail-oriented mechanical engineer with professional experience as a Cabin Technician at Ethiopian Airlines.
      </p>
        <Button/>
      </div>
    
    </div>
  )
}

export default Profile