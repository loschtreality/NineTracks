import React from 'react'

class Home extends React.Component {
  render () {
    return (
      <div id="home-banner" className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center banner-container">
              <h1 className="banner-text">Music is only love looking for words.</h1>
              <h1><i>-Lawrence Durrell</i></h1>
              <a href="#" className="flatbutton">Discover</a>
            </div>
          </div>
      </div>
    )
  }
}

export default Home;
