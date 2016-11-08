import { connect } from 'react-redux'
import {fetchPlaylists} from 'PlaylistActions'
import PlaylistFeed from 'PlaylistFeed'

const mapStateToProps = (state, ownProps) =>{
  return ({
    playlists: Object.keys(state.playlists).map((id) => state.playlists[id])
  })
}

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylists: () => dispatch(fetchPlaylists())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistFeed)
