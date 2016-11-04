import { combineReducers } from 'redux';

import SessionReducer from 'SessionReducer';
import PlaylistReducer from 'PlaylistReducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  playlist: PlaylistReducer
});

export default RootReducer;
