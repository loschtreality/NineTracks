import { connect } from 'react-redux';
import Feed from 'Feed'

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
