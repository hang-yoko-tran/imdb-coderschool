import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MovieCard from './components/MovieCard'
import Nav from './components/Nav'
import Footer from './components/Footer'



function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  // const [query, setQuery] = useState('');

  const getData = async () => {
    const API_KEY = "504f5aa37e6fcc57fd8859d3ce9a1c19";
    let response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`);
    let data = await response.json();
    // setMovies(movies.concat(data.results))
    setMovies([...movies, ...data.results])
    console.log(movies)
    setPage(page + 1)
  }


  useEffect(() => {
    getData()
  }, [])
  

  return (
    <div className="App">

      <Nav />

      <section>
        <div className="container">
          <div className="row">
            {movies.length > 0 && movies.map((movie) => {
              return (
                <MovieCard key={movie.id} movie={movie} />
              )
            })}
          </div>
          <div className="row">
            <div className="col-12">
              <button type="button" onClick={() => getData()} className="btn btn-primary btn-more">SEE MORE</button>
            </div>
          </div>
        </div>
      </section>
    
      <Footer />

    </div>
  );
}

export default App;
