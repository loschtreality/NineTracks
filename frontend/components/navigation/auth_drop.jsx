import React, { PropTypes } from 'react'
import { Link } from 'react-router';
import Modal from 'react-modal'
import modal_style from './modal_style'

import SessionFormContainer from 'SessionFormContainer'

class AuthDrop extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.state = {modalOpen: false, signIn: false}
  }

  handleClick(bool) {
    this.setState({
      modalOpen: true,
      signIn: bool
    })
  }

  handleClose() {
    this.setState({modalOpen: false})
  }

  handleLogout(){
    return () => {
      this.props.logout()
      this.handleClose()
    };
  }

  specialLogin() {
    return () => {
      this.props.login({username:"Demo", password:"password"})
    };
  }

  displayContent() {

      if (this.props.currentUser) {
        return (
          [<li key={1}><Link key={"11"} to="/new">New Playlist</Link></li>,
          <li key={2}><Link to={`users/${this.props.currentUser.id}`} key={"22"} href="#">Profile</Link></li>,
          <li key={4} role="divider" className="divider"></li>,
          <li onClick={ this.handleLogout() } key={5}><a key={"55"}>Sign Out</a></li>]
        )
      } else {
        return(
          [<li key={6} onClick={() => this.handleClick(true)}><a key={"66"} href="#">Create Account</a></li>,
          <li key={7} onClick={() => this.handleClick(false)}><a key={"77"} href="#">Sign In</a></li>,
          <li key={8} onClick={ this.specialLogin() }><a key={"88"} href="#">Demo Login</a></li>,
            <Modal
              key={"modal"}
              onRequestClose={this.handleClose}
              isOpen={this.state.modalOpen}
              className="auth-modal"
              style={modal_style}
              >

                  <span className="close-box" key={"closer"} onClick={this.handleClose}><a className="close-link" key="close" href="#">Close</a></span>

                  <SessionFormContainer signIn={this.state.signIn}/>

             </Modal>
          ]
        )
      }
  }


  render () {
    return(
      <ul className="dropdown-menu">
        {this.displayContent()}
      </ul>
    )
  }
}

export default AuthDrop;
