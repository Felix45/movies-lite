import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PlayButton from './utilities/PlayButton';
import MovieList from './movies/MoviesList';
import { latestSeriesThunk } from '../redux/slices/latestSeriesSlice';

const LatestSeries = () => {
  const dispatch = useDispatch();
  const { latestseries } = useSelector((state) => state.latestseries);

  useEffect(() => {
    const timer = setInterval(
      () => {
        dispatch(latestSeriesThunk());
      }, 120000,
    );

    return () => clearInterval(timer);
  }, []);

  const { results } = latestseries;

  return (
    <section className="container-fluid px-5 mt-5 md:mt-10 mx-auto text-slate-400">
      <div className="flex flex-row pl-5">
        <PlayButton />
        <h2 className="ml-0 font-extralight text-3xl">Latest TV-Series</h2>
      </div>
      <MovieList shows={results} category="tv" cols="10" />
    </section>
  );
};

export default LatestSeries;
