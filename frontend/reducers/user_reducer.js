import {
  RECEIVE_USER,
} from 'UserActions'

import merge from 'lodash/merge'


const UserReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, action.user);
    default:
      return oldState;
  }
}


export default UserReducer
