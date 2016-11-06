import React, { PropTypes } from 'react'

class UploadPicButton extends React.Component {

  upload (e) {
    e.preventDefault()
    cloudinary.openUploadWidget(window.c_o, (error, images) => {
      if (error === null) {
        // uplaod successful
        console.log(images[0].url, "WHAT IS SUPPOSED TO BE UPDLOADING");
        this.props.cloudUpdate(images[0].url)
      }
    })
  }

  render () {
    console.log(this.props.cloudUpdate, "FNC FROM BUTTOn");
    return (
      <a className="flatbutton upload_button" onClick={this.upload}>Upload Picture</a>
    );
  }
}

export default UploadPicButton;
