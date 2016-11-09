import React from 'react'
import PlaylistSmall from 'PlaylistSmall'
import { Link } from 'react-router'


class Home extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.fetchPlaylists()
  }


  render () {

    if (!this.props.playlists[0]) {
      return (<div>Loading...</div>)
    }

    return (
      <div className="container-fluid home-wrapper">

      <div id="home-banner" className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center banner-container">
              <div className="row step">
                <h1 className="banner-text"><span className="title_music">Music</span> is only <span className="title_love">love</span> looking for <span className="title_words">words.</span></h1>
              </div>
              <div className="row step">
                <h1><i className="quote_author">-Lawrence Durrell</i></h1>
              </div>
              <div className="row step">
                <Link to={`feed`} className="flatbutton">Discover</Link>
              </div>
            </div>
          </div>
      </div>
      <div className="row step text-center">
        <h2 className="sample_text">Sample Our Library</h2>
          <div className="container">
            <div className="row step text-left">
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
