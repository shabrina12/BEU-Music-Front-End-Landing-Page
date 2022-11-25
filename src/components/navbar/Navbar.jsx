import React, { useState } from 'react';
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav>
        <h1>BEU.</h1>
        <ul className='nav-links'>
            <li><a href=''>Home</a></li>
            <li><a href=''>Trending</a></li>
            <li><a href=''>Latest</a></li>
            <li><a href=''>Blog</a></li>
        </ul>
        <a className='getStarted-btn-big' href=''>Get Started</a>

        <div className='navbar-smallscreen'>
            <RiMenu3Line style={{'cursor': 'pointer'}} color='black' fontSize={27} onClick={() => setToggleMenu(true)} />
            {toggleMenu && (
                <div className='navbar-smallscreen_overlay'>
                <h1>BEU.</h1>
                <RiCloseLine  color='black' fontSize={27} className='close_icon' onClick={() => setToggleMenu(false)} />
                <ul className='navbar-smallscreen_links'>
                    <li><a href=''>Home</a></li>
                    <li><a href=''>Trending</a></li>
                    <li><a href=''>Latest</a></li>
                    <li><a href=''>Blog</a></li>
                    <li><a className='getStarted-btn-small' href=''>Get Started</a></li>
                </ul>
            </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar