import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Modal from './modals/Modal';
import Carousel from './components/Carousel';
import Share from './components/Share';
import RecommendedShows from './components/Recommended';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="bg-movie-body">
      <Navbar setIsOpen={setIsOpen} />
      <Outlet />
      <Carousel setIsOpen={setIsOpen} />
      <Share />
      <RecommendedShows />
      <Footer />
      { isOpen && <Modal setIsOpen={setIsOpen} /> }
    </main>
  );
};

export default Dashboard;
