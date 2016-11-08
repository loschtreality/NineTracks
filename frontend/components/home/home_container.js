import { connect } from 'react-redux';
import {fetchPlaylists} from 'PlaylistActions'
import Home from 'Home'

const mapStateToProps = (state) => {
  let all_PL = state.playlists
  let limit = 9
  let state_prop = []
  for (var i = 1; i <= limit; i++) {
    state_prop.push(state.playlists[i])
  }

  return ({
    playlists: state_prop
  });
}


const mapDispatchToProps = (dispatch) => ({
  fetchPlaylists: () => dispatch(fetchPlaylists())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
