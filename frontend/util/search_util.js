export const findPlaylists = (tag_query, success, error) => {
  $.ajax({
    url: `api/tags`,
    method: "get",
    data: {tag_query},
    success,
    error
  })
}
