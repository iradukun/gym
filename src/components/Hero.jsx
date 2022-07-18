import React from 'react'
import './Hero.css';
import Heart from '../assets/heart.png';
import Header from './Header'
import hero_image from '../assets/hero_image.png';
import hero_image_back from '../assets/hero_image_back.png'
import Calories from '../assets/calories.png'


export default function Hero() {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        <div className='the-best-ad'>
            <div></div>
            <span>the  best design and photogrpahy creator <br></br>in the town and all over the country</span>
        </div>
        <div className='hero-text'>
            <div>
                <span className="stroke-text">Turn your ideas</span>
                <span> into Reality</span>
            </div>
            <div>
                <span>By our help of design creation and photography</span>
            </div>
            <div className="span">
                <span>

                In hear we will help you turn you products visible to everyone in an interactive manner and way though graphic design and photography.you really in the right place to get any kind of design you think and dream, just show show your dreams to people in the way you want perfectlly
                </span>
            </div>
        </div>
        <div className="figures">
            <div>
                <span>+140 designs</span>
                <span>weddings</span>
            </div>
            <div>
                <span>+30 companies</span>
                <span>limited companies</span>
            </div>
            <div>
                <span>+400 photos & logos</span>
                <span>parties,shooting,etc</span>
            </div>

        </div>
        <div className='hero-buttons'>
            <button className="btn">Get started</button>
            <button className='btn'>Learn more</button>
        </div>
      </div>
        <div className="right-h">
            <button className='btn'>Book now</button>
            <div className="heart-rate">

            <img src={Heart} alt=""/>
            <span>Booking rate rate</span>10+ books per day <span></span>
            </div>
            <img src={hero_image} alt="" className='hero-image'/>
            <img src={hero_image_back} alt="" className='hero-image'/>
          <div className="calories">
            <img src={Calories} alt=""/>
            <div>
            <span>Calories Burned</span><span></span><span>220 kcal</span>
            </div>
          </div>

        </div>
        
    </div>
  )
}
