import { connect } from 'react-redux'
import { givePlayBarPlaylist } from 'PlayBarActions'
import SearchResults from 'SearchResults'

const mapStateToProps = (state, ownProps) => ({
  search_results: state.search
})

const mapDispatchToProps = (dispatch) => ({
  givePlayBarPlaylist: (playlist) => dispatch(givePlayBarPlaylist(playlist))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults)
