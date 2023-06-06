import React from 'react';
import AppNavigator from './components/AppNavigator';
import { Provider } from 'react-redux';
import {store} from './redux/store';

const App = () =>{
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

export default App;