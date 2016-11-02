import React from 'react';
import { Link } from 'react-router';
import AuthDrop from './auth_drop.jsx'

class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {username: "", password: ""}
  }

  update(field){
    return e => { this.setState({[field]: e.currentTarget.value }); };
	}

  render() {
    console.log(this.props, "props from Nav");
    return (
      <nav className="navbar navbar-inverse">
  <div className="container-fluid">

    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">NineTracks</a>
    </div>


    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className="active"><Link to="/">Home <span className="sr-only">(current)</span></Link></li>
        <li><Link to="/feed">Feed</Link></li>

      </ul>
      <form className="navbar-form navbar-left">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search"></input>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
      <ul className="nav navbar-nav navbar-right">
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Anonymous <span className="caret"></span></a>
            <AuthDrop currentUser={this.props.currentUser}/>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
  }
}

export default Nav;


// <ul className="dropdown-menu">
//   <li><a href="#">Profile</a></li>
//   <li><a href="#">Playlists</a></li>
//   <li><a href="#">Likes</a></li>
//   <li role="separator" className="divider"></li>
//   <li><a href="#">Sign Out</a></li>
// </ul>
