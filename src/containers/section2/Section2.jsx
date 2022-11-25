import React from 'react';
import {app, icon1, icon2, icon3} from '../../images';
import SubHeading from '../../components/subHeading/SubHeading';
import './section2.css';

const Section2 = () => {
  return (
    <section className='section-2'>
      <div className='subHeading-2'>
        <SubHeading subTitle='APP FEATURES' title='All in One' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor' />
      </div>
      <div className='img-container'>
        <img src={app} alt='app' />
      </div>
      <div className='features-container'>
        <div className='feature-card'>
          <img src={icon1} alt='icon' />
          <h3>Podcasts</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </div>

        <div className='feature-card'>
          <img src={icon2} alt='icon' />
          <h3>Audiobooks</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </div>

        <div className='feature-card'>
          <img src={icon3} alt='icon' />
          <h3>Music</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </div>
      </div>
    </section>
  )
}

export default Section2