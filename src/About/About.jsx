import React from 'react'
import "./about.css"
import pic from "./myprofilepic.png"

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="title">
            <span>About me!</span>
        </div>
    <div className='card'>
        <div className="image">
            <img src={pic} alt="Profile" />

        </div>
            <div className="discrip">
                <span>
                "I'm an ardent tech enthusiast who thrives on collaborative problem-solving.
                My journey in the tech world is a testament to an unquenchable thirst for knowledge and innovation. 
                I'm driven by a curiosity that fuels my passion for finding creative solutions. 
                Teamwork is my forte, where I find inspiration and draw strength from diverse talents. 
                Whether it's tackling intricate technical challenges or crafting imaginative solutions, 
                I am committed to using technology as a force for positive change. 
                I aspire to foster innovation through my collaborative endeavors, 
                striving to leave a lasting imprint through the transformative power of tech and collective effort."
                </span>
            </div>
        </div>
    </div>
  )
}

export default About