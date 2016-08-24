import React, { Component } from 'react';
import { Provider } from 'react-redux';

import App from './App/App';
import createStore from './store';

const store = createStore();

export default class Main extends Component {
    render() {
      return (
        <Provider store={store}>
          <App />
        </Provider>
      );
    }
}
