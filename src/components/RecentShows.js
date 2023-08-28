import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PlayButton from './utilities/PlayButton';
import SuggestedShowList from './utilities/SuggestedShowList';
import { recentSeriesThunk } from '../redux/slices/recentShowsSlice';

const RecentlyUpdated = () => {
  const dispatch = useDispatch();
  const { results: shows } = useSelector((state) => state.recentseries.recentseries);

  useEffect(() => {
    dispatch(recentSeriesThunk());
  }, []);

  return (
    <aside className="flex flex-col mt-10 mx-5 lg:ml-0">
      <div className="container-fluid flex flex-row justify-between xl:container">
        <div className="flex flex-row">
          <PlayButton />
          <h2 className="ml-0 md:ml-0 font-bold text-white text-3xl lg:text-2xl xl:text-3xl">Recently Updated</h2>
        </div>
      </div>
      {shows && <SuggestedShowList shows={shows} /> }
    </aside>
  );
};

export default RecentlyUpdated;
