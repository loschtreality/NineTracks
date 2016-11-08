import { connect } from 'react-redux'
import {fetchPlaylist} from 'PlaylistActions'
import PlaylistShow from 'PlaylistShow'

const mapStateToProps = (state, ownProps) => {
  if (state.playlists[ownProps.params.id]) {
    return ({
      playlist: state.playlists[ownProps.params.id]
    })
  }
  return ({
    playlist: state.playlists[0]
  })
}

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylist: (playlist) => dispatch(fetchPlaylist(playlist))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistShow)
