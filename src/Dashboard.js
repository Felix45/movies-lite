import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Modal from './modals/Modal';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main>
      <Navbar setIsOpen={setIsOpen} />
      <Outlet />
      <Footer />
      { isOpen && <Modal setIsOpen={setIsOpen} /> }
    </main>
  );
};

export default Dashboard;
