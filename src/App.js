import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import store from './redux/store';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Modal from './modals/Modal';

const persistor = persistStore(store);
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <main>
          <Navbar setIsOpen={setIsOpen} />
          <Footer />
          { isOpen && <Modal setIsOpen={setIsOpen} /> }
        </main>
      </PersistGate>
    </Provider>
  );
};

export default App;
