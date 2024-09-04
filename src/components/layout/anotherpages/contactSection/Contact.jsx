import React from 'react'
import { Instagram , Linkedin , X , Github } from 'react-bootstrap-icons'

export default function Contact() {

  const links = [
    {href : "https://www.instagram.com/msyfchmd/", icon:Instagram},
    {href : "https://www.linkedin.com/in/musyafa-ahmad-saputra/", icon:Linkedin},
    {href : "https://x.com/CallmeDecul", icon:X},
    {href : "https://github.com/Musyafaid", icon:Github}
  ];
    
    return (
      
      <div id='contact' className='mx-auto mt-10 w-full flex-col flex items-center'>
        <h2 className='font-semibold text-2xl text-rose-500'>
        Find me on 

        </h2>
        <ul className='flex gap-4 my-2'>
          {links.map((link,index) => (

            <li key={index}>
              <a className='flex items-center ' href={link.href} target="_blank" rel="noopener noreferrer"><link.icon size={25} className='hover:fill-rose-700 transition-all' />
              </a></li>
          ))}
            
           
            
        </ul>
    </div>
  )
}
