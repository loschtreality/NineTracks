import {
  receiveAllSongs,
  receiveSong,
  FETCH_SONGS,
  FETCH_SONG,
  CREATE_SONG

} from 'SongActions'

import {
  fetchSongs,
  fetchSong,
  createSong
} from 'SongUtils'


const SongMiddleware = (store) => (next) => (action) => {
  let e = (err) => console.log(err);
  let receiveSongSuccess = (song) => store.dispatch(receiveSong(song))
  let receiveAllSongsSuccess = (songs) => store.dispatch(receiveAllSongs(songs))

  switch (action.type) {
    case FETCH_SONGS:
      fetchSongs(receiveAllSongsSuccess, e)
    return next(action);
    case FETCH_SONG:
      fetchSong(action.id, receiveSongSuccess, e)
    return next(action);
    case CREATE_SONG:
      createSong(action.song, receiveSongSuccess, e)
    return next(action);
    default:
      return next(action);
  }
}



export default SongMiddleware
