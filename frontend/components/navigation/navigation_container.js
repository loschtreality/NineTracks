import { connect } from 'react-redux';
import { logout, login } from 'SessionActions';
import {searchTags} from 'SearchActions'
import Nav from 'Nav';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user)),
  searchTags: (query) => dispatch(searchTags(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
