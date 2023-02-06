import React, { useEffect } from 'react';
import 'tw-elements';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
} from '@fortawesome/fontawesome-svg-core/import.macro';
import { useSelector, useDispatch } from 'react-redux';
import { featuredMoviesThunk } from '../redux/slices/featuredSlice';

const Carousel = () => {
  const dispatch = useDispatch();
  const { featured } = useSelector((state) => state.featured);

  const URL = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    if (Object.keys(featured).length === 0) {
      dispatch(featuredMoviesThunk());
    }
  }, [featured]);

  const { results } = featured;
  const movies = results.slice(0, 9);

  return (
    <div
      id="carouselDarkVariant"
      className="carousel slide carousel-fade carousel-dark relative"
      data-bs-ride="carousel"
    >

      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        {
            movies.map((show, index) => (
              <button
                type="button"
                key={uuidv4()}
                data-bs-target="#carouselDarkVariant"
                data-bs-slide-to={`${index + 1}`}
                aria-label={`Slide ${index + 1}`}
              />
            ))
        }
      </div>

      <div className="carousel-inner relative h-48 md:h-128 w-full overflow-hidden">
        {
        movies.map((show, index) => {
          const classVal = (index === 0) ? 'active' : '';
          return (
            <div
              className={`carousel-item ${classVal} relative float-left h-full w-full`}
              key={uuidv4()}
              style={{
                backgroundImage: `url(${URL}${show.backdrop_path})`,
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              <div className="carousel-caption hidden md:block absolute flex-start text-white">
                <h2 className="text-movie-green font-black text-4xl">{show.title || show.original_title || show.name }</h2>
                <p className="text-white text-gray-400">{show.overview}</p>
                <div className="flex mt-5 mb-4">
                  <button
                    type="button"
                    className="p-2 px-5 rounded-full border border-movie-green text-movie-green font-bold hover:bg-movie-green hover:text-black"
                  >
                    <FontAwesomeIcon icon={solid('play')} size="lg" />
                    {' '}
                    Watch now
                  </button>
                  <button
                    type="button"
                    className="p-2 px-5 rounded-full border border-text-white ml-3 text-white font-bold hover:bg-white hover:text-black"
                  >
                    <FontAwesomeIcon icon={solid('heart')} size="lg" />
                    {' '}
                    Add to list
                  </button>
                </div>
              </div>
            </div>
          );
        })
      }
      </div>

      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselDarkVariant"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselDarkVariant"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
