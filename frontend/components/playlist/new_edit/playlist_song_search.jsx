import React, { PropTypes } from 'react'

class PlaylistSongSearch extends React.Component {
  constructor(props) {
    super(props)

  }

  renderSearchResults (query) {
    if (query === "") {
      return (
        <li className="clear track">
        </li>
      )
    }

    return this.props.searchResults.map((track, index) => {
      return (
        <li key={index} className="clear track">
          <span className="number">{index + 1}</span>
          <div className="track_info">
            <span className="track_name">{track.title}</span>
            <span className="by_separator">by</span>
            <span className="track_artist">{track.artist}</span>
          </div>
          <div>
            <button onClick={this.props.add_track(track)} className="add_track flatbutton">Add to Playlist</button>
          </div>
        </li>
      )
    })
  }



  render () {
    return (
      <div className="col-lg-6 col-md-6 col-xs-12">

        <div id="track_upload_header">
            <input placeholder="Search Tracks" id="search_tracks" onChange={this.props.update('query')} className="roundText" type="search"></input>
        </div>

        <div id="track_items">
          <ul className="track_list">
            {this.renderSearchResults(this.props.searchResults)}
          </ul>
        </div>

      </div>
    );
  }
}

export default PlaylistSongSearch;
