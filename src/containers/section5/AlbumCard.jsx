import React from 'react'
import { playIcon } from '../../images';

const AlbumCard = ({genreMenu}) => {
    return (
        genreMenu.map((item) =>{
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
    )
}

export default AlbumCard