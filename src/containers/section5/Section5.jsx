import React from 'react';
import AlbumData from '../../containers/section5/AlbumData';
import { playIcon } from '../../images';
import './section5.css';

const Section5 = () => {

    const Album = AlbumData.map(item => {
    return (
        <div className='album-card' key={item.id}>
            <img src={item.albumCover} alt='album cover' />
            <div className='album-content'>
                <div className='album-title'>
                    <h3>{item.albumTitle}</h3>
                    <p>{item.albumSinger}</p>
                </div>
                <div className='play-icon'>
                    <img src={playIcon} alt='play' />
                </div>
            </div>
        </div>
    )
    })

  return (
    <section className='section-5'>
        <div className='heading'>
            <div className='subheading'>
                <span>WHAT WE OFFER</span>
                <h1>Latest Hits</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
            <div className='genres-container'>
                <a href=''>All Genre</a>
                <a href=''>Rock</a>
                <a href=''>Pop Music</a>
                <a href=''>Folk Music</a>
                <a href=''>Hip Hop Music</a>
            </div>
        </div>

        <div className='album-container'>
            {Album}
        </div>
    </section>
  )
}

export default Section5