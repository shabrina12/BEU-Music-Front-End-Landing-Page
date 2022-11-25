import React from 'react';
import { playIcon } from '../../images';

const Album = ({albumCover, albumTitle, albumSinger}) => {
  return (
    <div className='album-card'>
        <img src={albumCover} alt='album cover' />
        <div className='album-content'>
            <div className='album-title'>
                <h3>{albumTitle}</h3>
                <p>{albumSinger}</p>
            </div>
            <div className='play-icon'>
                <img src={playIcon} alt='play' />
            </div>
        </div>
    </div>
  )
}

export default Album;