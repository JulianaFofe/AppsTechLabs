import React from 'react'

interface Data{
    item:historyData[]
}

interface historyData{
    text:string
    year:string
    description:string
}



function HistoryCards({item}:Data) {
  return (
    <div className='flex w-full flex-col items-center gap-y-10'>
      {
      item.map((item)=>(
        <div className='w-[80%] rounded-lg shadow-lg inset-shadow-sm md:w-[80%] transition-transform duration-300 group relative hover:scale-105'>
            <div className='w-full  flex justify-between p-3 items-center'>
              <p className=' text-md md:text-xl font-medium'>{item.text}</p>
              <p>{item.year}</p>
            </div>
            <div className='animate-slide-down rounded-b-lg hidden group-hover:block bg-white text-black p-2  '>
             <p className='bg-primary/70 text-white p-2 rounded-b-lg'>{item.description}</p>
            </div>
        </div>
      ))
      }
    </div>
  )
}

export default HistoryCards
