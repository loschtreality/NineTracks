import { connect } from 'react-redux';
import { logout } from 'SessionActions';
import Nav from 'Nav';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
