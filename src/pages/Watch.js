import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
} from '@fortawesome/fontawesome-svg-core/import.macro';
import { watchShowThunk, recommendedShowThunk } from '../redux/slices/watchSlice';
import { IMG_URL } from '../http/http';
import MovieHeader from '../components/utilities/MovieHeader';
import SeriesHeader from '../components/utilities/SeriesHeader';

const WatchShow = () => {
  const { id, type } = useParams();
  const dispatch = useDispatch();
  const { watch } = useSelector((state) => state.watch);

  useEffect(() => {
    dispatch(watchShowThunk({ id, category: type }))
      .then(() => dispatch(recommendedShowThunk({ id, category: type })));
  }, [id, type]);

  const {
    title, overview, seasons, original_title: originalTitle, name, poster_path: posterPath,
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
          <div className="col-span-12 md:hidden lg:col-span-3 lg:block mx-5 mr-0">
            <img className="rounded" src={`${IMG_URL}${posterPath}`} alt={title || originalTitle || name} />
          </div>
          <div className="col-span-12 mx-3 md:mx-0 md:col-span-6 lg:col-span-6">
            <h2 className="text-white font-light text-4xl">{title || originalTitle || name}</h2>
            <div className="flex my-2 font-normal items-baseline">
              <span className="bg-movie-green text-white px-2 rounded text-sm">HD</span>
              <span className="text-sm text-movie-gray">
                <FontAwesomeIcon icon={solid('star')} className="mx-2 text-movie-gray" size="sm" />
                {watch.vote_average}
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
            <table className="flex flex-start mt-5 border-collapse table-fixed w-full text-movie-gray text-sm">
              <tbody>
                {watch.origin_country && (
                <tr className="mb-2">
                  <td className="colspan-2">Country</td>
                  <td><span className="ml-2">{watch.origin_country}</span></td>
                </tr>
                )}
                {watch.genres && (
                <tr className="mb-2">
                  <td className="colspan-2">Genre</td>
                  <td>
                    {watch.genres.map((genre) => <span className="ml-2" key={uuidv4()}>{genre.name}</span>)}
                  </td>
                </tr>
                )}
                {watch.first_air_date && (
                <tr className="mb-2">
                  <td className="colspan-2">Release date</td>
                  <td><span className="ml-2">{watch.first_air_date}</span></td>
                </tr>
                )}
                {productionCompanies && (
                <tr className="mb-2">
                  <td className="colspan-2">Production</td>
                  <td>
                    {
                        productionCompanies.map((prod) => <span className="ml-2" key={uuidv4()}>{prod.name}</span>)
                      }
                  </td>
                </tr>
                )}
                {watch.tagline && (
                <tr className="mb-2">
                  <td className="colspan-2">Tagline</td>
                  <td><span className="ml-2">{watch.tagline}</span></td>
                </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="col-span-12 md:col-span-3">
            { type === 'movie' && <MovieHeader />}
            { (type === 'tv' && seasons) && <SeriesHeader seasons={watch.seasons} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchShow;
