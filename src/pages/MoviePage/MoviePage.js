import React from 'react';
import {useSelector} from "react-redux";

const MoviePage = () => {
    const {uniqmovie} = useSelector(state => state['movieReducer'])
    const {genres, poster_path, title, overview, popularity, images} = uniqmovie

    return (
        <div style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${images && images.backdrops[0].file_path}?api_key=e77bd741cd0b705c1841df139925cbcd)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'noRepeat',
            height: "100vh",
            overflow: "scroll"
        }}>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}?api_key=e77bd741cd0b705c1841df139925cbcd`}
                     alt=""/>
            </div>
            <div>
                <div>{genres && genres.map(genre => <div key={genre.id}>{genre.name}</div>)}</div>
                <div>{title}</div>
                <div>{overview}</div>
                <div>{popularity}</div>
                <div>{images && images.backdrops.map(image => <img key={image.id}
                                                                   src={`https://image.tmdb.org/t/p/w500${image.file_path}?api_key=e77bd741cd0b705c1841df139925cbcd`}
                                                                   alt=""/>)}</div>
            </div>
        </div>
    );
};

export default MoviePage;