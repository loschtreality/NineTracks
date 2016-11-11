import React, { PropTypes } from 'react'
import PlaylistSmall from 'PlaylistSmall'

class PlaylistFeed extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount () {
    this.props.fetchPlaylists()
    $(window).scrollTop(0);
  }




  render () {
    let grid = []
      for (var i = 1, j = i + 1; i < this.props.playlists.length; i+= 2, j += 2) {
        if (this.props.playlists[j] === undefined) {

          grid.push(
            <div className="row step" key={`${i + j} row step`}>
            <PlaylistSmall key={this.props.playlists[i].id} playlist={this.props.playlists[i]} searchTags={this.props.searchTags} givePlayBarPlaylist={this.props.givePlayBarPlaylist}/>
            </div>
          )
        } else {
          grid.push(
            <div className="row step" key={`${i + j} row step`}>
            <PlaylistSmall key={this.props.playlists[i].id} playlist={this.props.playlists[i]} searchTags={this.props.searchTags} givePlayBarPlaylist={this.props.givePlayBarPlaylist}/>
            <PlaylistSmall key={this.props.playlists[j].id} playlist={this.props.playlists[j]} searchTags={this.props.searchTags} givePlayBarPlaylist={this.props.givePlayBarPlaylist}/>
            </div>
          );
        }
    }

    if (this.props.playlists[1] === undefined) {
      return (<div className="loader"></div>)

    } else {

    return (
      <div className="container" id="feed-container">
         {
          grid
         }
      </div>
    );
    }
  }
}

export default PlaylistFeed;
