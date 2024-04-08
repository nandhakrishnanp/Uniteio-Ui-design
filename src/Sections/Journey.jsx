import React from 'react'
import { feedbackData } from '../Constants'
import FeedbackCard from '../Components/FeedbachCard'



const Journey = () => {
  return (
    <div className='padding-t'>
           <h1 className='text-center text-4xl font-palanquin font-bold'><span className='text-primary'>Uniteio</span> in Their Own Words</h1>  
          <div className='flex p-5  max-md:flex-col'>
          {
            feedbackData.map((item)=>(
                <FeedbackCard item={item}/>
            ))
           }
          </div>
          
    </div>
  )
}

export default Journey