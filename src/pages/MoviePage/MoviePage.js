import React from 'react';
import {useSelector} from "react-redux";
import './MoviePage.css'

const MoviePage = () => {
    const {uniqmovie} = useSelector(state => state['movieReducer'])
    const {genres, poster_path, title, overview, popularity, images, release_date} = uniqmovie
    console.log(uniqmovie)
    let backimage = ''
    if (images?.backdrops.length < 1) {
        backimage = 'https://image.tmdb.org/t/p/original/7uRbWOXxpWDMtnsd2PF3clu65jc.jpg?api_key=e77bd741cd0b705c1841df139925cbcd&language=en-US'
    } else {
        backimage = `https://image.tmdb.org/t/p/original${images?.backdrops[0].file_path}?api_key=e77bd741cd0b705c1841df139925cbcd`

    }

    return (
        <div className={'backimage'} style={{
            backgroundImage: `url(${backimage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'noRepeat',
            height: "100vh",
            overflow: "scroll"
        }}>
            <div className={'general'}>
                <div className={'left'}>
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}?api_key=e77bd741cd0b705c1841df139925cbcd`}
                         alt=""/>
                </div>
                <div className={'right'}>
                    <h1>{title}</h1>
                    <div>Genres</div>
                    <div>{genres && genres.map(genre => <div key={genre.id}>{genre.name}</div>)}</div>
                    <div>{overview}</div>
                    <div>Rating:{popularity}</div>
                    <div>Release date:{release_date}</div>
                </div>
            </div>
            <div className={'images'}>{images && images.backdrops.map(image => <img key={image.id}
                                                               src={`https://image.tmdb.org/t/p/w300${image.file_path}?api_key=e77bd741cd0b705c1841df139925cbcd`}
                                                               alt=""/>)}</div>
        </div>
    );
};

export default MoviePage;