import React from 'react'

const SingleInfo = ({ text, link, Image }) => {
  return (
    <a href={link} target='_blank' className='flex gap-4 items-center justify-start'>
      <Image className="text-3xl" />
      <p>{text}</p>

    </a>
  )
}

export default SingleInfo
