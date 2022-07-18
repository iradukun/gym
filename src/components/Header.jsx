import React from 'react'
import './Header.css'
import Logo from '../assets/logo.png'
export default function Header() {
  return (
    <div className='header'>
        <img src={Logo} alt="" className='logo'/>
        <ul className="header-menu">
            <li>Home</li>
            <li>Who we are</li>
            <li>Our services</li>
            <li>why us</li>
            <li>Testimonials</li>
            <li>contact us</li>

        </ul>
    </div>
  )
}
