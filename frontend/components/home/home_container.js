import { connect } from 'react-redux';
import {fetchPlaylists} from 'PlaylistActions'
import Home from 'Home'

const mapStateToProps = (state) => {
  let all_PL = state.playlists
  let state_prop = []
  for (var i = 9, j = state.playlists.length; i > 0; i--) {
    state_prop.push(state.playlists[j - i])
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
