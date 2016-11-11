import { connect } from 'react-redux'
import {fetchPlaylists} from 'PlaylistActions'
import {givePlayBarPlaylist} from 'PlayBarActions'
import PlaylistFeed from 'PlaylistFeed'
import {searchTags} from 'SearchActions'
import {hashHistory} from 'react-router'


const mapStateToProps = (state, ownProps) =>{
  return ({
    playlists: Object.keys(state.playlists).map((id) => state.playlists[id])
  })
}

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  givePlayBarPlaylist: (playlist) => dispatch(givePlayBarPlaylist(playlist)),
  searchTags: (query) => {
    dispatch(searchTags(query))
    hashHistory.push("search")
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistFeed)
