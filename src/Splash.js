import React from 'react';
import PropTypes from 'prop-types';
import Carousel from './components/Carousel';
import Share from './components/Share';
import LatestMovies from './components/LatestMovies';
import RecommendedShows from './components/Recommended';
import LatestSeries from './components/LatestSeries';

const Splash = ({ setIsOpen }) => (
  <section className="bg-movie-body">
    <Carousel setIsOpen={setIsOpen} />
    <Share />

    <div className="container mx-auto">
      <RecommendedShows />
      <LatestMovies />
      <LatestSeries />
    </div>
  </section>
);

Splash.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

export default Splash;
