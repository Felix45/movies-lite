import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
} from '@fortawesome/fontawesome-svg-core/import.macro';
import { watchShowThunk } from '../redux/slices/watchSlice';
import { IMG_URL } from '../http/http';

const WatchShow = () => {
  const { id, type } = useParams();
  const dispatch = useDispatch();
  const { watch } = useSelector((state) => state.watch);

  useEffect(() => {
    dispatch(watchShowThunk({ id, category: type }));
  }, [id, type]);

  const {
    title, overview, original_title: originalTitle, name, poster_path: posterPath,
    production_companies: productionCompanies,
  } = watch;

  return (
    <section className="relative h-full w-full">
      <div
        className="h-128"
        style={{
          backgroundImage: `url(${IMG_URL}/${watch.backdrop_path})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="container mt-20 mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-2">
            <img className="rounded" src={`${IMG_URL}${posterPath}`} alt={title || originalTitle || name} />
          </div>
          <div className="col-span-6">
            <h2 className="text-white font-light text-4xl">{title || originalTitle || name}</h2>
            <div className="flex my-2 font-normal items-baseline">
              <span className="bg-movie-green text white px-2 rounded text-sm">HD</span>
              <span className="text-sm text-movie-gray">
                <FontAwesomeIcon icon={solid('star')} className="mx-2 text-movie-gray" size="sm" />
                {watch.vote_average.toFixed(2)}
              </span>
              { watch.runtime && (
              <span className="text-sm text-movie-gray ml-10 -mt-2">
                {watch.runtime}
                {' '}
                Min
              </span>
              )}
            </div>
            <p className="text-movie-gray mt-5">{overview}</p>
            <table className="table-auto mt-5 w-half text-movie-gray text-left">
              <tbody>
                <tr>
                  <td className="col-span-2">Country</td>
                  <td>{watch.origin_country}</td>
                </tr>
                <tr className="flex flex-row">
                  <td className="col-span-2">Genre</td>
                  <td>
                    <ul className="flex flex-row ml-20">
                      {watch.genres.map((genre) => <li className="ml-2" key={uuidv4()}>{genre.name}</li>)}
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="col-span-2">Release date</td>
                  <td>{watch.first_air_date}</td>
                </tr>
                <tr className="flex flex-row">
                  <td className="col-span-2">Production:</td>
                  <td>
                    <ul className="flex flex-row ml-20">
                      {
                        productionCompanies.map((prod) => <li className="ml-2" key={uuidv4()}>{prod.name}</li>)
                      }
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="col-span-2">Tagline:</td>
                  <td><span className="ml-20">{watch.tagline}</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchShow;
