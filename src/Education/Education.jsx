import React from 'react'
import "./education.css"
import Educationcard from './Educationcard'
import alu from "./alu.png"
import utg from "./utg.jpeg"
import nusrat from "./cropped-logo-1.webp"

const Education = () => {
  return (
    <div className='education' id='education'>
        <div className="title"><span>Education</span></div>
        <div className="edu-container">
            
            <Educationcard

            img = {alu}
            school="African Leadership University"
            date= "2023 - 2026"
            discription ="Bsc Software Engineering"
            
            />

            <Educationcard
                img={utg}
                school ="The University of The Gambia"
                date="2022-2023"
                discription="Bsc Computer Science"
            />

            <Educationcard
                img={nusrat}
                school ="Nusrat Senior Secondary School "
                date="2018 - 2021"
                discription = "Commerce"
            />
        </div>
    </div>
  )
}

export default Education