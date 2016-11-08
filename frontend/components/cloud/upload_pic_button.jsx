import React, { PropTypes } from 'react'

class UploadPicButton extends React.Component {

  upload (e) {
    e.preventDefault()
    cloudinary.openUploadWidget(window.c_o, (error, images) => {
      if (error === null) {
        this.props.cloudUpdate(images[0].url)
      }
    })
  }

  render () {
    return (
      <a className="flatbutton upload_button" onClick={this.upload}>Upload Picture</a>
    );
  }
}

export default UploadPicButton;
