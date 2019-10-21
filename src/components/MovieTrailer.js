import React from 'react'
import ReactModal from 'react-modal'
import YouTube from '@u-wave/react-youtube'

const MovieTrailer = props => {
  return (
    <ReactModal
      isOpen={props.showModal}
      contentLabel='onRequestClose Example'
      onRequestClose={props.handleCloseModal}
    >
      <YouTube video={props.trailerKey} autoplay />
      <button onClick={props.handleCloseModal}>Close Modal</button>
    </ReactModal>
  )
}

export default MovieTrailer
