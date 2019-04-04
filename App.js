import React from 'react';
import { Provider } from 'react-redux'

import store from './App/Store'
import Application from './App/Navigation/'

export default class App extends React.Component{
  componentDidMount(){
    console.disableYellowBox = true
  }
  render() {
    return (
      <Provider store={store}>
        <Application />
      </Provider>
    );
  }
}
