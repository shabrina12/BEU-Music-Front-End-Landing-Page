import React from 'react';
import {FaFacebookSquare, FaTwitterSquare, FaLinkedin} from 'react-icons/fa';
import './footer.css';

const LinksCard = ({title, link1, link2, link3, link4}) => {
    return (
        <div className='links-card'>
            <h2>{title}</h2>
            <ul>
                <li><a href=''>{link1}</a></li>
                <li><a href=''>{link2}</a></li>
                <li><a href=''>{link3}</a></li>
                <li><a href=''>{link4}</a></li>
            </ul>
        </div>
    )
}

const Footer = () => {
  return (
    <footer>
        <div className='footer'>
            <div className='logo-container'>
                <h1>BEU.</h1>
                <p>The world’s largest streaming service</p>
                <div className='icons-container'>
                    <FaFacebookSquare size={27} style={{cursor: 'pointer'}} />
                    <FaTwitterSquare size={27} style={{cursor: 'pointer'}} />
                    <FaLinkedin size={27} style={{cursor: 'pointer'}} /> 
                </div>
            </div>

            <div className='links-container'>
                <LinksCard title='Company' link1='About us' link2='Jobs' link3='Records' link4='Supports' />
                <LinksCard title='Community' link1='For Artists' link2='Updates' link3='Advertising' link4='Investor' />
                <LinksCard title='Legal' link1='Privacy' link2='Policy' link3='Terms' link4='Conditions' />
                <LinksCard title='Social' link1='Instagram' link2='Twitter' link3='Facebook' link4='Youtube' />
            </div>
        </div>
        <p className='copyright'>Copyright 2022 Coding by Shabrina12 @github, All rights reserved.</p>
    </footer>
  )
}

export default Footer