import React from 'react';
import { useSelector } from 'react-redux';
import NavTab from './utilities/NavTab';
import PlayButton from './utilities/PlayButton';
import SuggestedShowList from './utilities/SuggestedShowList';

const Trending = () => {
  const { results: shows } = useSelector((state) => state.trending.trending);

  return (
    <aside className="flex flex-col mt-10 mx-10 lg:ml-0">
      <div className="container-fluid flex flex-row justify-between xl:container">
        <div className="flex flex-row">
          <PlayButton />
          <h2 className="ml-0 md:ml-0 font-bold text-white text-3xl lg:text-2xl xl:text-3xl">Top 10</h2>
        </div>
        <NavTab />
      </div>
      { shows && <SuggestedShowList shows={shows.slice(0, 10)} rank /> }
    </aside>
  );
};

export default Trending;
