import React from 'react'
import { LuArrowDownRight } from "react-icons/lu";

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
      <h2 className='text-6xl  text-cyan mb-10'>About Me</h2>
      <section className=" px-6 py-10 max-w-3xl mx-auto text-white font-body">

        <p className="mb-4">
          Hello! I'm <span className="font-semibold">Sayantan Pakhira</span>, a passionate and driven B.Tech student specializing in <span className="font-semibold">Information Technology</span>, graduating in <span className="font-semibold">2025</span> from the <span className="font-semibold">Government College of Engineering and Textile Technology, Serampore</span>, with a current <span className="font-semibold">CGPA of 8.55</span>.
        </p>
        <p className="mb-4">
          I'm a <span className="font-semibold">web development enthusiast</span>, currently focusing on <span className="font-semibold">frontend technologies</span>. I enjoy building clean, responsive, and user-friendly web interfaces.
        </p>

        <p className="mb-4">
          I completed my schooling at <span className="font-semibold">Amta Pitambar High School</span>, securing:
        </p>
        <ul className="list-disc list-inside mb-4 ml-4">
          <li>89.14% in Madhyamik (2017)</li>
          <li>80.66% in Higher Secondary (2019)</li>
        </ul>
        <p className="mb-4">
          Hailing from <span className="font-semibold">Amta, Howrah</span>, I have a deep interest in <span className="italic">gardening</span> and <span className="italic">playing video games</span>, which help me stay creative and relaxed.
        </p>
        <p className="mb-6">
          I’m <span className="font-semibold">eagerly looking for job opportunities</span> where I can apply my skills, contribute meaningfully, and grow as a frontend developer.
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
