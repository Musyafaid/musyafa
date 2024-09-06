import React from 'react';

export default function SkilsFragment() {
  const imgLink1 = [
    { link: "/pngwing2.png" },
    { link: "/react.svg" },
    { link: "/pngegg.png" },
    { link: "/Tailwind.png" },
    { link: "/pngegg2.png" },
  ];

  const imgLink2 = [
    { link: "/pngwing.png", alt: "PNG Wing" },
    { link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
    { link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", alt: "PHP" },
    { link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
    { link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3" },
  ];

  return (
    <div className='w-44 my-8 mx-8'>
      <h3 className='text-base font-semibold'>Current favorite stack</h3>

      <div className='border-none flex flex-col justify-start w-auto border rounded-sm'>
        <div className='flex py-1 gap-2 justify-evenly'>
          {imgLink1.map((img, index) => (
            <img
              key={index}
              className='w-10 h-10 grayscale hover:grayscale-0 cursor-pointer'
              src={img.link}
              alt={`Image ${index + 1}`}
            />
          ))}
        </div>

        
        <div className='flex py-1 gap-2 justify-evenly mt-4'>
          {imgLink2.map((img, index) => (
            <img
              key={index}
              className='w-10 h-10 grayscale hover:grayscale-0 cursor-pointer'
              src={img.link}
              alt={img.alt}
            />
          ))}
        </div>
      </div>

     
    </div>
  );
}
