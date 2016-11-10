import {
  receiveResults,
  SEARCH_TAGS
} from 'SearchActions'

import {
  findPlaylists
} from 'SearchUtils'


const SearchMiddleware = (store) => (next) => (action) => {
  let e = (err) => console.log(err);
  let receiveResultsSuccess = (results) => store.dispatch(receiveResults(results))

  switch (action.type) {
    case SEARCH_TAGS:
      findPlaylists(action.tag_query, receiveResultsSuccess, e)
    return next(action);
    default:
      return next(action);
  }
}



export default SearchMiddleware
