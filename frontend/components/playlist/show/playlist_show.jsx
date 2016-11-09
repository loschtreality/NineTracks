import React, { PropTypes } from 'react'
import PlaylistComments from 'PlaylistComments'
import ShowSongs from 'ShowSongs'
import { Link } from 'react-router'

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props)

    debugger
  }

  componentDidMount () {
    this.props.fetchPlaylist(this.props.params.id)
  }

  showOption() {
    let option;
      if (window.currentUser.username === this.props.playlist.username) {
      option = (
          <div id="mix_buttons" className="interactbox">
            <Link id="edit_button" to={`playlists/${this.props.playlist.id}/edit`} className="flatbutton">
              Edit Playlist
            </Link>
          </div>
        )
      } else {
          option = <span style={{display: "hidden"}}/>
      }
      return option
  }

  handlePlay(play_list) {
    return (e) => {
      e.preventDefault()
      this.props.givePlayBarPlaylist(play_list)
    };
  }

  componentWillReceiveProps() {
    this.showOption()
  }


  render () {

    if (this.props.playlist === undefined) {
      return (
        <div className="loader">Loading...</div>
      )

    } else {

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

                      {this.showOption()}


                      <div className="min_control step">
                        <div className="min_play">
                          <span onClick={this.handlePlay(this.props.playlist)} className="glyphicon glyphicon-play min_play_button"></span>
                          <span className="min_button_description">Play Playlist</span>
                        </div>
                      </div>



                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container step">
            <ShowSongs songs={this.props.playlist.songs} username={this.props.playlist.username} user_id={this.props.playlist.user_id} description={this.props.playlist.description}/>
          </div>

      </div>
      );
    }
  }
}

export default PlaylistShow;
