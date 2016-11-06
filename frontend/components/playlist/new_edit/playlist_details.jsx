import React, { PropTypes } from 'react'

class PlaylistDetails extends React.Component {

  render () {

    return (
      <div className="row">

      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-5 clearfix upload-container">
          <div className="step clearfix">
            <div className="upload-box">

              <div id="upload_cover_photo">
                <div id="cover_art_instructions">
                  Upload file here to add cover art.

                  Keep your mix looking fancy! Use an image at least 500 x 500 pixels.
                </div>
              </div>


              <div id="upload_cover_art_buttons">
                <form className="img_upload_form">
                  <div id="upload_form_url">
                    <input id="url_sub" onChange={this.props.update('url')} placeholder="Enter URL Here" type="text"></input>
                  </div>
                  <div className="col-md-12 col-lg-12">
                    <a href="#" className="flatbutton upload_button">Upload Image</a>
                  </div>

                </form>
              </div>

            </div>
          </div>
      </div>


        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-7" >
          <form id="mix_edit_details">
            <div className="step">
              <input id="mix_edit_title" className="roundText" onChange={this.props.update('title')} type="text" value={this.props.attributes.title}></input>
            </div>
            <div className="step">
              <textarea placeholder="Describe your playlist" onChange={this.props.update('description')} id="mix_edit_description" className="roundText" value={this.props.attributes.description}></textarea>
            </div>
            <div className="step">
              <input className="roundText" id="mix_edit_tags" onChange={this.props.update('tags')} placeholder="Add tags separated by comma" type="text" value={this.props.attributes.tags}></input>
            </div>
          </form>

        </div>

      </div>
    );
  }
}

export default PlaylistDetails;
