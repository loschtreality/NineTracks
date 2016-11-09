import {
  GIVE_PLAYBAR_PLAYLIST,
} from 'PlayBarActions'

import merge from 'lodash/merge'

const defaultState = {
    title: "Untitled Playlist",
    description: "",
    username: "Charlie Lemon",
    tags: [],
    picture_url: "http://res.cloudinary.com/loren-losch/image/upload/v1478461432/defaut_pic_zfnuk9.jpg",
    songs: []
}


const PlayBarReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case GIVE_PLAYBAR_PLAYLIST:
      return merge({}, action.playlist);
    default:
      return oldState;
  }
}


export default PlayBarReducer
