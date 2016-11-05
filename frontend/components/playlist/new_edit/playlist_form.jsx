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

  _handleSubmit(process) {
    //Redirect to show
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
              <a href="#" id="save_playlist" className="flatbutton">Save & Close</a>
          </div>
        </div>

        <PlaylistDetails/>

        <PlaylistSongListSearch/>



      </div>
    );
  }
}

export default PlaylistForm;
