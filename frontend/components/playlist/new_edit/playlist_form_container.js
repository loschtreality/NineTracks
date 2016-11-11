import { connect } from 'react-redux'
import {fetchPlaylist, createPlaylist, updatePlaylist, deletePlaylist} from 'PlaylistActions'
import PlaylistForm from 'PlaylistForm'

const mapStateToProps = (state, ownProps) => {
  return ({
    playlist: (state.playlists[ownProps.params.id] ? state.playlists[ownProps.params.id] :  state.playlists[0]),
    type: (ownProps.params.id === undefined ? "new" : "edit"),
    songs: state.songs,
    playlistOwner: state.session.currentUser
  })
}


const mapDispatchToProps = (dispatch) => ({
  fetchPlaylist: (playlist) => dispatch(fetchPlaylist(playlist)),
  createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
  updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist)),
  deletePlaylist: (id) => dispatch(deletePlaylist(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistForm)
