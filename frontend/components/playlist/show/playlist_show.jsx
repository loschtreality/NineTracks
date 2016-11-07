import React, { PropTypes } from 'react'
import PlaylistComments from 'PlaylistComments'
import ShowSongs from 'ShowSongs'

class PlaylistShow extends React.Component {

  componentDidMount () {
    this.props.fetchPlaylist(this.props.params.id)
  }

  render () {
  let content;
    if (this.props.playlist) {
      content = `You've reached the playlist show page of ${this.props.playlist.title}`
    } else {
      content = "Loading"
    }

    return (
  <div className='container-fluid show-content'>

      <div className="" id="display_area">
        <div className="container clearfix">
          <div className="row step">
            <div className="col-xl-4 col-md-4 col-sm-6 clearfix">
              <div id="mix_art_wrapper">
                <img id="cover_art" src="http://res.cloudinary.com/loren-losch/image/upload/v1478461432/defaut_pic_zfnuk9.jpg"/>
              </div>
            </div>
            <div className="col-xl-8 col-md-8 col-sm-6">

              <div id="mix_details">
                <h1 id="mix_name">This is the title</h1>

                  <div id="mix_description">
                    <div className="mix-data">
                      <span>April 1, 2016</span>
                      <span className="pipe">|</span>
                      <span>24 Tracks</span>
                      <span className="pipe">|</span>
                      <span>50 likes</span>
                    </div>
                    <div id="mix_tags_display">
                      <a className="tag">Electronic</a>
                      <a className="tag">Indy</a>
                      <a className="tag">Chill</a>
                      <a className="tag">Feel Good</a>
                      <a className="tag">Vibes</a>
                      <a className="tag">Playlist</a>
                    </div>
                  </div>

                  <div id="mix_buttons" className="interactbox">
                    <a id="like_button" className="flatbutton">
                      <span className="like">{"<3"}</span>
                      <span className="text hidden-xs hidden-sm">LIKE</span>
                    </a>
                  </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container step">
        <ShowSongs/>
        <PlaylistComments/>
      </div>

  </div>
    );
  }
}

export default PlaylistShow;
