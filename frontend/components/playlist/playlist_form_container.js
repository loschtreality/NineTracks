import { connect } from 'react-redux'
import {fetchPlaylist, createPlaylist, updatePlaylist} from 'PlaylistActions'
import PlaylistForm from 'PlaylistForm'

const mapStateToProps = (state, ownProps) => ({
  playlist: state.playlist
})

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylist: (playlist) => dispatch(fetchPlaylist(playlist)),
  createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
  updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistForm)
