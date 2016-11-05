import {
  RECEIVE_ALL_SONGS,
  RECEIVE_SONG,
} from 'SongActions'

import merge from 'lodash/merge'


const SongReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_SONGS:
      return merge({}, action.songs);
    case RECEIVE_SONG:
      return merge({}, oldState, {[action.song.id]: action.song});
    default:
      return oldState;
  }
}


export default SongReducer
