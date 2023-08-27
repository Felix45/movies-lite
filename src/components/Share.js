import React from 'react';
import shareText from '../data/share';

const Share = () => (
  <section className="container-fluid px-0 mt-3 mb-5 mx-auto md:px-10 2xl:container">
    <h2 className="p-3 pb-0 font-bold text-white">Watch Movies Online Free</h2>
    <p className="hidden md:block p-3 text-movie-text">{shareText}</p>
    <h3 className="p-3 pt-0 font-bold text-movie-text">Please help us by sharing this site with your friends. Thanks!</h3>
    <div className="px-3 sharethis-inline-share-buttons text-sm font-bold" />
  </section>
);

export default Share;
