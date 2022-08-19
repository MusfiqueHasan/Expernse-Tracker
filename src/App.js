import React from 'react';
import { Provider } from 'react-redux';
import Tracker from './pages/tracker-page/tracker';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Tracker />
    </Provider>
  );
}

export default App;
