import React from 'react'

export default function MainHeading({title1,title2}) {
  return (
    <h3 className='flex pl-5 mb-4 flex-col relative after:w-4 after:h-4 after:rounded-full after:ml-4 after:bg-[#305593] after:absolute after:top-1/2 after:-translate-y-1/2 after:-left-4 '>
      <span className='text-[#636363] text-6xl sm:text-4xl font-medium '>{title1}</span>
      <span className="bg-ourGradient pb-4 font-bold bg-clip-text text-transparent sm:text-4xl text-6xl">{title2}</span>
    </h3>
  )
}
