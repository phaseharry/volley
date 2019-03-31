import React from 'react';
import { Provider } from 'react-redux'

import store from './App/Store'
import Application from './App/Navigation/'

export default class App extends React.Component{
  render() {
    return (
      <Provider store={store}>
        <Application />
      </Provider>
    );
  }
}
