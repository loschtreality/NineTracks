import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, logout, signup } from 'SessionActions';


const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    processForm: (user, type) => {
      const processForm = (type === 'login') ? login : signup;
      dispatch(processForm(user));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
