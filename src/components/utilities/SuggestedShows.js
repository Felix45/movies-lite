import React from 'react';
import PropTypes from 'prop-types';
import PlayButton from './PlayButton';
import SuggestedShowList from './SuggestedShowList';

const SuggestedShows = ({ shows }) => (
  <section className="mt-5 flex flex-col">
    <div className="flex flex-row">
      <PlayButton />
      <h2 className="text-white font-bold text-4xl">Recommended</h2>
    </div>
    <SuggestedShowList shows={shows} />
  </section>
);

SuggestedShows.propTypes = {
  shows: PropTypes.instanceOf(Array).isRequired,
};
export default SuggestedShows;
