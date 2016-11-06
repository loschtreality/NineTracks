import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';


import App from 'AppComponent';
import HomeContainer from 'HomeContainer';
import PlaylistFeedContainer from 'PlaylistFeedContainer'
import PlaylistFormContainer from 'PlaylistFormContainer'
import PlaylistShowContainer from 'PlaylistShowContainer'



const Root = ({ store }) => (
  <Provider store={store}>

      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={HomeContainer} />
          <Route path="feed" component={PlaylistFeedContainer}/>
          <Route path="new" component={PlaylistFormContainer}/>
          <Route path="playlists/:id" component={PlaylistShowContainer}/>
        </Route>
      </Router>

  </Provider>
);

export default Root;
