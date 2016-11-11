import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'RootComponent'
import configureStore from 'Store'

import Modal from 'react-modal'

document.addEventListener('DOMContentLoaded', () => {

  let store;
    if (window.currentUser) {
      const preloadedState = {session: {currentUser: window.currentUser}};
      store = configureStore(preloadedState);
    } else {
      store = configureStore();
    }

    window.React = React

    Modal.setAppElement(document.body)
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
});
