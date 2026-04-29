import React from 'react'

const SingleSkill = ({ text, imgSvg }) => {
  return (
    <div className='group hover:-translate-y-6 transition-all duration-500 relative flex flex-col items-center'
      style={{ width: 'clamp(36px, 5.5vw, 100px)' }}>

      <div className='flex flex-col items-center gap-1 relative z-10'>
        <div
          className='bg-white text-cyan flex items-center justify-center rounded-full hover:text-darkGrey hover:scale-105 transform transition-all duration-500 border-[3px] border-orange'
          style={{
            width: 'clamp(36px, 5.5vw, 100px)',
            height: 'clamp(36px, 5.5vw, 100px)',
            fontSize: 'clamp(16px, 2.5vw, 48px)',
          }}
        >
          {imgSvg}
        </div>
        <p className='text-white font-bold opacity-0 group-hover:opacity-100 transition-all duration-500'
          style={{ fontSize: 'clamp(6px, 0.8vw, 13px)', whiteSpace: 'nowrap' }}>
          {text}
        </p>
      </div>

      <div
        className='bg-orange absolute -z-10'
        style={{
          width: 'clamp(36px, 5.5vw, 100px)',
          height: 'clamp(80px, 11vw, 200px)',
          top: 'clamp(18px, 2.8vw, 50px)',
          borderRadius: '0 0 8px 8px',
        }}
      />
    </div>
  )
}

export default SingleSkill