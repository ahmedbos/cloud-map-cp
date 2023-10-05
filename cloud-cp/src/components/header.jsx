import React from 'react'
import image1 from './image1.png';

import './header.css'

const Header = () => (
    <div className='header'>
  <div className="header-content">
    <h1>map me</h1>
    <img src={image1} alt='logo'/>
  </div>
  </div>
)

export default Header