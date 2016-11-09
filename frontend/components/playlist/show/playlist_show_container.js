import { connect } from 'react-redux'
import {fetchPlaylist} from 'PlaylistActions'
import { givePlayBarPlaylist } from 'PlayBarActions'
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
  fetchPlaylist: (playlist) => dispatch(fetchPlaylist(playlist)),
  givePlayBarPlaylist: (playlist) => dispatch(givePlayBarPlaylist(playlist))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistShow)
