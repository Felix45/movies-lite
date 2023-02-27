import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { watchShowThunk } from '../redux/slices/watchSlice';
import { IMG_URL } from '../http/http';

const WatchShow = () => {
  const { id, type } = useParams();
  const dispatch = useDispatch();
  const { watch } = useSelector((state) => state.watch);

  useEffect(() => {
    dispatch(watchShowThunk({ id, category: type }));
  }, [id, type]);

  return (
    <section className="relative h-48 md:h-128 w-full overflow-hidden">
      <div
        className="h-full"
        style={{
          backgroundImage: `url(${IMG_URL}/${watch.backdrop_path})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="" />
    </section>
  );
};

export default WatchShow;
