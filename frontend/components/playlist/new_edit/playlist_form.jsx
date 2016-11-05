import React, { PropTypes } from 'react'
import PlaylistDetails from 'PlaylistDetails'
import PlaylistSongListSearch from 'PlaylistSongListSearch'

class PlaylistForm extends React.Component {
  constructor () {
    super()
    //If this is an edit, render a delete button
      //delete redirects to user/show page
    this.state = {title: "Untitled Mix"}
  }

  _handleSubmit (process) {
    //Redirect to show
    return (e) => {
      e.preventDefault()
      //get playlist details
      //get songs
      //push to cloudinary
      //put data in DB
      //redirect to show
    };
  }

  getSongs () {

  }

  getDetails () {

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
              <a href="#" id="save_playlist" onClick={this._handleSubmit(this.props.process)} className="flatbutton">Save & Close</a>
          </div>
        </div>

        <PlaylistDetails getDetails={this.getDetails}/>

        <PlaylistSongListSearch getSongs={this.getSongs}/>



      </div>
    );
  }
}

export default PlaylistForm;
