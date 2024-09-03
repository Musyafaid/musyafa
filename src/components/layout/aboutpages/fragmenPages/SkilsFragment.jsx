import React from 'react'

export default function SkilsFragment() {
  return (
    <div className='w-44 my-8'>
      <h3 className='text-base font-semibold'>Current favorite stack</h3>


      <div className=' border-none flex flex-col justify-start  w-auto  border rounded-sm'>
        <div className='flex py-1 gap-2 justify-evenly'>
        <img className='size-10 grayscale hover:grayscale-0' src="/pngwing2.png" alt="" />
        <img className='size-10 grayscale hover:grayscale-0' src="/react.svg" alt="" />
        <img className='size-10 grayscale hover:grayscale-0' src="/pngegg.png" alt="" />
        <img className='size-10 grayscale hover:grayscale-0' src="/Tailwind.png" alt="" />
        <img className='size-10 grayscale hover:grayscale-0' src="/pngegg2.png" alt="" />
          
        </div>
        <div className='flex py-1 gap-2 justify-evenly'>
          
        <img className='size-10 grayscale hover:grayscale-0' src="/pngwing.png" alt="" />
        <img className='size-10 grayscale hover:grayscale-0' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="" />
        <img className='size-10 grayscale hover:grayscale-0' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="" />
        <img className='size-10 grayscale hover:grayscale-0' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="" />
        <img className='size-10 grayscale hover:grayscale-0' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="" />
        </div>
      </div>
    </div>
  )
}
