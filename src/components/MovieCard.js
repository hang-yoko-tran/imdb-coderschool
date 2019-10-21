import React, { useState } from 'react'
import _ from 'lodash'
import MovieTrailer from './MovieTrailer'

export default function MovieCard (props) {
  const [trailerKey, setTrailerKey] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const getTrailerKey = async movieId => {
    console.log(movieId)

    const trailerUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=504f5aa37e6fcc57fd8859d3ce9a1c19`
    const response = await fetch(trailerUrl)
    const data = await response.json()
    console.log(data)

    data.results.length > 0 && setTrailerKey(data.results[0].key)
    handleOpenModal()
  }

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal  = () => {
    setShowModal(false)
  }

  return (
    <div className='col-md-4' key={props.movie.id}>
      <MovieTrailer showModal={showModal} trailerKey={trailerKey} handleCloseModal={handleCloseModal} />
      <div className='card mb-4 shadow-sm mt-5'>
        <img
          className='bd-placeholder-img card-img-top'
          width='100%'
          height='525'
          src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
          alt={'img poster'}
        />
        <div className='card-body dflex flex-coluhm justify-content-around'>
          <h4 className='title'>
            {props.movie.title}
          </h4>
          <h6>
            🗓️ Release date: {props.movie.release_date}
          </h6>
          <h6>
            📉 Rating: {props.movie.vote_average}
          </h6>
          <p className='card-text'>
            {_.truncate(props.movie.overview, {
              length: 150,
              separator: ' ',
              omission: '[...]'
            })}
          </p>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='btn-group'>
              <button
                type='button'
                className='btn btn-sm btn-outline-secondary'
              >
                View
              </button>
              <button
                type='button'
                className='btn btn-sm btn-outline-secondary'
                data-toggle='modal'
                data-target='#exampleModal'
                onClick={() => getTrailerKey(props.movie.id)}
              >
                Trailer
              </button>
            </div>
            <small className='text-muted'>9 mins</small>
          </div>
        </div>
      </div>
    </div>
  )
}
