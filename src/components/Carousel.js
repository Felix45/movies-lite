import React, { useEffect } from 'react';
import { Carousel, initTE } from 'tw-elements';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid, regular,
} from '@fortawesome/fontawesome-svg-core/import.macro';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGenreThunk } from '../redux/slices/genreSlice';
import { featuredMoviesThunk } from '../redux/slices/featuredSlice';

const HomeCarousel = ({ setIsOpen }) => {
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

  initTE({ Carousel });

  return (
    <div
      id="carouselDarkVariant"
      className="relative"
      data-te-carousel-init
      data-te-ride="carousel"
    >

      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 z-10 md:bottom-3 lg:bottom-5" data-te-carousel-indicators>
        {
            movies.map((show, index) => {
              const aria = index === 0 ? 'true' : 'false';
              const active = index === 0 ? { 'data-te-carousel-active': true } : {};

              return (
                <button
                  type="button"
                  key={uuidv4()}
                  aria-current={aria}
                  aria-label={`Slide ${index + 1}`}
                  data-te-target="#carouselDarkVariant"
                  data-te-slide-to={`${index}`}
                  {...active}
                  className="bg-movie-green mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                />
              );
            })
        }
      </div>

      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-[''] h-48 md:h-96 lg:h-100 xl:h-128">
        {
        movies.map((show, index) => {
          const classVal = (index === 0) ? { 'data-te-carousel-active': true } : {};
          return (
            <div
              className="relative float-left -mr-[100%] w-full h-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
              key={uuidv4()}
              style={{
                backgroundImage: `url(${URL}${show.backdrop_path})`,
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
              data-te-carousel-fade
              data-te-carousel-item
              {...classVal}
            >
              <div className="container mx-auto ml-40 mt-40 md:mt-10 lg:mt-20 xl:mt-40">
                <div className="carousel-caption hidden flex-start mt-60 text-white md:block md:mt-0">
                  <h2 className="text-movie-green font-black text-4xl mb-4">{show.title || show.original_title || show.name }</h2>
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
                  <p className="text-white text-white md:w-1/2">{show.overview}</p>
                  <div className="flex mt-5 mb-4">
                    <NavLink
                      to={`/watch/${show.media_type}/${show.id}`}
                      className="p-2 px-5 rounded-full border border-movie-green text-movie-green font-bold hover:bg-movie-green hover:text-black"
                    >
                      <FontAwesomeIcon icon={solid('play')} size="lg" />
                      {' '}
                      Watch now
                    </NavLink>
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
        data-te-target="#carouselDarkVariant"
        data-te-slide="prev"
      >
        <span className="inline-block h-8 w-8 dark:grayscale z-10 text-movie-green ml-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
      </button>
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselDarkVariant"
        data-te-slide="next"
      >
        <span className="inline-block h-8 w-8 dark:grayscale z-10 text-movie-green mr-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >
          Next
        </span>
      </button>
    </div>
  );
};

HomeCarousel.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

export default HomeCarousel;
