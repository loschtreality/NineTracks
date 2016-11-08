import React, { PropTypes } from 'react'

class PlaylistSongListSearch extends React.Component {
  constructor (props) {
    super(props)

  }


  renderSelectedSongs (songs) {
    if (songs.length === 0) {
      return (
        <li className="clear track">
        </li>
      )
    }

    return songs.map((song, index) => {
      let isEven = index % 2 === 0
        if (isEven) {
          return (<li key={index} className="even clear track">
            <span className="number">{index + 1}</span>
            <div className="track_info">
              <span className="track_name">{song.title}</span>
              <span className="by_separator">by</span>
              <span className="track_artist">{song.artist}</span>
            </div>
            <div>
              <button onClick={this.props.remove_track(index)} className="remove_track flatbutton">Delete</button>
            </div>
          </li>)
        } else {
          return (<li key={index} className="odd clear track">
            <span className="number">{index + 1}</span>
            <div className="track_info">
              <span className="track_name">{song.title}</span>
              <span className="by_separator">by</span>
              <span className="track_artist">{song.artist}</span>
            </div>
            <div>
              <button onClick={this.props.remove_track(index)} className="remove_track flatbutton">Delete</button>
            </div>
          </li>)

        }
    })

  }


  render () {
    return (
        <div className="col-lg-6 col-md-6 col-xs-12" id="upload_tracks">
          <div id="track_upload_header">
            <div id="track_count">
              <span>Tracks:</span>
              <span id="length">{this.props.songs.length}</span>
            </div>
            <h6>Choose at least 9 Tracks</h6>
          </div>

          <div id="track_items">
            <ul className="track_list">
              {this.renderSelectedSongs(this.props.songs)}
            </ul>
          </div>
        </div>
    );
  }
}

export default PlaylistSongListSearch;
