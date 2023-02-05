import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import store from './redux/store';
import Dashboard from './Dashboard';

const persistor = persistStore(store);
const App = () => (
  <Router>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </PersistGate>
    </Provider>
  </Router>
);

export default App;
