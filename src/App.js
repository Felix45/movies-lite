import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Modal from './modals/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <Navbar setIsOpen={setIsOpen} />
      <Footer />
      { isOpen && <Modal setIsOpen={setIsOpen} /> }
    </main>
  );
}

export default App;
