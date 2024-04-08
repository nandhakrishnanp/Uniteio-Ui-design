import React from 'react'

const FeedbackCard = ({item}) => {
  return (
    <div className=' flex-col flex items-center justify-center  gap-4'>
         
          <img width={200} className=' rounded-full' src={item.profileUrl} alt={item.userName} />
           <h2 className=' font-palanquin font-bold text-xl text-center '>{item.userName}</h2> 
           <p className=' font-montserrat text-lg text-darkgreen p-6'>" {item.feedback} "</p>
    </div>
  )
}

export default FeedbackCard