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
      RootComponent: "frontend/components/root.jsx",
      RootReducer: "frontend/reducers/root_reducer.js",
      RootMiddleware: "frontend/middleware/root_middleware.js",
      SessionUtils: "frontend/util/session_api_util.js",
      SessionActions: "frontend/actions/session_actions.js",
      SessionReducer: "frontend/reducers/session_reducer.js",
      SessionMiddleware: "frontend/middleware/session_middleware.js",
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
