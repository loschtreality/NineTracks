import React, { PropTypes } from 'react'

class ShowSongs extends React.Component {
  render () {

    // if (this.props.description === undefined) {
    //   return (
    //     <div className="loader">Loading...</div>
    //   )
    //
    // } else {

    return (
      <div className="card">
        <div id="user_byline">
          <span className="byeline"> by
            <a className="propername">
              {this.props.username}
            </a>
          </span>
        </div>
        <hr className="divide"/>
        <h6 id="playlist_details">Description</h6>
          <div id="playlist_description">
            <p>
              {this.props.description}
            </p>
          </div>
        <hr/>
        <div id="song_list_wrapper">
          <div>
            <ul id="played_tracks">

            {
              this.props.songs.map((song) => {
                return (
                  <li key={song.id} className="played_track">
                    <div className="track_details_container">
                      <div>
                        <div className="title_artist">
                          <span className="title">{song.title}</span>
                          <span className="by_artist">by</span>
                          <span className="artist">{song.artist}</span>
                        </div>
                      </div>
                    </div>
                  </li>
                )
              })
            }

            </ul>


          </div>
        </div>
      </div>
    );
  }
  // }
}

export default ShowSongs;
