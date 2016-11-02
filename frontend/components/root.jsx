import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';


import App from 'AppComponent';
import GreetingContainer from './greeting/greeting_container';


const Root = ({ store }) => (
  <Provider store={store}>

      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={GreetingContainer} />

        </Route>
      </Router>

  </Provider>
);

export default Root;
