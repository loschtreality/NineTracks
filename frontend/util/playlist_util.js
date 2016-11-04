
export const fetchPlaylists = (success, error) => {
  $.ajax({
    url: `api/playlists`,
    method: "GET",
    success,
    error
  })
}

export const fetchPlaylist = (id, success, error) => {
  $.ajax({
    url: `api/playlists/${id}`,
    method: "GET",
    success,
    error
  })
}

export const createPlaylist = (playlist, success, error) => {
  $.ajax({
    url: `api/playlists`,
    method: "POST",
    data: {playlist},
    success,
    error
  })
}

export const updatePlaylist = (playlist, success, error) => {
  $.ajax({
    url: `api/playlists/${playlist.id}`,
    method: "PATCH",
    data: {playlist},
    success,
    error
  })
  }

export const deletePlaylist = (id, success, error) =>{
  $.ajax({
    url: `api/playlists/${id}`,
    method: "DELETE",
    success,
    error
  })
}
