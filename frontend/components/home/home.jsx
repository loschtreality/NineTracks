import React from 'react'
import PlaylistSmall from 'PlaylistSmall'


class Home extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.fetchPlaylists()
  }


  render () {
    debugger

    if (!this.props.playlists[0]) {
      return (<div>Loading...</div>)
    }

    return (
      <div className="container-fluid home-wrapper">

      <div id="home-banner" className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center banner-container">
              <h1 className="banner-text">Music is only love looking for words.</h1>
              <h1><i>-Lawrence Durrell</i></h1>
              <a href="#" className="flatbutton">Discover</a>
            </div>
          </div>
      </div>
      <div className="row step text-center">
        <h2>Sample Our Library</h2>
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
      </div>
    </div>
    )
  }
}

export default Home;
