import {
  receivePlaylist,
  receiveAllPlaylists,
  removePlaylist,
  FETCH_PLAYLISTS,
  FETCH_PLAYLIST,
  CREATE_PLAYLIST,
  UPDATE_PLAYLIST,
  DELETE_PLAYLIST
} from "PlaylistActions"

import {
  createPlaylist,
  deletePlaylist,
  updatePlaylist,
  fetchPlaylists,
  fetchPlaylist
} from "PlaylistUtils"

import { hashHistory } from 'react-router'

const PlaylistsMiddleware = (store) => (next) => (action) => {
  let error = (e) => console.log(e.responseJSON);
  let receivePlaylistSuccess = (playlist) => store.dispatch(receivePlaylist(playlist))
  let receiveAllPlaylistsSuccess = (playlist) => store.dispatch(receiveAllPlaylists(playlist))
  let removePlaylistSuccess = (playlist) => store.dispatch(removePlaylist(playlist))

  let createUpdatePostSuccess = (playlist) => {
    store.dispatch(receivePlaylist(playlist))
    hashHistory.push(`playlists/${playlist.id}`)
  }

  switch (action.type) {
    case FETCH_PLAYLISTS:
    fetchPlaylists(receiveAllPlaylistsSuccess)
      return next(action);
    case FETCH_PLAYLIST:
    fetchPlaylist(action.id, receivePlaylistSuccess)
      return next(action);
    case CREATE_PLAYLIST:
    createPlaylist(action.playlist, createUpdatePostSuccess)
      return next(action);
      case UPDATE_PLAYLIST:
    updatePlaylist(action.playlist, createUpdatePostSuccess)
      return next(action);
    case DELETE_PLAYLIST:
    deletePlaylist(action.playlist, removePlaylistSuccess)
      return next(action);
    default:
      return next(action);
  }
}

export default PlaylistsMiddleware
