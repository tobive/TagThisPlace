import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store';
import MainStackContainer from './src/containers/MainStackContainer';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainStackContainer />
      </Provider>
    );
  }
}

export default App;
