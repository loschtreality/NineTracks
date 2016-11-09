import React from 'react'
import { connect } from 'react-redux'
import PlayBar from 'PlayBar'

const mapStateToProps = (state) => {
  return ({
    pb_playlist: state.playbar
  })
}


const mapDispatchToProps = (dispatch) => ({

})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayBar)
