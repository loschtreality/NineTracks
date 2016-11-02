import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'RootComponent'
import configureStore from 'Store'

import Modal from 'react-modal'

document.addEventListener('DOMContentLoaded', () => {
    Modal.setAppElement(document.body)
    const root = document.getElementById('root');
    const store = configureStore()
    ReactDOM.render(<Root store={store}/>, root);
});
