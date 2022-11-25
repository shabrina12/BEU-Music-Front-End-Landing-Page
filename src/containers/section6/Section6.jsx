import React from 'react';
import SubHeading from '../../components/subHeading/SubHeading';
import {sec6Phone, sec6Vector, podcast1, podcast2, podcast3, podcast4} from '../../images';
import './section6.css';

const Podcast = ({img, title, text}) => {
    return (
    <div className='podcast-card'>
        <img src={img} alt='podcast' />
        <h3>{title}</h3>
         <p>{text}</p>
    </div>
    )
}

const Section6 = () => {
  return (
    <section className='section-6'>
        <div className='img-container'>
            <img src={sec6Phone} alt='img' />
        </div>

        <div className='podcasts-container'>
            <SubHeading subTitle='WHAT WE OFFER' title='Trending Podcasts' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor' />
           
            <div className='podcast-top'>
                <Podcast img={podcast1} title='Hot White Heist' text='A star-studded cast featuring Bowen Yang, Cynthia Nixon, Jane' />
                <Podcast img={podcast2} title='The Improvement Association' text='While a podcast about voter fraud in a small town in North' />
            </div>

            <div className='podcast-bottom'>
                <Podcast img={podcast3} title='The Sporkful' text='A podcast for people who love to eat and talk about the wonderful world of' />
                <Podcast img={podcast4} title='Fat Mascara' text='Slap on a face mask and settle in for some me-time with this podcast that' />
            </div>

            <a href='' className='btn-orange'>Listen Now</a>
        </div>

    </section>
  )
}

export default Section6