
import { applyMiddleware, compose } from 'redux';

import SessionMiddleware from 'SessionMiddleware';
import PlaylistMiddleware from 'PlaylistMiddleware';
import SongMiddleware from 'SongMiddleware'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const RootMiddleware = composeEnhancers(
  applyMiddleware(
  SessionMiddleware,
  PlaylistMiddleware,
  SongMiddleware
));

export default RootMiddleware;
