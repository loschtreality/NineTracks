import React, { PropTypes } from 'react'

class UploadButton extends React.Component {

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
      <a className="flatbutton" onClick={this.upload}>Upload Song</button>
    );
  }
}

export default UploadButton;
