import { connect } from 'react-redux'
import { givePlayBarPlaylist } from 'PlayBarActions'
import SearchResults from 'SearchResults'

const mapStateToProps = (state, ownProps) => {
  return ({
    search_results: Object.keys(state.search).map((pl_id) => {
      return state.search[pl_id]
    })
  })
}

const mapDispatchToProps = (dispatch) => ({
  givePlayBarPlaylist: (playlist) => dispatch(givePlayBarPlaylist(playlist))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults)
