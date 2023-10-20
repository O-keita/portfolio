import React from 'react'
import "./contacts.css"
import {BiLogoLinkedin} from "react-icons/bi"
import {FaFacebookF} from "react-icons/fa"
import {BiLogoGmail} from "react-icons/bi"

const Contacts = () => {

    const date = new Date()
    const year =date.getFullYear()

  

  return (
    <div className='contacts' id="contact">

        <div className="title"><span>Contact me</span></div>
        <div className="socials">

            <div className="icons"><a href="https://www.linkedin.com/in/omar-keita-a055a8237/" target='_blank' rel="noreferrer"><BiLogoLinkedin className='linkedin-icon'/></a></div>
            <div className="icons"><a href="https://www.facebook.com/profile.php?id=100092564769034" target='_blank' rel="noreferrer"><FaFacebookF className='facebook-icon '/></a></div>
            <div className="icons"> <BiLogoGmail/> <span>omarmusakeita@gmail.com</span></div>
            

        </div>
        <div className="footer"><span>&copy;{year} Omar Keita</span></div>
        
            
            
        
    </div>
  )
}

export default Contacts