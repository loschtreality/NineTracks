import {
  RECEIVE_ALL_PLAYLISTS,
  RECEIVE_PLAYLIST,
  REMOVE_PLAYLIST
} from 'PlaylistActions'

import merge from 'lodash/merge'

const defaultState = {
  0: {
    id: "0",
    title: "Untitled Playlist",
    description: "",
    username: "Charlie Lemon",
    tags: [],
    picture_url: "http://res.cloudinary.com/loren-losch/image/upload/v1478461432/defaut_pic_zfnuk9.jpg",
    songs: []
  }
}


const PlaylistReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case RECEIVE_ALL_PLAYLISTS:
      return merge({}, defaultState, action.playlists);
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
