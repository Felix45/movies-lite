import React from 'react';
import PropTypes from 'prop-types';
import Carousel from './components/Carousel';
import Share from './components/Share';
import LatestMovies from './components/LatestMovies';
import RecommendedShows from './components/Recommended';
import LatestSeries from './components/LatestSeries';
import Trending from './components/Trending';
import RecentlyUpdated from './components/RecentShows';

const Splash = ({ setIsOpen }) => (
  <section className="bg-movie-body">
    <Carousel setIsOpen={setIsOpen} />
    <Share />

    <div className="container-fluid mx-auto 2xl:container">
      <div className="flex flex-col gap-0 lg:flex-row">
        <div className="flex flex-col lg:w-3/4">
          <RecommendedShows />
          <LatestMovies />
          <LatestSeries />
        </div>
        <div className="lg:w-1/4">
          <Trending />
          <RecentlyUpdated />
        </div>
      </div>
    </div>
  </section>
);

Splash.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

export default Splash;
