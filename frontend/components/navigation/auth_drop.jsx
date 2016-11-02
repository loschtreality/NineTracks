import React from 'react'
import { Link } from 'react-router';
import Modal from 'react-modal'
import modal_style from './modal_style'

import SignIn from '../session_form/sign_in.jsx'
import CreateAccount from '../session_form/create_account.jsx'

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

  displayContent() {
    const component = (this.state.signIn ? <CreateAccount/> : <SignIn/>)
      if (this.props.currentUser) {
        return (
          [<li key={1}><a key={"11"} href="#">Profile</a></li>,
          <li key={2}><a key={"22"} href="#">Playlists</a></li>,
          <li key={3}><a key={"33"} href="#">Likes</a></li>,
          <li key={4} role="divider" className="divider"></li>,
          <li key={5}><a key={"55"}>Sign Out</a></li>]
        )
      } else {
        return(
          [<li key={6} onClick={() => this.handleClick(true)}><a key={"66"} href="#">Create Account</a></li>,
          <li key={7} onClick={() => this.handleClick(false)}><a key={"77"} href="#">Sign In</a></li>,
          <li key={8}><a key={"88"} href="#">Demo Login</a></li>,
            <Modal
              key={"modal"}
              onRequestClose={this.handleClose}
              isOpen={this.state.modalOpen}
              style={modal_style}
              >
              <span key={"closer"} onClick={this.handleClose}><a key="close" href="#">Close</a></span>
              {component}
            </Modal>
          ]
        )
      }
  }


  render () {

    console.log(this.props, "props from auth_drop");

    return(
      <ul className="dropdown-menu">
        {this.displayContent()}
      </ul>
    )
  }
}

export default AuthDrop;


// <div class="input-group">
//   <span class="input-group-addon" id="sizing-addon2">@</span>
//   <input type="text" class="form-control" placeholder="Username" aria-describedby="sizing-addon2">
// </div>
