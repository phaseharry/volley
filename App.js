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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
