import React, { PropTypes } from 'react'
import { Link } from 'react-router'

class PlaylistSmall extends React.Component {
  render () {
    return (
      <div className="card half_card mix_card">

        <div className="mini_header">
          <h4>Published by {this.props.playlist.username}</h4>
        </div>

        <div className="mix_element">
          <div className="cover">
            <Link to={`playlists/${this.props.playlist.id}`}>
              <img className="cover" href={this.props.playlist.picture_url}/>
            </Link>
          </div>
          <h3 className="title_min">{this.props.playlist.title}</h3>
          <div className="frontside">
            <div className="mix_stats">
              <span>{this.props.playlist.songs.length} Tracks</span>
            </div>
          </div>
          <div className="grid_tags tags">
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

        </div>
      </div>
    );
  }
}

export default PlaylistSmall;
