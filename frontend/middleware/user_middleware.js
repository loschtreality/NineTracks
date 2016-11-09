import {
  receiveUser,
  FETCH_USER
} from 'UserActions'

import {
  fetchUser
} from 'UserUtils'


const UserMiddleware = (store) => (next) => (action) => {
  let e = (err) => console.log(err);
  let receiveUserSuccess = (user) => store.dispatch(receiveUser(user))

  switch (action.type) {
    case FETCH_USER:
      fetchUser(action.id, receiveUserSuccess, e)
    return next(action);

    default:
      return next(action);
  }
}



export default UserMiddleware
