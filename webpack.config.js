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
      Feed: "frontend/components/feed/feed.jsx",
      FeedContainer: "frontend/components/feed/feed_container.js",
      Home: "frontend/components/home/home.jsx",
      HomeContainer: "frontend/components/home/home_container.js",
      Nav: "frontend/components/navigation/nav.jsx",
      NavigationContainer: "frontend/components/navigation/navigation_container.js",
      RootComponent: "frontend/components/root.jsx",
      RootReducer: "frontend/reducers/root_reducer.js",
      RootMiddleware: "frontend/middleware/root_middleware.js",
      SessionActions: "frontend/actions/session_actions.js",
      SessionForm: "frontend/components/session_form/session_form.jsx",
      SessionFormContainer: "frontend/components/session_form/session_form_container.js",
      SessionMiddleware: "frontend/middleware/session_middleware.js",
      SessionUtils: "frontend/util/session_api_util.js",
      SessionReducer: "frontend/reducers/session_reducer.js",
      Store: "frontend/store/store.js"
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
