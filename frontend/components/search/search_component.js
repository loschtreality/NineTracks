import { connect } from 'react-redux'
import { givePlayBarPlaylist } from 'PlayBarActions'
import SearchResults from 'SearchResults'

const mapStateToProps = (state, ownProps) => ({
  songs: state.songs
})

const mapDispatchToProps = (dispatch) => ({
  givePlayBarPlaylist = (playlist) => dispatch(givePlayBarPlaylist(playlist))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults)
