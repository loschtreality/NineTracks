import {connect} from 'react-redux'
import Profile from 'Profile'
import {fetchUser} from 'UserActions'
import {fetchPlaylists} from 'PlaylistActions'
import {searchTags} from 'SearchActions'
import {givePlayBarPlaylist} from 'PlayBarActions'
import {hashHistory} from 'react-router'

const mapStateToProps = (state, ownProps) => {

  const user_playlists = Object.keys(state.playlists).map((db_spot) => {
    return state.playlists[db_spot]
  }).filter((play_list) => {
    return play_list.username === state.user.username
  })

  return ({
    userDetails: state.user,
    userPlaylists: user_playlists,
    currentUser: state.session.currentUser
  })
}

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (user) => dispatch(fetchUser(user)),
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  givePlayBarPlaylist: (playlist) => dispatch(givePlayBarPlaylist(playlist)),
  searchTags: (query) => {
    dispatch(searchTags(query))
    hashHistory.push("search")
  }
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
