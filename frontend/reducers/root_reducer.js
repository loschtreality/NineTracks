import { combineReducers } from 'redux';

import SessionReducer from 'SessionReducer';
import PlaylistReducer from 'PlaylistReducer';
import SongReducer from 'SongReducer';
import PlayBarReducer from 'PlayBarReducer'
import UserReducer from 'UserReducer'
import SearchReducer from 'SearchReducer'

const RootReducer = combineReducers({
  session: SessionReducer,
  playlists: PlaylistReducer,
  songs: SongReducer,
  playbar: PlayBarReducer,
  user: UserReducer,
  search: SearchReducer
});

export default RootReducer;
