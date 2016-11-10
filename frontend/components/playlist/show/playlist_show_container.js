import { connect } from 'react-redux'
import {fetchPlaylist} from 'PlaylistActions'
import { givePlayBarPlaylist } from 'PlayBarActions'
import PlaylistShow from 'PlaylistShow'

const mapStateToProps = (state, ownProps) => {
    return ({
      playlist: state.playlists[ownProps.params.id],
      loggedUser: state.session.currentUser
    })
}

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylist: (playlist) => dispatch(fetchPlaylist(playlist)),
  givePlayBarPlaylist: (playlist) => dispatch(givePlayBarPlaylist(playlist))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistShow)
