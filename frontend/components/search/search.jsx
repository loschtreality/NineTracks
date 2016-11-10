import React, { PropTypes } from 'react'

class Search extends React.Component {
  constructor () {
    super()


    this.state = {query: ""}
  }

  _handleKeyPress(e) {
    if (e.key === "enter") {
      this.searchTags(this.state.toLowerCase())
    } else {
      this.setState({query: e.target.value})
    }
  }


  searchTags(query) {
    
  }

  render () {
    return (
      <form className="navbar-form navbar-left search-box">
        <div className="form-group search-input-container">
          <input type="search" className="form-control search-input" placeholder="Search by Playlist and Tag" onChange={this._handleKeyPress}></input>
        </div>
      </form>
    );
  }
}

export default Search;
