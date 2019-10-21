import React from 'react'

export default function navvBar (props) {
  let {
    loadAllMovies,
    loadCurrentPlaying,
    loadTopRated,
    handleSearch,
    setQuery,
    query
  } = props
  return (
    <nav className='navbar navbar-light '>
      <div>
        <span className='logo'>
          <i className='fas fa-compact-disc' /> MOVIES
        </span>
      </div>
      <div className='kinds'>
        <button
          type='button'
          className='btn btn-kindmovies'
          onClick={loadAllMovies}
        >
          All Movies
        </button>
        <button
          type='button'
          className='btn btn-kindmovies'
          onClick={loadCurrentPlaying}
        >
          Currently Playing
        </button>
        <button
          type='button'
          className='btn btn-kindmovies'
          onClick={loadTopRated}
        >
          Top Rated
        </button>
      </div>
      <form className='form-inline' onSubmit={e => handleSearch(e)}>
        <input
          className='form-control mr-sm-2'
          type='search'
          placeholder='Search'
          aria-label='Search'
          value={query}
          onChange={e => {
            setQuery(e.target.value)
          }}
        />
        <button className='btn btn-submit my-2 my-sm-0' type='submit'>
          Search
        </button>
      </form>
    </nav>
  )
}
