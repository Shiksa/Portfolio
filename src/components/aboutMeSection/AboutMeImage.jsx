import React from 'react'

const AboutMeImage = () => {
  return (
    <div className='h-[500px] w-[300px] relative'>
      <div className='h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden'>
        <img src="/sayantan 2.webp" alt="" className='h-full w-auto object-cover' />
      </div>
      <div className='h-[500px] w-[300px] bg-lightOrange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-br-[20px] rounded-tr-[120px] rounded-bt-[20px] rounded-tl-[20px] -z-10'>

      </div>
    </div>

  )
}

export default AboutMeImage
