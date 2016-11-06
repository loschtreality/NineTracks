import React, { PropTypes } from 'react'
import PlaylistDetails from 'PlaylistDetails'
import PlaylistSongListSearch from 'PlaylistSongListSearch'

import { hashHistory } from 'react-router'

class PlaylistForm extends React.Component {
  constructor (props) {
    super(props)
    //If this is an edit, render a delete button
      //delete redirects to user/show page
    this.state = this.props.playlist || {title: "Untitled Playlist", description: "", tags: "", songs: [], query: ""}

    this.update = this.update.bind(this)
    this.add_track = this.add_track.bind(this)
    this.remove_track = this.remove_track.bind(this)
  }


  componentDidMount () {
    if (this.props.playlist) {
      this.setState({type: "edit"})
      // have fields autofill if edit
    }
  }

  _handleSubmit (process) {

    return (e) => {
      e.preventDefault()
      //get playlist details
      //get songs
      //push to cloudinary
      //put data in DB
      //redirect to show
    };
  }

  update (field) {
    return (e) => {
      this.setState({[field]: e.target.value})
      console.log(this.state);
    };
  }


  add_track(track){
    return (e) => {
      e.preventDefault()
      this.setState({songs: [...this.state.songs, track]})
    }
  }

  remove_track (track_number) {
    return (e) => {
      e.preventDefault()
      let newList = songs.filter((song, index) => index !== track_number)
      this.setState({songs: newList})
    }
  }

  render () {
    return (
      <div className="container-fluid">


        <div className="row playlist-status">
          <div className="col-md-4">
            <p id="instructions">
              Upload <b>at least 9 tracks</b> and cover art. Then enter a title, description, and some tags separated by commas.
            </p>
          </div>

          <div className="col-md-5 col-md-offset-3">
              <a href="#" id="save_playlist" onClick={this._handleSubmit(this.state.type)} className="flatbutton">Save & Close</a>
          </div>
        </div>

        <PlaylistDetails update={this.update} attributes={this.state}/>

        <PlaylistSongListSearch add_track={() => this.add_track} remove_track={() => this.remove_track} songs={this.state.songs} query={this.state.query}/>



      </div>
    );
  }
}

export default PlaylistForm;
