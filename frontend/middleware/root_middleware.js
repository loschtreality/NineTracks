
import { applyMiddleware, compose } from 'redux';

import SessionMiddleware from 'SessionMiddleware';
import PlaylistMiddleware from 'PlaylistMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const RootMiddleware = composeEnhancers(
  applyMiddleware(
  SessionMiddleware,
  PlaylistMiddleware
));

export default RootMiddleware;
