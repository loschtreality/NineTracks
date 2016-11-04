import React, { PropTypes } from 'react'

class PlaylistForm extends React.Component {
  constructor () {
    super()
  }

  _handleSubmit(process) {
    //Redirect to show
  }


  render () {
    return (
      <div className="container">
        <div className="playlist-form">
          <form onSubmit={this._handleSubmit(process)}>
            <div className="form-group">
              <label>Playlist Title</label>
              <input type="text" className="form-control" placeholder="User Name"/>
            </div>

            <div className="form-group">
              <label>asfasdf</label>
              <input type="password" className="form-control" placeholder="Password"/>
            </div>

            <button type="submit" className="btn btn-success">New Playlist</button>

          </form>
        </div>
      </div>
    );
  }
}

export default PlaylistForm;
