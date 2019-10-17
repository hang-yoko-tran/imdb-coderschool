import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MovieCard from './components/MovieCard'


function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const getData = async () => {
    const API_KEY = "504f5aa37e6fcc57fd8859d3ce9a1c19";
    let response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`);
    let data = await response.json();
    // setMovies(movies.concat(data.results))
    setMovies([...movies, ...data.results])
    console.log(movies)

  }


  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#1" >Navbar</a>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>

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
    </div>
  );
}

export default App;
