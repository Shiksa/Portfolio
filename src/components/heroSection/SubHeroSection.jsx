import React from 'react';
import Marquee from 'react-fast-marquee';

const words = ['Fast Learner', 'Hard Worker', 'Team Work'];

const SubHeroSection = () => {
  const repeatedWords = [...Array(4)].flatMap(() => words);
  return (
    <div className="w-full border-y border-lightGrey text-lightGrey uppercase bg-brown py-8">
      <Marquee gradient={false} speed={50} pauseOnHover>
        {repeatedWords.map((word, i) => (
          <p key={i} className="mx-8 whitespace-nowrap xl:text-4xl md:text-2xl sm:text-4xl">
            {word}
          </p>
        ))}
      </Marquee>
    </div>
  );
};

export default SubHeroSection;
