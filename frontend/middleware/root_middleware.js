
import { applyMiddleware } from 'redux';

import SessionMiddleware from 'SessionMiddleware';
import PlaylistMiddleware from 'PlaylistMiddleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  PlaylistMiddleware
);

export default RootMiddleware;
