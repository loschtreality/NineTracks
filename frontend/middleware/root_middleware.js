
import { applyMiddleware } from 'redux';

import SessionMiddleware from 'SessionMiddleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware
);

export default RootMiddleware;
