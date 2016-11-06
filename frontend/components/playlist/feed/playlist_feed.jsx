import React, { PropTypes } from 'react'
import PlaylistSmall from 'PlaylistSmall'

class PlaylistFeed extends React.Component {

  componentDidMount () {
    if (this.props.playlists) {
      this.props.fetchPlaylists()
    }
  }

  render () {

    return (
      <div>
        <h3>Here is the feed and below is a tiny playlist</h3>
        <PlaylistSmall/>
      </div>
    );
  }
}

export default PlaylistFeed;
