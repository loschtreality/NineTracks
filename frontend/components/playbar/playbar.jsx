import React, { PropTypes } from 'react'
import ReactPlayer from 'react-player'

import merge from 'lodash/merge'

class PlayBar extends React.Component {
  constructor (props) {
    super(props)

    this.state = merge({title: "", currentSong: 0, playing: false, progress: 0, showInfo: 'none', songs: [{title: "", artist: "", url: ""}]}, this.props.pb_playlist)

    this.playSong = this.playSong.bind(this)
    this.pauseSong = this.pauseSong.bind(this)
    this.nextSong = this.nextSong.bind(this)
    this.moveProgress = this.moveProgress.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState(merge({title: "", currentSong: 0, playing: false, progress: 0, showInfo: 'none', songs: [{title: "", artist: "", url: ""}]}, nextProps.pb_playlist))
    this.setState({showInfo: 'inline'})
    this.setState({playing: true})
  }

  playSong() {
      this.setState({playing: true})
  }

  pauseSong() {
      this.setState({playing: false})
  }

  nextSong() {
    let nextSong = this.state.currentSong + 1
    if (nextSong < this.state.songs.length) {
      this.setState({currentSong: nextSong})
    } else {
      this.setState({playing: false})
    }
    this.setState({progress: 0})
  }


  displaySongInfo(){
    if (this.state.songs[0] !== undefined) {
      return (
        <div className="col-md-4 col-sm-4 col-xs-4" id="center_controlls" >
        <span id="playbar_pl_title" style={{display: `${this.state.showInfo}`}}>{this.state.title}</span>
        <span id="playbar_title" >{this.state.songs[this.state.currentSong].title}</span>
        <span style={{display: `${this.state.showInfo}`}} id="playbar_by">-</span>
        <span id="playbar_artist">{this.state.songs[this.state.currentSong].artist}</span>
      </div>
      )
    } else {
      return (
        <div className="col-md-4 col-sm-4 col-xs-4" id="center_controlls" >
        <span id="playbar_pl_title"></span>
        <span id="playbar_title"></span>
        <span id="playbar_by"></span>
        <span id="playbar_artist"></span>
      </div>
      )
    }
  }


  renderPlayer() {
    if (this.state.songs) {
      return (
      <ReactPlayer
        url={this.state.songs[this.state.currentSong].url}
        playing={this.state.playing}
        hidden={true}
        onProgress={this.moveProgress}
        onEnded={this.nextSong}
         />
     )
   } else {
     return (<span style={{display: "hidden"}}></span>)
   }
  }

  moveProgress({played}) {
    this.setState({progress: Math.round(played * 100)})
  }


  render () {
    const barStyle = {
      width: `${this.state.progress}%`,
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

            {
              this.displaySongInfo()
            }

            <div className="col-md-6 col-sm-6 col-xs-6" id="playbar_progress" id="right_controlls">
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={`${this.state.progress}`} aria-valuemin="0" aria-valuemax="100" style={barStyle}>
                </div>
              </div>
            </div>

            {
              this.renderPlayer()
            }
          </div>
        </div>
      </div>
    );
  }
}

export default PlayBar;
