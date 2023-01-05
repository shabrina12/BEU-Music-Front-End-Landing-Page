# Responsive Front End Website - BEU Music using React JS
This project is a single page front end web for BEU Music built with React JS framework. I created this project as an exercise to develop front end skills

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Credit](#credit)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

- Build out the project to the designs provided

### Screenshot
![Design overview for BEU Music landing page](./src/images/header-beu.png)

### Links
- [Live Site URL](https://glowing-tarsier-b071f1.netlify.app/)

### Credit
- [Figma Web Design & UI Kit i used for this project is published by Dmm Kreativ](https://ui8.net/dmm-kreativ/products/uniquepages?status=7)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React JS](https://reactjs.org/) - JS library
- [react icons](https://react-icons.github.io/react-icons/) - JS library to add icons

### What I learned

I learned how to implement a filter function using react hooks to filter albums based on genres
![Album filtering based on genres](./src/images/album-genre.png)
Code snippets, see below:
```js
const allGenres = ['All Genre', ...new Set(AlbumData.map(album => album.genre))];

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
```
The following screenshot is an example of displaying albums based on pop genre
![Filter pop music](./src/images/album-filter-genre.png)


### Continued development
The development of this project can be continued by creating multiple page for each links in navigation bar

### Useful resources
- [UI/UX Design Resources](https://ui8.net/) - This website provide many UI/UX design some are free. I really liked this website and will use it going forward.


## Author

- Github - [Shabrina Putri](https://github.com/shabrina12/)
- Instagram - [@shabputri_](https://www.twitter.com/yourusername)
