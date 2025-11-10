import React from 'react'
import { LuArrowDownRight } from "react-icons/lu";

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
      <h2 className='text-6xl  text-cyan mb-10'>About Me</h2>
      <section className=" px-6 py-10 max-w-3xl mx-auto text-white font-body">

        <p className="mb-4">
          Hello! I'm <span className="font-bold">Sayantan Pakhira</span>, a passionate and dedicated B.Tech graduate in <span className="font-bold">Information Technology</span>, completed in <span className="font-bold">June,2025</span> from the <span className="font-bold">Government College of Engineering and Textile Technology, Serampore</span>, with an aggregated <span className="font-bold">CGPA of 8.47</span>.
        </p>
        <p className="mb-4">
          I'm a <span className="font-bold">web development enthusiast</span>, with a strong focus on <span className="font-bold">frontend technologies</span>. I enjoy building clean, responsive, and user-friendly web interfaces that delivers smooth experiences.
        </p>

        <p className="mb-4">
          Previously, I completed my schooling at <span className="font-bold">Amta Pitambar High School</span>, where I achieved:
        </p>
        <ul className="list-disc list-inside mb-4 ml-4">
          <li>89.14% in Madhyamik (2017)</li>
          <li>80.66% in Higher Secondary (2019) - Pure Science</li>
        </ul>
        <p className="mb-4">
          I’m originally from <span className="font-bold">Amta, Howrah</span>, and aside from coding, I love <span className="italic">gardening</span> and <span className="italic">playing video games</span>, which help me stay creative and refreshed.
        </p>
        <p className="mb-6">
          I’m <span className="font-bold">actively seeking job opportunities</span> where I can apply my skills, contribute effectively, and grow as a frontend developer.
        </p>
        <button className='px-4 py-2 rounded-full text-xl font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-[0_0_20px_0_rgba(94,206,220,0.5)] cursor-pointer md:self-start sm:self-center'>
          My Projects
          <LuArrowDownRight />
        </button>
      </section>
    </div>
  )
}

export default AboutMeText
