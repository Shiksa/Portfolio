import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white'>
      <SingleInfo text="shiksayantanpakhira74@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 7478320320" Image={FiPhone} />
      <SingleInfo text="Amta, Howrah" Image={IoLocationOutline} />
    </div>
  )
}

export default ContactInfo
