import { connect } from 'react-redux'
import {fetchPlaylist, createPlaylist, updatePlaylist} from 'PlaylistActions'
import { fetchSongs } from 'SongActions'
import PlaylistForm from 'PlaylistForm'

const mapStateToProps = (state, ownProps) => {
  return ({
    playlist: (state.playlists[ownProps.params.id] ? state.playlists[ownProps.params.id] :  state.playlists[0]),
    type: (ownProps.params.id === undefined ? "new" : "edit"),
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
