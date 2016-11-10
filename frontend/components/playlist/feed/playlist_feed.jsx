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
    let grid = []
      for (var i = 0, j = i + 1; i < this.props.playlists.length; i+= 2, j += 2) {
        if (this.props.playlists[j] === undefined) {

          grid.push(
            <div className="row step" key={`${i + j} row step`}>
            <PlaylistSmall key={this.props.playlists[i].id} playlist={this.props.playlists[i]} givePlayBarPlaylist={this.props.givePlayBarPlaylist}/>
            </div>
          )
        } else {
          grid.push(
            <div className="row step" key={`${i + j} row step`}>
            <PlaylistSmall key={this.props.playlists[i].id} playlist={this.props.playlists[i]} givePlayBarPlaylist={this.props.givePlayBarPlaylist}/>
            <PlaylistSmall key={this.props.playlists[j].id} playlist={this.props.playlists[j]} givePlayBarPlaylist={this.props.givePlayBarPlaylist}/>
            </div>
          );
        }
    }

    if (this.props.playlists[1] === undefined) {
      return (<div>Loading...</div>)

    } else {

    return (
      <div className="container">
         {
          grid
         }
      </div>
    );
    }
  }
}

export default PlaylistFeed;





//  this.props.playlists.map((playlist) => {
//    return (<PlaylistSmall givePlayBarPlaylist={this.props.givePlayBarPlaylist} user_id={playlist.user_id} key={playlist.id} playlist={playlist}/>)
//  })
