import React from 'react'


export default function navvBar(props) {
  return (
      <nav className="navbar navbar-light bg-light " key={props.navvBar}>
        <a className="navbar-brand" href="#1" >Navbar</a>
        <form className="form-inline" onSubmit = {() => console.log('submitting')} onChange = { query => console.log('query',query.target.value)} >
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
  )
}

// onChange={(query) => setQuery(query.target.value)}