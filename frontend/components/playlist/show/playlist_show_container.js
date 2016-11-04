import { connect } from 'react-redux'
import {fetchPlaylist} from 'PlaylistActions'
import PlaylistShow from 'PlaylistShow'

const mapStateToProps = (state, ownProps) => ({
  playlist: state.playlists,
  own: ownProps
})

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylist: (playlist) => dispatch(fetchPlaylist(playlist))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistShow)
