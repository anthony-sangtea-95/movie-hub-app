import React from "react";

const MovieCard = ({movie})=>{
    return(
        <div className='movie'>
            <div className='year'>
                <p>{movie.Year}</p>
            </div>
            <div className="poster">
                <img src={movie.Poster !== 'N/A'?movie.Poster:'https://via.placeholder.com/400'} alt={movie.title}/>
            </div>
            <div className='description'>
                <span>{movie.Type}</span>
                <h4>{movie.Title}</h4>
            </div>
        </div>
    )
}

export default MovieCard