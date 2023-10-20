import React from 'react'

const Educationcard = (prop) => {
  return (
    <div className='edu-card'>
      <dir className='edu-img'>
        <img src={prop.img} alt="" />
      </dir>
      <div className="edu-role">
        <span className='school'>{prop.school}</span>
        <span className='edu-date'>{prop.date}</span>
        <span className='edu-discription'>{prop.discription}</span>
       
      </div>

    </div>
  )
}

export default Educationcard