import React, { PropTypes } from 'react'

import merge from 'lodash/merge'

class PlayBar extends React.Component {
  constructor (props) {
    super(props)

    this.state = merge({currentSong: 0, playing: false, progress: "60%"}, this.props.playlist)
  }

  play_song() {

  }

  pause_song() {

  }

  next_song() {

  }


  render () {
    const barStyle = {
      width: this.state.progress,
      background: "#528C94"
    };



    return (
      <div id="playbar" className="" data-spy="affix" data-offset-bottom="0">
        <div id="player" className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="row spacer">

            <div className="col-md-2 col-sm-2 col-xs-2" id="left_controlls">
              <span id="play-icon" onClick={this.playSong} className="glyphicon glyphicon-play"></span>
              <span id="pause-icon" onClick={this.pauseSong} className="glyphicon glyphicon-pause"></span>
              <span id="next-icon" onClick={this.nextSong} className="glyphicon glyphicon-step-forward"></span>
            </div>

            <div className="col-md-4 col-sm-4 col-xs-4" id="center_controlls" >
              <span id="playbar_title">SideWalks</span>
              <span id="playbar_by">by</span>
              <span id="playbar_artist">Guns and Roses</span>
            </div>

            <div className="col-md-6 col-sm-6 col-xs-6" id="playbar_progress" id="right_controlls">
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={barStyle}>
                  <span className="sr-only">60% Complete</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default PlayBar;
