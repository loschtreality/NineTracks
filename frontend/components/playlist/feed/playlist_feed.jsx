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
    let grid = [`<div className="row step">`];

    for (var i = 0, j = i + 1; i < playlists.length; i++, j++) {
      if (j % 3 === 0) {
        grid.push(`<div className="row step">`,`<PlaylistSmall playlist=${playlists[i]}`);
      } else if (i % 3 === 0) {
        grid.push(`<PlaylistSmall playlist=${playlists[i]}`, `</div>`);
      } else {
        grid.push(`<PlaylistSmall playlist=${playlists[i]}`)
      }
    }

    if (!(playlists.length % 3 === 0)) {
      grid.push(`</div>`)
     }
     console.log(grid);
    return grid;
  }

  render () {

    if (this.props.playlists[1] === undefined) {
      return (<div>Loading...</div>)

    } else {

    return (
      <div className="container">
        {
          this.makeGrid(this.props.playlists)
        }
      </div>
    );
    }
  }
}

export default PlaylistFeed;


// {
//   this.props.playlists.map((playlist, index) => {
//     return <PlaylistSmall key={playlist.id} playlist={playlist}/>
//   })
// }
