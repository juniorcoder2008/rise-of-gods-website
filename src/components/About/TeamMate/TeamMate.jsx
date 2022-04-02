import React from 'react';
import './TeamMate.sass';

const TeamMate = ({ first, last, img, description }) => {
  return (
    <div className='team-mate'>
      <div className="head">
        <img src={img} alt='' />
        <h2><span>{first}</span> {last}</h2>
      </div>
      <p>{description}</p>
    </div>
  )
}

export default TeamMate