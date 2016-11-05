import React, { PropTypes } from 'react'

class Cloudinary extends React.Component {
  constructor () {
    super()

    this.state = {songs: []}
  }


  componentDidMount: () => {
    $.get(`api/songs`, (songs) => {
      this.setState({songs})
    })//.bind(this)
  }


  postSong: (url) => {
    let song = {url}
    $.ajax({
      url: `api/songs`,
      method: "POST",
      success: (song) => {
        // update list of images by dispatching a method which change state
      }//.bind(this)
    })
  }

  render () {
    return (
      <div>
        <UploadButton postSong={this.postSong}/>
        <SongsList songs={this.state.songs}
      </div>
    );
  }
}

export default Cloudinary;
