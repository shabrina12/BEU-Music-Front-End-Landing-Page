import React from 'react';
import { section4} from '../../images';
import SubHeading from '../../components/subHeading/SubHeading';
import './section4.css';

const Section4 = () => {
  return (
    <section className='section-4'>
        <div className='subHeading-4'>
            <SubHeading subTitle='APP FEATURES' title='Massive Library' text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna' />
        </div>
        <div className='img-container'>
            <img src={section4} alt='phone' />
        </div>
    </section>
  )
}

export default Section4