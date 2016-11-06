import React, { PropTypes } from 'react'

class UploadSongButton extends React.Component {

  upload (e) {
    e.preventDefault()
    cloudinary.openUploadWidget(window.c_o, (error, songs) => {
      if (error === null) {
        // uplaod successful
        this.props.postSong(images[0].url)
      }
    })//.bind(this)
  }

  render () {
    return (
      <a className="flatbutton upload_button" onClick={this.upload}>Upload Song</a>
    );
  }
}

export default UploadSongButton;
