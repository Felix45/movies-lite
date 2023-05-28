import React from 'react';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
} from '@fortawesome/fontawesome-svg-core/import.macro';
import { useSelector } from 'react-redux';
import SeriesDropDown from './SeriesDropDown';
import EpisodePallete from './EpisodePallete';

const SeriesHeader = ({ seasons, url }) => {
  const { watch } = useSelector((state) => state.watch);
  const { episodes } = watch.episodes;

  return (
    <div className="flex flex-col mx-3 bg-movie-green text-white bg-black py-4 rounded-md md:mx-0">
      <div className="flex flex-row px-4">
        <div className="flex flex-col justify-center items-center bg-movie-green p-1 rounded mr-2">
          <FontAwesomeIcon icon={solid('play')} size="xs" className="p-1 text-white" />
        </div>
        <SeriesDropDown seasons={seasons} url={url} />
      </div>
      <div>
        { episodes && <EpisodePallete data={episodes} title="Episode" /> }
      </div>
    </div>
  );
};

SeriesHeader.propTypes = {
  url: PropTypes.instanceOf(Object).isRequired,
  seasons: PropTypes.instanceOf(Array).isRequired,
};

export default SeriesHeader;
