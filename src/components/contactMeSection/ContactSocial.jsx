import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
      <SingleContactSocial link="https://github.com/Shiksa" Icon={FiGithub} />
      <SingleContactSocial link="www.linkedin.com/in/sayantan-pakhira" Icon={FaLinkedinIn} />

    </div>
  )
}

export default ContactSocial
