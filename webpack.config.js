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
      SessionUtils: 'frontend/util/session_api_util.js',
      SessionActions: "frontend/actions/session_actions.jsx"
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
