import { connect } from 'react-redux'
import {fetchPlaylists} from 'PlaylistActions'
import PlaylistFeed from 'PlaylistFeed'

const mapStateToProps = (state, ownProps) => ({
  playlists: state.playlists
})

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylists: (playlist) => dispatch(fetchPlaylists(playlist))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistFeed)
