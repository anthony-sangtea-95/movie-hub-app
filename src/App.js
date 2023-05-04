import React, { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';


const API_URL = 'http://www.omdbapi.com?'; // s=Spiderman&apikey=6909d63d

const App = () =>{

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}s=${title}&apikey=6909d63d`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(()=>{
        searchMovies('Spiderman');
    }, []);

    return(
        <div className='app'>
            <div className='main-body'>
                <div className='header'>
                    <h1>Movies <span className='hub'>Hub</span></h1>
                </div>
                <div className='search'>
                    <div className='input-text'>
                        <input type='text' 
                        placeholder='Search for Movies' 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    </div>
                    <div className='search-icon'>
                        <button
                            className='image-search'
                            onClick={()=> searchMovies(searchTerm)}>
                                Search
                        </button>
                    </div>
                </div>
                {
                    movies?.length>0?
                    (
                        <div className='container'>
                            {movies.map(movie=>(
                                <MovieCard movie={movie}/>
                            ))}
                        </div>
                    )
                    :
                    (
                        <div className='empty'>
                            <h2>No Movies Found</h2>
                        </div>
                    )
                }
            </div>
            
        </div>
    )

}

export default App;