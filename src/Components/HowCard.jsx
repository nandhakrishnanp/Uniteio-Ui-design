import React from 'react'
import {HowitWorks} from '../Constants'

const HowCard = () => {
  return (
    <div className='grid max-md:grid-cols-1 grid-cols-3 pt-6 gap-6'>

          {HowitWorks.map((item)=>(
               <div className='flex flex-col items-center justify-center shadow-xl  p-6 bg-white  gap-4 rounded-xl'>
                
                <img className='w-[100px]   ' src={item.imageUrl} alt="img" />
                    <h3 className=' font-palanquin font-bold text-2xl'>{item.title}</h3>
                    <p className=' font-montserrat  text-slate-500'>{item.description}</p>
               </div>
          ))}                 

    </div>
  )
}

export default HowCard