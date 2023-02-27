import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import store from './redux/store';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Dashboard from './Dashboard';
import WatchShow from './pages/Watch';

const persistor = persistStore(store);
const App = () => (
  <Router>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv-series" element={<Series />} />
            <Route path="/watch/:type/:id" element={<WatchShow />} />
          </Route>
        </Routes>
      </PersistGate>
    </Provider>
  </Router>
);

export default App;
