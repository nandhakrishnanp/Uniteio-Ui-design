import React from 'react'
import working from '../assets/working.jpeg'
import Button from '../Components/Button'

const Team = () => {
  return (
    <div className='padding-t' >
         <h1 className='text-center text-4xl font-palanquin font-bold'>Where Seamless <span className='text-primary'>Collaboration </span>Drives Team Success.</h1>
         <div className='flex items-center justify-center  max-md:flex-col-reverse p-7 mt-6 '>
        <div className='flex-1'>
           
            <p className='  font-montserrat text-2xl font-medium p-10 '>At UniteIO, working seamlessly with your teammates means harnessing the power of collective creativity and expertise to turn ideas into remarkable projects. It starts with clear communication channels and a shared vision, allowing team members to collaborate effectively regardless of their locations. By utilizing UniteIO's integrated tools and resources, teams can streamline workflows, assign tasks efficiently, and track progress in real time.</p>
           
        </div>
        <div>
            
            <img src={working} width={400}   className="rounded-xl shadow-2xl  shadow-primary" alt="" />
        </div>
    </div>
    </div>
   
  )
}

export default Team