import {
  RECEIVE_ALL_PLAYLISTS,
  RECEIVE_PLAYLIST,
  REMOVE_PLAYLIST
} from 'PlaylistActions'

import merge from 'lodash/merge'

const defaultState = {

}


const PlaylistReducer = (oldState = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_ALL_PLAYLISTS:
      return merge({}, action.playlists);
    case RECEIVE_PLAYLIST:
      return merge({}, oldState, {[action.playlist.id]: action.playlist});
    case REMOVE_PLAYLIST:
    let newState = merge({}, oldState)
    delete newState[action.playlist.id]
      return newState;
    default:
      return oldState;
  }
}


export default PlaylistReducer
