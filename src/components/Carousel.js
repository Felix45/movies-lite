import React, { useEffect } from 'react';
import 'tw-elements';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid, regular,
} from '@fortawesome/fontawesome-svg-core/import.macro';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGenreThunk } from '../redux/slices/genreSlice';
import { featuredMoviesThunk } from '../redux/slices/featuredSlice';

const Carousel = ({ setIsOpen }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { genre } = useSelector((state) => state.genre);
  const { featured } = useSelector((state) => state.featured);

  const URL = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    const timer = setInterval(
      () => {
        dispatch(featuredMoviesThunk()).then(() => dispatch(fetchGenreThunk()));
      }, 120000,
    );

    return () => clearInterval(timer);
  }, [featured, genre]);

  const handleWishList = () => {
    if (!user.isLoggedIn) {
      setIsOpen(true);
    }
  };

  const { results } = featured;
  const movies = Array.isArray(results) ? results.slice(0, 9) : [];

  return (
    <div
      id="carouselDarkVariant"
      className="carousel slide carousel-fade carousel-dark relative"
      data-bs-ride="carousel"
    >

      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        {
            movies.map((show, index) => {
              const aria = index === 0 ? 'true' : 'false';
              const className = index === 0 ? 'active' : '';
              return (
                <button
                  type="button"
                  key={uuidv4()}
                  className={`${className}`}
                  aria-current={aria}
                  data-bs-target="#carouselDarkVariant"
                  data-bs-slide-to={`${index}`}
                  aria-label={`Slide ${index + 1}`}
                />
              );
            })
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
              <div className="container mx-auto mt-40">
                <div className="carousel-caption hidden md:block flex-start mt-80 text-white">
                  <h2 className="text-movie-green font-black text-4xl">{show.title || show.original_title || show.name }</h2>
                  <ul className="flex my-2 font-bold">
                    <li><span className="bg-movie-green text white p-1 px-2 rounded text-sm">HD</span></li>
                    <li className="text-white">
                      <FontAwesomeIcon icon={solid('star')} className="mx-2" size="lg" />
                      {show.vote_average.toFixed(2)}
                    </li>
                    <li className="flex ml-2 text-white">
                      <ul className="flex">
                        {
                        show.genre_ids.map((id) => <li key={uuidv4()} className="ml-2">{genre[id]}</li>)
                      }
                      </ul>
                    </li>
                  </ul>
                  <p className="text-white text-white">{show.overview}</p>
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
                      onClick={handleWishList}
                      className="p-2 px-5 rounded-full border border-text-white ml-3 text-white font-bold hover:bg-white hover:text-black"
                    >
                      <FontAwesomeIcon icon={regular('heart')} size="lg" />
                      {' '}
                      Add to wishlist
                    </button>
                  </div>
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

Carousel.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

export default Carousel;
