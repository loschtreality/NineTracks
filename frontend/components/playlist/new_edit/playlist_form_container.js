import { connect } from 'react-redux'
import {fetchPlaylist, createPlaylist, updatePlaylist} from 'PlaylistActions'
import PlaylistForm from 'PlaylistForm'

const mapStateToProps = (state, ownProps) => {
  return ({
    playlist: (state.playlist === undefined ? null : state.playlist[ownProps.params.id]),
    type: (ownProps === undefined ? "new" : "edit")
  })
}


const mapDispatchToProps = (dispatch) => ({
  fetchPlaylist: (playlist) => dispatch(fetchPlaylist(playlist)),
  createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
  updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistForm)
