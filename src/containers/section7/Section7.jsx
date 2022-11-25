import React from 'react';
import { blog1, blog2, blog3 } from '../../images';
import SubHeading from '../../components/subHeading/SubHeading';
import './section7.css';

const Blog = ({img, title, date}) => {
    return (
    <div className='blog-card'>
        <img src={img} alt='blog' /> 
        <h3>{title}</h3>
        <p>{date}</p>
    </div>
    )
}

const Section7 = () => {
  return (
    <section className='section-7'>
        <SubHeading subTitle='OUR COMMUNITY' title='Latest Blogs' />
        <div className='blogs-container'>
            <Blog img={blog1} title='15 Best Audiobooks you’ll be impressed with.' date='2 March 2022' />
            <Blog img={blog2} title='How to start a Podcast on BEU Checklist Platform' date='7 March 2022' />
            <Blog img={blog3} title='Top 20 Best Albums of the year and here’s why!' date='12 March 2022' />
        </div>
    </section>
  )
}

export default Section7