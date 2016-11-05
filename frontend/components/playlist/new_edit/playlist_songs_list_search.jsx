import React, { PropTypes } from 'react'

class SongListSearch extends React.Component {

  render () {
    return (
      <div className="row spacer">
        <div className="col-lg-6 col-md-6 col-xs-12" id="upload_tracks">
          <div id="track_upload_header">
            <div id="track_count">
              <span>Tracks:</span>
              <span id="length"> 2</span>
            </div>
            <h6>Choose at least 9 Tracks</h6>
          </div>

          <div id="track_items">
            <ul className="track_list">
              <li className="even clear track">
                <span className="number">1</span>
                <div className="track_info">
                  <span className="track_name">Stairway to heaven</span>
                  <span className="track_artist">Led Zeppelin</span>
                </div>
                <div>
                  <button className="remove_track">Delete</button>
                </div>
              </li>
              <li className="odd clear track">
                <span className="number">2</span>
                <div className="track_info">
                  <span className="track_name">Cigaretts in the theater</span>
                  <span className="track_artist">Cinnema club</span>
                </div>
                <div>
                  <button className="remove_track">Delete</button>
                </div>
              </li>
            </ul>
          </div>
        </div>



        <div className="col-lg-6 col-md-6 col-xs-12">

          <div id="track_upload_header">
              <input placeholder="Search Tracks" id="search_tracks" className="roundText" type="search"></input>
          </div>

          <div id="track_items">
            <ul className="track_list">
              <li className="clear track">
                <span className="number">1</span>
                <div className="track_info">
                  <span className="track_name">Stairway to heaven</span>
                  <span className="track_artist">Led Zeppelin</span>
                </div>
                <div>
                  <button className="remove_track">Add to Playlist</button>
                </div>
              </li>
              <li className="odd clear track">
                <span className="number">2</span>
                <div className="track_info">
                  <span className="track_name">Cigaretts in the theater</span>
                  <span className="track_artist">Cinnema club</span>
                </div>
                <div>
                  <button className="remove_track">Add to Playlist</button>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    );
  }
}

export default SongListSearch;
