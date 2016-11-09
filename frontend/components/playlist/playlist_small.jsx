import React, { PropTypes } from 'react'
import { Link } from 'react-router'

class PlaylistSmall extends React.Component {

  render () {
    debugger
    return (
      <div className="row step">

      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 card mix_card half_card">

        <div className="mini_header">
          <h4>Published by <Link to={`users/${this.props.user_id}`}>{this.props.playlist.username}</Link></h4>
        </div>

        <div className="mix_element">
          <div className="cover">
            <Link to={`playlists/${this.props.playlist.id}`}>
              <img className="cover" src={this.props.playlist.picture_url}/>
            </Link>
          </div>
          <Link to={`playlists/${this.props.playlist.id}`}><h3 className="title_min">{this.props.playlist.title}</h3></Link>
          <div className="frontside">
            <div className="mix_stats step">
              <span>{this.props.playlist.songs.length} Tracks</span>
            </div>
          </div>
          <div className="grid_tags tags step">
            {
              this.props.playlist.tags.map((tag) => {
                return (
                  <a key={tag.id} href="#" className="tag">
                    <span>{tag.title}</span>
                  </a>
                )
              })
            }

          </div>

          <div className="min_control step">
            <div className="min_play">
              <span onClick={() => this.props.givePlayBarPlaylist(this.props.playlist)} className="glyphicon glyphicon-play min_play_button"></span>
              <span className="min_button_description">Play Playlist</span>
            </div>
          </div>

        </div>
      </div>
    </div>
    );
  }
}

export default PlaylistSmall;
