import React, { PropTypes } from 'react'
import PlaylistSmall from 'PlaylistSmall'

class Profile extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUser(this.props.params.id)
    this.props.fetchPlaylists()
  }

  render () {
    return (
      <div className="container-fluid profile-container">
        <div className="row text-center profile-header">
          <h1 id="profile-username">{this.props.userDetails.username}</h1>
        </div>
        <div className="row step">
          <h2 className="playlist-line">{this.props.userDetails.username + "'s Playlists"}</h2>
          {
            this.props.userPlaylists.map((playlist) => {
              return (<PlaylistSmall key={playlist.id} playlist={playlist}/>)
            })
          }
        </div>
      </div>
    );
  }
}

export default Profile;
