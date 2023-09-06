import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
} from '@fortawesome/fontawesome-svg-core/import.macro';
import logo from '../images/logo.png';
import { logout } from '../redux/slices/authSlice';

const Navbar = ({ setIsOpen }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-black p-4">
      <div className="flex items-center flex-shrink-0 order-2 text-white md:hidden md:mr-6 lg:block">
        <NavLink to="/">
          <img width="137" src={logo} alt="Movies Logo" />
        </NavLink>
      </div>
      <div className="block lg:hidden order-1">
        <button type="button" className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <FontAwesomeIcon icon={solid('list-ul')} size="2x" />
        </button>
      </div>
      <div className="lg:w-full lg:block lg:flex-grow lg:flex lg:items-center lg:w-auto order-3">
        <div className="hidden text-sm lg:block lg:flex-grow">
          <NavLink to="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8">
            Home
          </NavLink>
          <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8">
            Genre
          </a>
          <NavLink to="/movies" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8">
            Movies
          </NavLink>
          <NavLink to="/tv-series" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8">
            TV-Series
          </NavLink>
          <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8">
            Top IMb
          </a>
        </div>
        <div>
          <form className="hidden lg:flex bg-slate-300 flex-row-reverse relative rounded-full no-focus">
            <input type="text" className="form-input bg-slate-300 pr-4 pl-2 py-2 outline-none rounded-full" placeholder="Enter your keywords..." autoComplete="off" />
            <button type="button" className="relative bg-slate-300 text-slate-400 px-4 pr-0 rounded-full">
              <FontAwesomeIcon icon={solid('search')} size="lg" />
            </button>
          </form>
        </div>
        <div className="flex items-center">
          <button type="button" className="lg:hidden text-slate-400 px-4 pr-0 rounded-full">
            <FontAwesomeIcon icon={solid('search')} size="2x" />
          </button>
          <div className="flex md:items-center inline-block text-sm px-4 py-0 leading-none text-white border-white hover:border-transparent lg:mt-0">
            <span className="hidden md:block mx-1">{user.username}</span>
            { !user.isLoggedIn ? (
              <FontAwesomeIcon className="lg:hidden mr-2" onClick={() => { setIsOpen(true); }} icon={solid('sign-in')} size="2x" />)
              : (<FontAwesomeIcon className="lg:hidden mr-2" onClick={handleLogout} icon={solid('user-circle')} size="3x" />)}
            <FontAwesomeIcon className="hidden lg:block" icon={solid('user-circle')} size="2x" />
            {
              user.isLoggedIn ? (
                <div className="flex">
                  <button type="button" className="hidden xl:block ml-2" onClick={handleLogout}> Logout </button>
                </div>
              )
                : <button type="button" className="hidden xl:block ml-2" onClick={() => { setIsOpen(true); }}> Login / Register</button>
            }
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

export default Navbar;
