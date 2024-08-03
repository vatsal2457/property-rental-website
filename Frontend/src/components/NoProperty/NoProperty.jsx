import React from 'react'

function NoProperty({text}) {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center py-10'>
    <div className='text-3xl font-bold text-white'>
        <h1>{text}</h1>
    </div>
    <div className='w-3/4 h-2/3 sm:w-2/5 sm:h-1/2 mt-5 '>
      <img 
      src="/noImageFound.png" 
      alt="No image found" 
      className='rounded-2xl border border-black'
      />
    </div>
    </div>
  )
}

export default NoProperty
