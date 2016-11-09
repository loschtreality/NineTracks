import { connect } from 'react-redux'
import {fetchPlaylists} from 'PlaylistActions'
import {givePlayBarPlaylist} from 'PlayBarActions'
import PlaylistFeed from 'PlaylistFeed'

const mapStateToProps = (state, ownProps) =>{
  return ({
    playlists: Object.keys(state.playlists).map((id) => state.playlists[id])
  })
}

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  givePlayBarPlaylist: (playlist) => dispatch(givePlayBarPlaylist(playlist))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistFeed)
