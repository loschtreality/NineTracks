import React, { PropTypes } from 'react'
import { Link } from 'react-router';
import AuthDrop from 'AuthDrop'
import Search from 'Search'

class Nav extends React.Component {
  constructor (props) {
    super(props)

    this.state = {username: "", password: ""}
  }

  update(field){
    return e => { this.setState({[field]: e.currentTarget.value }); };
	}


  changeActiveTab(tabNum) {
    this.setState({activeTab: tabNum})
  }

  render() {
    return (
      <nav className="navbar navbar-inverse" id="navigation" data-spy="affix" data-offset-top="100">
        <div className="container-fluid" >



    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <Link className="navbar-brand" to="/">NineTracks</Link>
    </div>


    <div className="collapse navbar-collapse" id="navbar-collapse-1">
        <Search searchTags={this.props.searchTags}/>
      <ul className="nav navbar-nav navbar-right">

        <li><Link to="/">Home <span className="sr-only">(current)</span></Link></li>
        <li><Link to="/feed">Feed</Link></li>

        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{ this.props.loggedIn ? this.props.currentUser.username : "Create Account"} <span className="caret"></span></a>
            <AuthDrop currentUser={this.props.currentUser} login={this.props.login} signup={this.props.signup} logout={this.props.logout}/>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
  }
}

export default Nav;
