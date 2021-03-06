import React from 'react'
import PlaylistSmall from 'PlaylistSmall'
import { Link } from 'react-router'
import { singup } from "SessionActions"


class Home extends React.Component {
  constructor (props) {
    super(props)

    this.specialLogin = this.specialLogin.bind(this)
  }

  componentDidMount() {
    $(window).scrollTop(0);
  }

  componentWillMount () {
    this.props.fetchPlaylists()
  }


  specialLogin() {
      const epoch = new Date().getTime() % 10000
      this.props.signup({username:`Demo_${epoch}`, password:"password"})
  }


  render () {
    if (!this.props.playlists[0]) {
      return (<div className="loader"></div>)
    }

    let grid = []
      for (var i = 0, j = i + 1; i < this.props.playlists.length; i+= 2, j += 2) {
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
                <button onClick={this.specialLogin} className="flatbutton demo-log">Demo</button>
              </div>
            </div>
          </div>
      </div>
      <div className="row step text-center" id="sample-container">
        <h2 className="sample_text">Sample <i>Nine</i> of our Playlists</h2>
          <div className="container">
                {
                  grid
                }
          </div>
      </div>
    </div>
    )
  }
}

export default Home;
