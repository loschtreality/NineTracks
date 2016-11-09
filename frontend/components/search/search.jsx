import React, { PropTypes } from 'react'

class Search extends React.Component {
  render () {
    return (
      <form className="navbar-form navbar-left search-box">
        <div className="form-group search-input-container">
          <input type="search" className="form-control search-input" placeholder="Search by Playlist and Tag"></input>
        </div>
      </form>
    );
  }
}

export default Search;
