import React, { PropTypes } from 'react'
import PlaylistComments from 'PlaylistComments'
import ShowSongs from 'ShowSongs'

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount () {
    this.props.fetchPlaylist(this.props.params.id)
    console.log(this.props.playlist, "PLAYLIST FROM SHOW");
  }


  render () {

    if (this.props.playlist === undefined) {
      return (
        <div className="loader">Loading...</div>
      )

    } else {

      let option
      if (currentUser === this.props.playlist.id) {
        option = (
          <a id="edit_button" className="flatbutton">
            Edit Playlist
          </a>
        )
      } else {
        option = (
          <a id="like_button" className="flatbutton">
            <span className="like">{"<3"}</span>
            <span className="text hidden-xs hidden-sm">LIKE</span>
          </a>
        )
      }


    return (
      <div className='container-fluid show-content'>

          <div className="" id="display_area">
            <div className="container clearfix">
              <div className="row step">
                <div className="col-xl-4 col-md-4 col-sm-6 clearfix">
                  <div id="mix_art_wrapper">
                    <img id="cover_art" src={this.props.playlist.picture_url}/>
                  </div>
                </div>
                <div className="col-xl-8 col-md-8 col-sm-6">

                  <div id="mix_details">
                    <h1 id="mix_name">{this.props.playlist.title}</h1>

                      <div id="mix_description">
                        <div className="mix-data">
                          <span>April 1, 2016</span>
                          <span className="pipe">|</span>
                          <span>{this.props.playlist.songs.length} Tracks</span>
                          <span className="pipe">|</span>
                          <span>50 likes</span>
                        </div>
                        <div id="mix_tags_display">
                          {
                            this.props.playlist.tags.map((tag) => {
                              return <a key={tag.id} className="tag">{tag.title}</a>
                            })
                          }
                        </div>
                      </div>

                      <div id="mix_buttons" className="interactbox">
                        {option}
                      </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container step">
            <ShowSongs songs={this.props.playlist.songs} username={this.props.playlist.username} description={this.props.playlist.description}/>
          </div>

      </div>
      );
    }
  }
}
// <PlaylistComments comments={this.props.playlist.comments}/>

export default PlaylistShow;
