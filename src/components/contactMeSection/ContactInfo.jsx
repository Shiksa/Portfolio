import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white'>
      <SingleInfo link="mailto:shiksayantanpakhira74@gmail.com" text="shiksayantanpakhira74@gmail.com" Image={HiOutlineMail} />
      <SingleInfo link="tel:+917478320320" text="+91 7478320320" Image={FiPhone} />
      <SingleInfo link="https://maps.app.goo.gl/AUjYqQ1QgXMkvwFY7" text="Amta, Howrah" Image={IoLocationOutline} />
    </div>
  )
}

export default ContactInfo
