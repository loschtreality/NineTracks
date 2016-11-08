const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/nineTracks.jsx',
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      AppComponent: "frontend/components/app.jsx",
      AuthDrop: "frontend/components/navigation/auth_drop.jsx",
      Cloud: "frontend/components/cloud/cloud.jsx",
      Home: "frontend/components/home/home.jsx",
      HomeContainer: "frontend/components/home/home_container.js",
      Nav: "frontend/components/navigation/nav.jsx",
      NavigationContainer: "frontend/components/navigation/navigation_container.js",
      PictureActions: "frontend/actions/picture_actions.js",
      PlayBar: "frontend/components/playbar/playbar.jsx",
      PlayBarContainer: "frontend/components/playbar/playbar_container.js",
      PlaylistActions: "frontend/actions/playlist_actions.js",
      PlaylistComments: "frontend/components/playlist/show/playlist_comments.jsx",
      PlaylistDetails: "frontend/components/playlist/new_edit/playlist_details.jsx",
      PlaylistFeed: "frontend/components/playlist/feed/playlist_feed.jsx",
      PlaylistFeedContainer: "frontend/components/playlist/feed/playlist_feed_container.js",
      PlaylistForm: "frontend/components/playlist/new_edit/playlist_form.jsx",
      PlaylistFormContainer: "frontend/components/playlist/new_edit/playlist_form_container.js",
      PlaylistShow: "frontend/components/playlist/show/playlist_show.jsx",
      PlaylistShowContainer: "frontend/components/playlist/show/playlist_show_container.js",
      PlaylistMiddleware: "frontend/middleware/playlist_middleware.js",
      PlaylistReducer: "frontend/reducers/playlist_reducer.js",
      PlaylistSmall: "frontend/components/playlist/playlist_small.jsx",
      PlaylistSongList: "frontend/components/playlist/new_edit/playlist_song_list.jsx",
      PlaylistSongSearch: "frontend/components/playlist/new_edit/playlist_song_search.jsx",
      PlaylistUtils: "frontend/util/playlist_util.js",
      Profile: "frontend/components/profile/profile.jsx",
      ProfileContainer: "frontend/components/profile/profile_container.js",
      RootComponent: "frontend/components/root.jsx",
      RootReducer: "frontend/reducers/root_reducer.js",
      RootMiddleware: "frontend/middleware/root_middleware.js",
      Search: "frontend/components/search/search.jsx",
      SearchContainer: "frontend/components/search/search_component.js",
      SessionActions: "frontend/actions/session_actions.js",
      SessionForm: "frontend/components/session_form/session_form.jsx",
      SessionFormContainer: "frontend/components/session_form/session_form_container.js",
      SessionMiddleware: "frontend/middleware/session_middleware.js",
      SessionUtils: "frontend/util/session_api_util.js",
      SessionReducer: "frontend/reducers/session_reducer.js",
      ShowSongs: "frontend/components/playlist/show/show_songs.jsx",
      SongActions: "frontend/actions/song_actions.js",
      SongMiddleware: "frontend/middleware/song_middleware.js",
      SongReducer: "frontend/reducers/song_reducer.js",
      SongUtils: "frontend/util/song_util.js",
      Store: "frontend/store/store.js",
      UploadSongButton: "frontend/components/cloud/upload_song_button.jsx",
      UploadPicButton: "frontend/components/cloud/upload_pic_button.jsx"
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devtool: 'source-maps'
};
