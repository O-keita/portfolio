import React from 'react'

const SkillsCard = (prop) => {
  return (
    <div className='card'>

        <div className="icon">{prop.icon}</div>
        <div className="skillname">{prop.name}</div>

    </div>
  )
}

export default SkillsCard