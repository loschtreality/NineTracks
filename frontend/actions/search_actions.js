export const SEARCH_TAGS = "SEARCH_TAGS"
export const RECEIVE_RESULTS = "RECEIVE_RESULTS"

export const searchTags = (tag_query) => ({
  type: SEARCH_TAGS,
  tag_query
})

export const receiveResults = (tag_results) => ({
  type: RECEIVE_RESULTS,
  tag_results
})
