import { connect } from 'react-redux';
import { logout } from 'SessionActions';
import Nav from 'Nav';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser,
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  processForm: (user, type) => {
    const processForm = (type === 'login') ? login : signup;
    dispatch(processForm(user));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(auth_drop);
