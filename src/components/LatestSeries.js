import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MovieList from './movies/MoviesList';
import { latestSeriesThunk } from '../redux/slices/latestSeriesSlice';

const LatestSeries = () => {
  const dispatch = useDispatch();
  const { latestseries } = useSelector((state) => state.latestseries);

  useEffect(() => {
    const timer = setInterval(
      () => {
        dispatch(latestSeriesThunk());
      }, 1000,
    );

    return () => clearInterval(timer);
  }, []);

  const { results } = latestseries;

  return (
    <section className="container mt-5 md:mt-10 mx-auto text-slate-400">
      <div className="flex flex-col md:flex-row">
        <h2 className="ml-4 md:ml-0 font-extralight text-3xl">Latest TV-Series</h2>
      </div>
      <MovieList shows={results} category="tv" />
    </section>
  );
};

export default LatestSeries;