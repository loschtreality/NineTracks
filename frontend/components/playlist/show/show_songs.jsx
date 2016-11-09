import React, { PropTypes } from 'react'
import {Link} from 'react-router'

class ShowSongs extends React.Component {
  render () {

    return (
      <div className="card">
        <div id="user_byline">
          <span className="byeline"> by
            <Link to={`users/${this.props.user_id}`} className="propername">
              {this.props.username}
            </Link>
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
                          <span className="by_artist">-</span>
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
