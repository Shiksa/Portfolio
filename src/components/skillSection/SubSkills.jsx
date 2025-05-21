import React from 'react'
import Marquee from 'react-fast-marquee';

const words = ['Currently Exploring Backend Technologies',];

const SubSkills = () => {
  const repeatedWords = [...Array(4)].flatMap(() => words);
  return (
    <div className='border-y-2 border-lightGrey relative'>
      <div className='absolute bg-gradient-to-r from-orange to-cyan opacity-50 w-full h-full
    '></div>
      <div className='py-4'>
        <Marquee gradient={false} speed={50} pauseOnHover>
          {repeatedWords.map((word, i) => (
            <p key={i} className="mx-8 whitespace-nowrap xl:text-4xl md:text-2xl sm:text-4xl text-white">
              {word}
            </p>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default SubSkills
