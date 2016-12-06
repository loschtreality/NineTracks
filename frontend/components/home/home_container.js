import { connect } from 'react-redux';
import {hashHistory} from 'react-router'

import {fetchPlaylists} from 'PlaylistActions'
import {givePlayBarPlaylist} from 'PlayBarActions'
import {searchTags} from 'SearchActions'
import {login} from 'SessionActions'

import Home from 'Home'

const mapStateToProps = (state) => {
  let all_PL = Object.keys(state.playlists).map((pl_id) => {
    return state.playlists[pl_id]
  })
  let state_prop = []
  for (var i = 1, j = all_PL.length; i < 10; i++) {
    state_prop.push(all_PL[i])
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
  },
  login: (user) => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
