import React from 'react'
import ReactModal from 'react-modal'
import YouTube from '@u-wave/react-youtube'

const MovieTrailer = props => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  }
  return (
    <ReactModal
      isOpen={props.showModal}
      style={customStyles}
      contentLabel='onRequestClose Example'
      onRequestClose={props.handleCloseModal}
    >
      <YouTube
        video={props.trailerKey}
        height='480'
        width='720'
        autoplay={false}
      />
    </ReactModal>
  )
}

export default MovieTrailer
