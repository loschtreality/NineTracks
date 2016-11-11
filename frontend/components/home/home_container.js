import { connect } from 'react-redux';
import {fetchPlaylists} from 'PlaylistActions'
import {givePlayBarPlaylist} from 'PlayBarActions'
import {searchTags} from 'SearchActions'
import {hashHistory} from 'react-router'
import Home from 'Home'

const mapStateToProps = (state) => {
  let all_PL = Object.keys(state.playlists).map((pl_id) => {
    return state.playlists[pl_id]
  })
  let state_prop = []
  for (var i = 9, j = all_PL.length; i > 0; i--) {
    state_prop.push(all_PL[j - i])
  }

  return ({
    playlists: state_prop
  });
}


const mapDispatchToProps = (dispatch) => ({
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  givePlayBarPlaylist: (playlist) => dispatch(givePlayBarPlaylist(playlist)),
  searchTags: (query) => {
    dispatch(searchTags(query))
    hashHistory.push("search")
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
