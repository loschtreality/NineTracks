import { connect } from 'react-redux'
import {fetchPlaylist} from 'PlaylistActions'
import { givePlayBarPlaylist } from 'PlayBarActions'
import {searchTags} from 'SearchActions'
import PlaylistShow from 'PlaylistShow'
import {hashHistory} from 'react-router'

const mapStateToProps = (state, ownProps) => {
    return ({
      playlist: state.playlists[ownProps.params.id],
      loggedUser: state.session.currentUser
    })
}

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylist: (playlist) => dispatch(fetchPlaylist(playlist)),
  givePlayBarPlaylist: (playlist) => dispatch(givePlayBarPlaylist(playlist)),
  searchTags: (query) => {
    dispatch(searchTags(query))
    hashHistory.push("search")
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistShow)
