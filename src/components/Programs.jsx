import React from 'react';
import './Programs.css';
import RightArrow from '../assets/rightArrow.png';
import {programsData} from '../data/programsData';
export default function Programs() {
  return (
    <div className='programs' id='programs'>
        <div className="programs-header">
            <span className='stroke-text'>Explore </span><span>all what </span><span className='stroke-text'> we offer you</span>
        </div>
        <div className="program-categories">
     {programsData.map((program)=>(
    <div className='category'>
        {program.image}
        <span>{program.heading}</span>
        <span>{program.details}</span>
        <div className="join-now">
            <span>Deal now</span><img src={RightArrow} alt="" />
        </div>
    </div>
))}
        </div>
    </div>
  )
}
