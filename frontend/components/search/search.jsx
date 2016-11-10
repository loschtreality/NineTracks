import React, { PropTypes } from 'react'
import { hashHistory } from 'react-router'

class Search extends React.Component {
  constructor (props) {
    super(props)

    this.state = {query: ""}

    this._handleKeyPress = this._handleKeyPress.bind(this)
  }

  _handleKeyPress(e) {
    if (e.charCode === 13) {
      e.preventDefault()
      this.props.searchTags(this.state.query.toLowerCase())
      hashHistory.push("search")
    } else {
      this.setState({query: e.target.value})
    }
  }

  render () {
    return (
      <form className="navbar-form navbar-left search-box">
        <div className="form-group search-input-container">
          <input type="search" className="form-control search-input" placeholder="Search by Playlist and Tag" onKeyPress={this._handleKeyPress}></input>
        </div>
      </form>
    );
  }
}

export default Search;
