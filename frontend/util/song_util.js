export const fetchSongs = (song, success, error) => {
  $.ajax({
    url: `api/songs`,
    method: "GET",
    success,
    error
  })
}
export const fetchSong = (id, success, error) => {
  $.ajax({
    url: `api/songs/${id}`,
    method: "GET",
    success,
    error
  })
}
export const createSong = (song, success, error) => {
  $.ajax({
    url: `api/songs`,
    method: "POST",
    data: {song},
    success,
    error
  })
}
