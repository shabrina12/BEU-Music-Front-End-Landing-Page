import React from 'react';
import { Star, Google, Appstore } from '../../images';
import './section8.css';


const Section8 = () => {
  return (
    <section className='section-8'>
        <h1>Join the Team</h1>
        <div className='icon-container'>
            <img src={Google} alt='google' />
            <img src={Appstore} alt='appstore' />
        </div>
        <div className='rating-container'>
            <img src={Star} alt='star' />
            <p>5 Star Ratings (2k+ Review)</p>
        </div>
    </section>
  )
}

export default Section8