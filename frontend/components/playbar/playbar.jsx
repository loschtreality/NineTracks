import React, { PropTypes } from 'react'

import merge from 'lodash/merge'

class PlayBar extends React.Component {
  constructor (props) {
    super(props)

    this.state = merge({currentSong: 0, playing: false}, this.props.playlist)
  }

  play_song() {

  }

  pause_song() {

  }

  next_song() {

  }

  render () {
    return (
      <div id="playbar" className="" data-spy="affix" data-offset-bottom="0">
        <div id="player" className="col-md-12">
          <div id="player_controlls">

            <div id="player_controlls_left">
              <div id="play_button" className="player_button">
                <span id="play-icon">P</span>
              </div>
              <div id="pause_button" className="player_button">
                <span id="pause-icon">P</span>
              </div>
              <div id="next_button" className="player_button">
                <span id="next-icon">N</span>
              </div>
            </div>

            <div id="player_progress_bar">
              <div id="player_bar_meter">

              </div>
            </div>

            <div id="player_controlls_right">
              <div id="current_play_details">

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayBar;


// <ul id="now_playing">
//   <li class="track now_playing">
//     <div className="track_details_container">
//       <div className="title_container">
//         <div className="title_artist">
//           <span className="song_title">Song name</span>
//           <span className="song_spacer"> ... </span>
//           <span className="song_artist">Song Artist</span>
//         </div>
//       </div>
//     </div>
//   </li>
// </ul>
