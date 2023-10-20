import React from 'react'
import "./skills.css"
import SkillsCard from './SkillsCard'
import {BiLogoReact} from "react-icons/bi"

const Skills = () => {
  return (
    <div className='container' id='skills'>
        <div className="title"><span>My Skills</span></div>
        <div className="skills">

          <SkillsCard

          icon =<BiLogoReact/>
          name = "ReactJS"
          
          />

        </div>





    </div>
  )
}

export default Skills