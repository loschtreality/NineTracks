import React, { PropTypes } from 'react'
import PlaylistDetails from 'PlaylistDetails'
import PlaylistSongListSearch from 'PlaylistSongListSearch'

class PlaylistForm extends React.Component {
  constructor () {
    super()
    //If this is an edit, render a delete button
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
            <p>
              Here is some text
            </p>
          </div>

          <div className="col-md-5 col-md-offset-3">
                <button type="button" className="btn btn-primary">Save & Close</button>
          </div>
        </div>

        <PlaylistDetails/>

        <PlaylistSongListSearch/>



      </div>
    );
  }
}

export default PlaylistForm;
