import {connect} from 'react-redux'
import Profile from 'Profile'
import {fetchUser} from 'UserActions'
import {fetchPlaylists} from 'PlaylistActions'

const mapStateToProps = (state, ownProps) => {

  let user_playlists = Object.keys(state.playlists).map((db_spot) => {
    return state.playlists[db_spot]
  }).filter((play_list) => {
    return play_list.username === state.user.username
  })

  return ({
    userDetails: state.user,
    userPlaylists: user_playlists
  })
}

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (user) => dispatch(fetchUser(user)),
  fetchPlaylists: () => dispatch(fetchPlaylists())
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
