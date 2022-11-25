import React from 'react';
import Album from '../../components/albumCard/Album';
import { hits1, hits2, hits3, hits4, hits5, hits6, hits7, hits8, playIcon } from '../../images';
import './section5.css';

const Section5 = () => {
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
            <div className='album-top'>
                <Album albumCover={hits1} albumTitle='Blinding Lights' albumSinger='The weekend' />
                <Album albumCover={hits2} albumTitle='Watermelon Sugar' albumSinger='Harry Styles' />
                <Album albumCover={hits3} albumTitle='Yummy' albumSinger='Justin Bieber' />
                <Album albumCover={hits4} albumTitle='Positions' albumSinger='Ariana Grande' />
            </div>

            <div className='album-bottom'>
                <Album albumCover={hits5} albumTitle='Lonely' albumSinger='Imagine Dragons' />
                <Album albumCover={hits6} albumTitle='Always Love You' albumSinger='Elton John' />
                <Album albumCover={hits7} albumTitle='Easy On Me' albumSinger='Adele' />
                <Album albumCover={hits8} albumTitle='Tides' albumSinger='Ed Sheeran' />
            </div>
        </div>
    </section>
  )
}

export default Section5