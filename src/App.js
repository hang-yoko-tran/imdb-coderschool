import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './App.css'
import MovieCard from './components/MovieCard'
// import Nav from './components/Nav'
import Footer from './components/Footer'

function App () {
  const API_KEY = '504f5aa37e6fcc57fd8859d3ce9a1c19'
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const [rateSort, setRateSort] = useState('highToLow')

  // let query = '';

  // function setQuery(newquery)
  // {
  //   query = newquery;
  // }

  const getData = async url => {
    console.log(url)

    let response = await fetch(url)
    let data = await response.json()

    if (query === '') {
      setMovies(data.results)
    } else {
      setMovies(data.results)
    }

    setPage(page + 1)
  }

  useEffect(() => {
    getData(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`
    )
  }, [])

  const handleSearch = e => {
    e.preventDefault()
    if (query === '') {
      getData(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=1`
      )
    } else {
      getData(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&page=1&query=${query}`
      )
    }
  }

  const loadMore = async () => {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`
    let response = await fetch(url)
    let data = await response.json()

    setMovies([...movies, ...data.results])

    setPage(page + 1)
  }

  const loadAllMovies = async () => {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=1`
    let response = await fetch(url)
    let data = await response.json()

    setMovies(data.results)
  }

  const loadCurrentPlaying = async () => {
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`
    let response = await fetch(url)
    let data = await response.json()

    setMovies(data.results)
  }

  const loadTopRated = async () => {
    let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
    let response = await fetch(url)
    let data = await response.json()

    setMovies(data.results)
  }

  const handleRateSortChange = async (e, selectedItem) => {
    let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
    let response = await fetch(url)
    let data = await response.json()

    if (selectedItem === 'lowToHigh') {
      data.results.sort((a, b) => (a.vote_count > b.vote_count ? 1 : -1))
    } else {
      data.results.sort((a, b) => (a.vote_count < b.vote_count ? 1 : -1))
    }

    setMovies(data.results)
  }

  return (
    <div className='App'>
      <Nav
        loadAllMovies={loadAllMovies}
        loadCurrentPlaying={loadCurrentPlaying}
        loadTopRated={loadTopRated}
        handleSearch={handleSearch}
        setQuery={setQuery}
        query={query}
      />

      <div className='mx-auto col-12 sort'>
        <div className='input-group mb-3 col-3 '>
          <div className='input-group-prepend'>
            <label className='input-group-text' for='inputGroupSelect01'>
              Sort By Rating
            </label>
          </div>
          <select
            className='custom-select'
            id='inputGroupSelect01'
            onChange={e => handleRateSortChange(e, e.target.value)}
          >
            <option value='highToLow' selected>
              Highest to Lowest
            </option>
            <option value='lowToHigh'>Lowest to Highest</option>
          </select>
        </div>
      </div>

      <section>
        <div className='container'>
          <div className='row'>
            {movies.length > 0 &&
              movies.map(movie => {
                return <MovieCard key={movie.id} movie={movie} />
              })}
          </div>
          <div className='row'>
            <div className='col-12'>
              <button
                type='button'
                onClick={loadMore}
                className='btn btn-primary btn-more'
              >
                SEE MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
