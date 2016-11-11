import React, { PropTypes } from 'react'
import PlaylistSmall from 'PlaylistSmall'
import {Link} from 'react-router'

class Profile extends React.Component {
  constructor(props) {
    super(props)

    this.renderPlaylists = this.renderPlaylists.bind(this)
  }

  componentDidMount() {
    this.props.fetchUser(this.props.params.id)
    this.props.fetchPlaylists()
  }

  renderPlaylists() {
    let grid = []
      for (var i = 0, j = i + 1; i < this.props.userPlaylists.length; i+= 2, j += 2) {
        if (this.props.userPlaylists[j] === undefined) {

          grid.push(
            <div className="row step" key={`${i + j} row step`}>
            <PlaylistSmall key={this.props.userPlaylists[i].id} playlist={this.props.userPlaylists[i]} searchTags={this.props.searchTags} givePlayBarPlaylist={this.props.givePlayBarPlaylist}/>
            </div>
          )
        } else {

          grid.push(
            <div className="row step" key={`${i + j} row step`}>
            <PlaylistSmall key={this.props.userPlaylists[i].id} playlist={this.props.userPlaylists[i]} searchTags={this.props.searchTags} givePlayBarPlaylist={this.props.givePlayBarPlaylist}/>
            <PlaylistSmall key={this.props.userPlaylists[j].id} playlist={this.props.userPlaylists[j]} searchTags={this.props.searchTags} givePlayBarPlaylist={this.props.givePlayBarPlaylist}/>
            </div>
          );
        }
    }
    return grid
  }

  renderContent() {
    if (this.props.userPlaylists.length > 0) {

      return (
      <div className="row step">
          {this.renderPlaylists()}
      </div>
      )
    } else {
      return (
        <div className="row step text-center">
            <h3 className="no_pl">You don't have any playlists yet!</h3>
            <Link className="flatbutton" to='new'>Create a playlist</Link>
        </div>
      )
    }
  }

  render () {
    return (
      <div className="container-fluid profile-container">
        <div className="row text-center profile-header">
          <h1 id="profile-username">{this.props.userDetails.username}</h1>
        </div>
        <div className="row step text-center">
          <h2 className="playlist-line">{this.props.userDetails.username + "'s Playlists"}</h2>
        </div>
          <div className="container" id="profile-playlists-container">
            {
              this.renderContent()
            }
          </div>
      </div>
    );
  }
}

export default Profile;
