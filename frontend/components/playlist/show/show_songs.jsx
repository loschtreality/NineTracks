import React, { PropTypes } from 'react'

class ShowSongs extends React.Component {
  render () {
    return (
      <div className="card">
        <div id="user_byline">
          <span className="byeline"> by
            <a className="propername">
              Kewl Person
            </a>
          </span>
        </div>
        <hr className="divide"/>
        <h6 id="playlist_details">Description</h6>
          <div id="playlist_description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        <hr/>
        <div id="song_list_wrapper">
          <div>
            <ul id="played_tracks">

              <li className="played_track">
                <div className="track_details_container">
                  <div>
                    <div className="title_artist">
                      <span className="title">Great Songs</span>
                      <span className="by_artist">by</span>
                      <span className="artist">Great People</span>
                    </div>
                  </div>
                </div>
              </li>

            </ul>


          </div>
        </div>
      </div>
    );
  }
}

export default ShowSongs;
