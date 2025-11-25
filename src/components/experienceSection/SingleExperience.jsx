import React from 'react';


const SingleExperience = ({ experience, index }) => {
  return (
    <div
      className="
      
      sm:h-auto w-full border-2 border-orange border-dashed rounded-2xl p-5 shadow-lg hover:scale-[1.02] transition-all duration-500 mt-4"
    >
      <h3 className="text-cyan font-semibold text-lg">{experience.job}</h3>
      <p className="text-orange text-sm font-medium">{experience.company}</p>
      <p className="text-lightGrey text-sm mb-3">
        <span>{experience.date.split(' - ')[0]}</span>
        <span className="mx-2 text-xl font-bold text-white">–</span>
        <span>{experience.date.split(' - ')[1]}</span>
      </p>

      <ul className="list-disc list-inside space-y-2 text-sm text-white">
        {experience.responsibilities.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default SingleExperience;
