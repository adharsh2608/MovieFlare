import React, { useState, useEffect } from 'react'
import Search from './components/search.jsx'
import MovieCard from './components/MovieCard.jsx';
import {useDebounce} from 'react-use'

const API_BASE_URL='https://api.themoviedb.org/3';
const API_KEY=import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS={
  method:"GET",
  headers:{
    accept: 'application/json',
    Authorization:`Bearer ${API_KEY}`
  }
}

const App = () => {
  const[searchTerm, setSearchTerm]=useState('');
  const[errorMessage, setErrorMessage]=useState('');
  const[movieList, setMovieList]=useState([]);
  const[isLoading, setIsLoading]=useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  useDebounce(()=>setDebouncedSearchTerm(searchTerm),500,[searchTerm])
  const fetchMovies = async (query='')=>
  {
    setIsLoading(true);
    setErrorMessage('');
    try{
      const endpoint=query?`${API_BASE_URL}/search/movie?query= ${encodeURIComponent(query )}`:`${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response=await fetch(endpoint,API_OPTIONS);
      
      if(!response.ok)
      {
        throw new Error('Failed to fetch movies');
      }
      const data= await response.json();
      if(data.Response==='False')
      {
        setErrorMessage('Failed to fetch movies');
        setMovieList([]);
        return;
      }
      setMovieList(data.results);
    }
    catch(error)
    {
      console.log(`Error message ${error}`);
      setErrorMessage('Error fetching movies. Please try again later :)');
    }
    finally{
      setIsLoading(false);
      console.log('Hello');
    }
  }
  useEffect(()=>{
    fetchMovies(debouncedSearchTerm);
  },[debouncedSearchTerm])
  return (
    <div>
    <nav className="flex items-center justify-between px-6 py-4 bg-black bg-opacity-60 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
    <div className="text-white text-xl font-bold">
      🎬 MovieFlare
    </div>
    <div className="space-x-6 text-white">
      <a href="#" className="hover:text-gradient transition-all">Home</a>
      <a href="#" className="hover:text-gradient transition-all">Popular</a>
      <a href="#" className="hover:text-gradient transition-all">Genres</a>
    </div>
  </nav>
    <main>
      <div className='pattern'/>
      <div className="wrapper">
      <header className='flame-hero'>
        <h1>Top <span className='text-gradient'>Movies</span> Must <span className='text-gradient'>Watch</span>, <br />All <span className='text-gradient'>Genres</span>
        </h1>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/></header>
        <section className='all-movies'>
          <h2>All movies</h2>
          {isLoading?(<p className='text-white'>Loading...</p>):errorMessage?(<p className='text-red-500'>{errorMessage}</p>):
          (<ul>
            {movieList.map((movie)=>(
              <MovieCard key={movie.id} movie={movie} />
            ))}
            </ul>
            )
          }
        </section>
        
        <h1 className='text-white'>{searchTerm}</h1>
      </div>
    </main>
    </div>
  )
}

export default App