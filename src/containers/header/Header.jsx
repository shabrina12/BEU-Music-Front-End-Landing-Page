import React from 'react';
import { header, googlePlay, appStore } from '../../images';
import Navbar from '../../components/navbar/Navbar';
import './header.css';

const Header = () => {
  return (
    <header>
        <Navbar />
        <div className='header-container'>
          <div className='header-text'>
            <h3>SOMETHING NEW EVERYDAY</h3>
            <h1>Listen anytime anywhere</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            <div className='header-btn'>
              <img src={googlePlay} alt='download' />
              <img src={appStore} alt='download' />
            </div>
          </div>

          <div className='header-image'>
            <img src={header} alt='header' />
          </div>
        </div>
    </header>
  )
}

export default Header