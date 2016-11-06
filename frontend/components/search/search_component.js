import { connect } from 'react-redux'
import {fetchPlaylist, createPlaylist, updatePlaylist} from 'PlaylistActions'
import Search from 'Search'

const mapStateToProps = (state, ownProps) => ({
  songs: state.songs
})

const mapDispatchToProps = (dispatch) => ({
  fetchSongs: (songs) => dispatch(fetchSongs(songs))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
