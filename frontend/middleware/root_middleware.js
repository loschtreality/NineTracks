
import { applyMiddleware, compose } from 'redux';

import SessionMiddleware from 'SessionMiddleware';
import PlaylistMiddleware from 'PlaylistMiddleware';
import UserMiddleware from 'UserMiddleware'
import SearchMiddleware from 'SearchMiddleware'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const RootMiddleware = composeEnhancers(
  applyMiddleware(
  SessionMiddleware,
  PlaylistMiddleware,
  UserMiddleware,
  SearchMiddleware
));

export default RootMiddleware;
