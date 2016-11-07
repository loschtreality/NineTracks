import React, { PropTypes } from 'react'
import PlaylistDetails from 'PlaylistDetails'
import PlaylistSongList from 'PlaylistSongList'
import PlaylistSongSearch from 'PlaylistSongSearch'

import { hashHistory } from 'react-router'

import merge from 'lodash/merge'

class PlaylistForm extends React.Component {
  constructor (props) {
    super(props)
    //If this is an edit, render a delete button
      //delete redirects to user/show page

    this.state = merge({type: "new", title: "Untitled Playlist", description: "", tags: "", picture_url: "http://res.cloudinary.com/loren-losch/image/upload/v1478461432/defaut_pic_zfnuk9.jpg", songs: [], query: "", searchResults: []}, this.props.playlist)

    this.update = this.update.bind(this)
    this.cloudUpdate = this.cloudUpdate.bind(this)
    this.add_track = this.add_track.bind(this)
    this.remove_track = this.remove_track.bind(this)
    this.findSongs = this.findSongs.bind(this)
  }


  componentDidMount () {
    if (this.props.playlist) {
      this.setState({type: "edit"})
      // have fields autofill if edit
    }
  }

  _handleSubmit (type) {

    return (e) => {
      e.preventDefault()
      let parse_tags = this.parseTags(this.state.tags)
      let submission = {
        title: this.state.title,
        description: this.state.description,
        picture_url: this.state.picture_url,
        tags: parse_tags,
        songs: this.state.songs
      }
      debugger;
      if (type === "new") {
        console.log(submission, "submission");
        this.props.createPlaylist(submission)
      } else {
        this.props.updatePlaylist(submission)
      }
    };
  }


  parseTags(tags) {
    return tags.split(',');
  }

  update (field) {
    return (e) => {
      if (field === 'query') {
        this.findSongs(e.target.value)
      } else {
        this.setState({[field]: e.target.value})
      }
    };
  }

  cloudUpdate (e) {
    e.preventDefault()
    cloudinary.openUploadWidget(window.c_o, (error, images) => {
      if (error === null) {
        this.setState({picture_url: images[0].url})
        $('.upload-container').css("background-image", `url(${this.state.picture_url})`)
      }
    })
  }


  findSongs(query) {
    if (query === "") {
      this.setState({searchResults: []})
    }
    let result = $.ajax({
      url: `api/songs`,
      method: "GET",
      data: {query},
      dataType: "json",
      success: (searchResults) => this.setState({searchResults})
    })

    return result;
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
      let newList = this.state.songs.filter((song, index) => index !== track_number)
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

        <PlaylistDetails update={this.update} attributes={this.state} cloudUpdate={this.cloudUpdate}/>


        <div className="row spacer">
          <PlaylistSongList remove_track={this.remove_track} songs={this.state.songs}  update={this.update}/>
          <PlaylistSongSearch searchResults={this.state.searchResults} query={this.state.query} update={this.update} add_track={this.add_track}/>
        </div>




      </div>
    );
  }
}

export default PlaylistForm;
