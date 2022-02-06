import React from 'react';

const Movie = ({movie:{id, original_title, overview, popularity, poster_path }}) => {
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w200${poster_path}?api_key=e77bd741cd0b705c1841df139925cbcd`} alt=""/>
            <div>{original_title}</div>
            <div>{overview}</div>
            <div>{popularity}</div>
        </div>
    );
};

export default Movie;