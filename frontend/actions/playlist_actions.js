export const FETCH_PLAYLISTS = "FETCH_PLAYLISTS"
export const FETCH_PLAYLIST = "FETCH_PLAYLIST"
export const RECEIVE_ALL_PLAYLISTS = "RECEIVE_ALL_PLAYLISST"
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST"
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST"
export const CREATE_PLAYLIST = "CREATE_PLAYLIST"
export const UPDATE_PLAYLIST = "UPDATE_PLAYLIST"
export const DELETE_PLAYLIST = "DELETE_PLAYLIST"

export const fetchPlaylists = () => ({
  type: FETCH_PLAYLISTS
})

export const fetchPlaylist = (id) => ({
  type: FETCH_PLAYLIST,
  id
})

export const createPlaylist = (playlist) => ({
  type: CREATE_PLAYLIST,
  playlist
})

export const updatePlaylist = (playlist) => ({
  type: UPDATE_PLAYLIST,
  playlist
})

export const deletePlaylist = (id) => ({
  type: DELETE_PLAYLIST,
  id
})
export const receiveAllPlaylists = (playlists) => ({
  type: RECEIVE_ALL_PLAYLISTS,
  playlists
})
export const receivePlaylist = (playlist) => ({
  type: RECEIVE_PLAYLIST,
  playlist
})
export const removePlaylist = (playlist) => ({
  type: REMOVE_PLAYLIST,
  playlist
})
