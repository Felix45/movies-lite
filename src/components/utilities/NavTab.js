import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { trendingShowsThunk } from '../../redux/slices/trendingSlice';

const NavTab = () => {
  const dispatch = useDispatch();
  const [period, setPeriod] = useState('day');

  useEffect(() => {
    dispatch(trendingShowsThunk({ period }));
  }, [period]);

  return (
    <ul className="flex flex-row text-movie-gray">
      <li>
        <button type="button" onClick={() => setPeriod('day')} className={`p-[5px] text-xs ${period === 'day' ? 'border-movie-green' : 'border-movie-gray'} border-[2px] rounded-md ml-2`}>
          Day
        </button>
      </li>
      <li>
        <button type="button" onClick={() => setPeriod('week')} className={`p-[5px] text-xs ${period === 'week' ? 'border-movie-green' : 'border-movie-gray'} border-[2px] rounded-md ml-2`}>
          Week
        </button>
      </li>
    </ul>
  );
};

export default NavTab;
