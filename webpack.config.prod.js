var webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: "./frontend/nineTracks.jsx",
  output: {
    path: "./app/assets/javascripts",
    filename: "bundle.js"
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    root: __dirname,
    alias: {
      AppComponent: "frontend/components/app.jsx",
      AuthDrop: "frontend/components/navigation/auth_drop.jsx",
      Home: "frontend/components/home/home.jsx",
      HomeContainer: "frontend/components/home/home_container.js",
      Nav: "frontend/components/navigation/nav.jsx",
      NavigationContainer: "frontend/components/navigation/navigation_container.js",
      PictureActions: "frontend/actions/picture_actions.js",
      PlayBar: "frontend/components/playbar/playbar.jsx",
      PlayBarActions: "frontend/actions/playbar_actions.js",
      PlayBarButton: "frontend/components/playbar/playbar_button.jsx",
      PlayBarContainer: "frontend/components/playbar/playbar_container.js",
      PlayBarReducer: "frontend/reducers/playbar_reducer.js",
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
      SearchResults: "frontend/components/search/search_results.jsx",
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
      UserActions: "frontend/actions/user_actions.js",
      UserMiddleware: "frontend/middleware/user_middleware.js",
      UserReducer: "frontend/reducers/user_reducer.js",
      UserUtils: "frontend/util/user_util.js",
      UploadPicButton: "frontend/components/playlist/new_edit/upload_pic_button.jsx"
    },
    extensions: ["", ".js", ".jsx"]
  }
};
