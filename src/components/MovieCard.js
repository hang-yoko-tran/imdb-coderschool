import React from 'react'
import _ from 'lodash'

export default function MovieCard(props) {
  return (
    <div className="col-md-4" key={props.movie.id}>
      <div className="card mb-4 shadow-sm">
        <img className="bd-placeholder-img card-img-top" width="100%" height="525" src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt={"img poster"} />
        <div className="card-body dflex flex-coluhm justify-content-around" >
          {/* <h3 class="title">{props.movie.title}</h3> */}
          <h6>🗓️ Release date: {props.movie.release_date}</h6>
          <h6>📉 Rating: {props.movie.vote_average}</h6>
          <p className="card-text">{_.truncate(props.movie.overview, {
            'length': 150,
            'separator': ' ',
            'omission': '[...]'
          })}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
              <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
            </div>
            <small className="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    </div>
  )
}
