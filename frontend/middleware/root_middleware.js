
import { applyMiddleware, compose } from 'redux';

import SessionMiddleware from 'SessionMiddleware';
import PlaylistMiddleware from 'PlaylistMiddleware';
import SongMiddleware from 'SongMiddleware'
import UserMiddleware from 'UserMiddleware'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const RootMiddleware = composeEnhancers(
  applyMiddleware(
  SessionMiddleware,
  PlaylistMiddleware,
  SongMiddleware,
  UserMiddleware
));

export default RootMiddleware;
