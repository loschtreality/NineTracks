import { combineReducers } from 'redux';

import SessionReducer from 'SessionReducer';
import PlaylistReducer from 'PlaylistReducer';
import SongReducer from 'SongReducer';
import PlayBarReducer from 'PlayBarReducer'

const RootReducer = combineReducers({
  session: SessionReducer,
  playlists: PlaylistReducer,
  songs: SongReducer,
  playbar: PlayBarReducer
});

export default RootReducer;
