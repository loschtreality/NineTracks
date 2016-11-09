export const FETCH_USER = "FETCH_USER"
export const RECEIVE_USER = "RECEIVE_USER"

export const fetchUser = (id) => ({
  type: FETCH_USER,
  id
})

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
})
