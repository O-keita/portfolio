import React from 'react'
import "./skills.css"
import SkillsCard from './SkillsCard'
import {BiLogoReact} from "react-icons/bi"
import {SiPython} from "react-icons/si"
import {IoLogoJavascript} from "react-icons/io"
import {FcLinux} from "react-icons/fc"
import {FcAcceptDatabase} from "react-icons/fc"
import {ImHtmlFive} from "react-icons/im"

const Skills = () => {
  return (
    <div className='container' id='skills'>
        <div className="title"><span>My Skills</span></div>
        <div className="skills">

          <SkillsCard

          icon =<BiLogoReact className='react'/>
          name = "ReactJS"
          
          />
            <SkillsCard

          icon =<IoLogoJavascript className='javascript-icon'/>
          name = "Javascript"

          />

           <SkillsCard

          icon =<SiPython className='python-icon'/>
          name = "Python"

          />
          <SkillsCard

            icon =<FcLinux/>
            name = "Linux"

          />

          <SkillsCard

          icon =<FcAcceptDatabase/>
          name = "Database Management"

          />
          <SkillsCard

          icon =<ImHtmlFive className='html-icon'/>
          name = "HTML & CSS"

          />

          

    
       

        </div>





    </div>
  )
}

export default Skills