import React from 'react'
import { connect } from 'react-redux'
import {fetchPlaylist} from 'PlaylistActions'
import PlayBar from 'PlayBar'

const mapStateToProps = (state) => ({
  playlist: {songs: ["dummy"]}
})

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylist: (playlist) => dispatch(fetchPlaylist(playlist))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayBar)
