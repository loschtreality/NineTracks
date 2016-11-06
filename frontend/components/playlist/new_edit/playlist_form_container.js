import { connect } from 'react-redux'
import {fetchPlaylist, createPlaylist, updatePlaylist} from 'PlaylistActions'
import { fetchSongs } from 'SongActions'
import PlaylistForm from 'PlaylistForm'

const mapStateToProps = (state, ownProps) => {
  return ({
    playlist: (state.playlist === undefined ? null : state.playlist[ownProps.params.id]),
    type: (ownProps === undefined ? "new" : "edit"),
    songs: state.songs
  })
}


const mapDispatchToProps = (dispatch) => ({
  fetchPlaylist: (playlist) => dispatch(fetchPlaylist(playlist)),
  createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
  updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist)),
  fetchSongs: () => dispatch(fetchSongs())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistForm)
