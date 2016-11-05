import { combineReducers } from 'redux';

import SessionReducer from 'SessionReducer';
import PlaylistReducer from 'PlaylistReducer';
import SongReducer from 'SongReducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  playlists: PlaylistReducer,
  songs: SongReducer
});

export default RootReducer;
