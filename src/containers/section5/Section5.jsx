import React, {useState} from 'react';
import AlbumData from '../../containers/section5/AlbumData';
import CategoryButton from './CatButton';
import AlbumCard from './AlbumCard';
import './section5.css';

const allGenres = ['All Genre', ...new Set(AlbumData.map(album => album.genre))];

const Section5 = () => {
    const [genreMenu, setGenreMenu] = useState(AlbumData);
    const [buttons, setButtons] = useState(allGenres);
  
    const filter = (button) =>{
      if(button === 'All Genre'){
        setGenreMenu(AlbumData);
        return;
      }
      const filteredData = AlbumData.filter(album => album.genre ===  button);
      setGenreMenu(filteredData)
    }
  
    return (
        <section className='section-5'>
            <div className='heading'>
                <div className='subheading'>
                    <span>WHAT WE OFFER</span>
                    <h1>Latest Hits</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
                <CategoryButton button={buttons} filter={filter} />
            </div>

            <div className='album-container'>
                <AlbumCard genreMenu={genreMenu} />
            </div>
        </section>
    );
}

export default Section5