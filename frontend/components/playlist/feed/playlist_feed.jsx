import React, { PropTypes } from 'react'
import PlaylistSmall from 'PlaylistSmall'

class PlaylistFeed extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    this.props.fetchPlaylists()
  }

  makeGrid(playlists) {
    // let grid = []
    //
    //
    //   for (var i = 0, j = i + 1; i < playlists.length; i+= 2) {
    //     if (!playlists[j]) {
    //       grid.push(
    //         <div className="row step">,
    //         <PlaylistSmall key={playlists[i].id} playlists=${playlists[i]}/>,
    //         </div>
    //       )
    //     } else {
    //       grid.push(
    //         <div className="row step">,
    //         <PlaylistSmall key={playlists[i].id} playlists=`${playlists[i]}/>,
    //         <PlaylistSmall key={playlists[j].id} playlists=${playlists[j]}/>,
    //         </div>
    //       );
    //     }
    // }
    // console.log(grid, "GRID");
    // return grid;
  }

  render () {

    if (this.props.playlists[1] === undefined) {
      return (<div>Loading...</div>)

    } else {

    return (
      <div className="container">
         {
           this.props.playlists.map((playlist) => {
             return (<PlaylistSmall key={playlist.id} playlist={playlist}/>)
           })
         }
      </div>
    );
    }
  }
}

export default PlaylistFeed;


// this.props.playlists.map((playlist) => {
//   return (<PlaylistSmall key={playlist.id} playlist={playlist}/>)
// })
