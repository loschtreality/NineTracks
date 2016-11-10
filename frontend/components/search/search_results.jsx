import React, { PropTypes } from 'react'
import PlaylistSmall from 'PlaylistSmall'

class SearchResults extends React.Component {
  constructor(props) {
    super(props)

    // debugger
  }




  render () {
    let grid = []
    //   for (var i = 0, j = i + 1; i < this.props.playlists.length; i+= 2, j += 2) {
    //     if (this.props.playlists[j] === undefined) {
    //
    //       grid.push(
    //         <div className="row step" key={`${i + j} row step`}>
    //         <PlaylistSmall key={this.props.playlists[i].id} playlist={this.props.playlists[i]} givePlayBarPlaylist={this.props.givePlayBarPlaylist}/>
    //         </div>
    //       )
    //     } else {
    //       grid.push(
    //         <div className="row step" key={`${i + j} row step`}>
    //         <PlaylistSmall key={this.props.playlists[i].id} playlist={this.props.playlists[i]} givePlayBarPlaylist={this.props.givePlayBarPlaylist}/>
    //         <PlaylistSmall key={this.props.playlists[j].id} playlist={this.props.playlists[j]} givePlayBarPlaylist={this.props.givePlayBarPlaylist}/>
    //         </div>
    //       );
    //     }
    // }
    //
    // if (this.props.playlists[1] === undefined) {
    //   return (<div>Loading...</div>)
    //
    // } else {

    return (
      <div className="container">
         {
          grid
         }
      </div>
    );
}
}

export default SearchResults;
