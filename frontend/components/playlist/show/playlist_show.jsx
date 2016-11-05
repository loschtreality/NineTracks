import React, { PropTypes } from 'react'

class PlaylistShow extends React.Component {

  componentDidMount () {
    this.props.fetchPlaylist(this.props.params.id)
  }

  render () {
  let content;
    if (this.props.playlist) {
      content = "hey"
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
