import React from 'react';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
} from '@fortawesome/fontawesome-svg-core/import.macro';
import SeriesDropDown from './SeriesDropDown';

const SeriesHeader = ({ seasons }) => (
  <div className="flex justify-center items-center mx-3 text-white bg-black py-4 rounded-md md:mx-0">
    <div className="flex flex-row">
      <div className="flex flex-col justify-center items-center bg-movie-green p-1 rounded mr-2">
        <FontAwesomeIcon icon={solid('play')} size="xs" className="p-1 text-white" />
      </div>
      <SeriesDropDown seasons={seasons} />
    </div>
  </div>
);

SeriesHeader.propTypes = {
  seasons: PropTypes.instanceOf(Array).isRequired,
};

export default SeriesHeader;
