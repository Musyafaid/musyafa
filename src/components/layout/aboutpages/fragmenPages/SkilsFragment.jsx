import React from 'react'

export default function SkilsFragment() {
  return (
    <div className='w-44 my-8'>
      <h3 className='text-base font-semibold'>Current favorite stack</h3>


      <div className=' border-none gap-3 flex w-auto justify-around items-center border rounded-sm'>
        <img className='size-10 grayscale hover:grayscale-0' src="/react.svg" alt="" />
        <img className='size-10 grayscale hover:grayscale-0' src="/pngegg.png" alt="" />
        <img className='size-10 grayscale hover:grayscale-0' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="" />
        <img className='size-10 grayscale hover:grayscale-0' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="" />
        <img className='size-10 grayscale hover:grayscale-0' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="" />
        
        <img className='size-10 grayscale hover:grayscale-0' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="" />
      </div>
    </div>
  )
}
