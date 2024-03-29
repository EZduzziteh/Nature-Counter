/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'react-native-get-random-values';

import { Provider } from 'react-redux';
import { Map } from 'immutable';
import configureStore from './redux/store';

const initialState = Map({});
const store = configureStore(initialState);


const Application = props => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Application);
