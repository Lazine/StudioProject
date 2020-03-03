import React from 'react';
import AppContainer from './src/navigator/AppNavigator';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/redux/reducer/reducer';


const store = createStore(reducer);

const App = () => (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );

export default App;