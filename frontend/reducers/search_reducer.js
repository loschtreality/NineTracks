import {
  RECEIVE_RESULTS,
} from 'SearchActions'

import merge from 'lodash/merge'

const SearchReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_RESULTS:
      return merge({}, action.tag_results);
    default:
      return oldState;
  }
}


export default SearchReducer
