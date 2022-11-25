import React from 'react';
import {microsoft, slack, google, apple, axure} from '../../images';
import './section1.css';

const Section1 = () => {
  return (
    <section className='section-1'>
        <div className='img-container'>
            <img src={microsoft} alt='partner' />
        </div>
        <div className='img-container'>
            <img src={slack} alt='partner' />
        </div>
        <div className='img-container'>
            <img src={google} alt='partner' />
        </div>
        <div className='img-container'>
            <img src={apple} alt='partner' />
        </div>
        <div className='img-container'>
            <img src={axure} alt='partner' />
        </div>
    </section>
  )
}

export default Section1