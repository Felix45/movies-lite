import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Modal from './modals/Modal';
import Splash from './Splash';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return (
    <main className="bg-movie-body">
      <Navbar setIsOpen={setIsOpen} />
      <Outlet />
      {location.pathname === '/' && <Splash setIsOpen={setIsOpen} />}
      <Footer />
      { isOpen && <Modal setIsOpen={setIsOpen} /> }
    </main>
  );
};

export default Dashboard;
