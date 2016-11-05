export const FETCH_SONGS = "FETCH_SONGS"
export const FETCH_SONG = "FETCH_SONG"
export const RECEIVE_ALL_SONGS = "RECEIVE_ALL_SONGS"
export const RECEIVE_SONG = "RECEIVE_SONG"
export const CREATE_SONG = "CREATE_SONG"

export const fetchSongs = () => ({
  type: FETCH_SONGS
})

export const fetchSong = (id) => ({
  type: FETCH_SONG,
  id
})

export const createSong = (song) => ({
  type: CREATE_SONG,
  song
})

export const receiveAllSongs = (songs) => ({
  type: RECEIVE_ALL_SONGS,
  songs
})

export const receiveSong = (song) => ({
  type: RECEIVE_SONG,
  song
})
