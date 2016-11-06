import React, { PropTypes } from 'react'

class PlaylistShow extends React.Component {

  componentDidMount () {
    this.props.fetchPlaylist(this.props.params.id)
  }

  render () {
  let content;
    if (this.props.playlist) {
      content = `You've reached the playlist show page of ${this.props.playlist.title}`
    } else {
      content = "Loading"
    }

    return (
      <div>
        {content}
      </div>
    );
  }
}

export default PlaylistShow;
