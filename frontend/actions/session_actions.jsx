export const LOGIN_USER = "LOGIN_USER"
export const LOGOUT_USER = "LOGOUT_USER"
export const SIGN_UP_USER = "SIGN_UP_USER"
export const RECEIVE_CURR_USER = "RECEIVE_CURR_USER"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"

export const loginUser = (user) => ({type: LOGIN, user})
export const logoutUser = () => ({type: LOGOUT})
export const signupUser = (user) => ({type: SIGN_UP_USER, user})
export const receiveCurrentUser = (currentUser) => ({type: RECEIVE_CURR_USER, currentUser})
export const receiveErrors = (errors) => ({type: RECEIVE_ERRORS, errors})
