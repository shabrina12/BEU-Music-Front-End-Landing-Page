import React from 'react';
import { section3 } from '../../images';
import SubHeading from '../../components/subHeading/SubHeading';
import './section3.css';

const Section3 = () => {
  return (
    <section className='section-3'>
        <div className='img-container'>
            <img src={section3} alt='img' />
        </div>
        <div className='subHeading-3'>
            <SubHeading subTitle='APP FEATURES' title='Listening is everything' text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna' />
            <a href='' className='btn-orange'>Explore</a>
        </div>
    </section>
  )
}

export default Section3