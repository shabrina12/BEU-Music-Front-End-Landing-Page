import React from 'react';
import './subHeading.css'

const SubHeading = ({subTitle, title, text}) => (
  <div className='subHeading'>
    <span className='subTitle'>{subTitle}</span>
    <h1 className='title'>{title}</h1>
    <p className='text'>{text}</p>
  </div>
);

export default SubHeading;