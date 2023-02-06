import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Modal from './modals/Modal';
import Carousel from './components/Carousel';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main>
      <Navbar setIsOpen={setIsOpen} />
      <Outlet />
      <Carousel setIsOpen={setIsOpen} />
      <Footer />
      { isOpen && <Modal setIsOpen={setIsOpen} /> }
    </main>
  );
};

export default Dashboard;
