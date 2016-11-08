import React, { PropTypes } from 'react'
import PlaylistSmall from 'PlaylistSmall'

class PlaylistFeed extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    this.props.fetchPlaylists()
  }

  render () {
    if (this.props.playlists[1] === undefined) {
      return (<div>Loading...</div>)
    } else {
    return (
      <div className="container">
        <div className="row step">
          <div className="col-md-12">
            {
              this.props.playlists.map((playlist) => {
                return <PlaylistSmall key={playlist.id} playlist={playlist}/>
              })
            }
          </div>
        </div>
      </div>
    );
    }
  }
}

export default PlaylistFeed;
