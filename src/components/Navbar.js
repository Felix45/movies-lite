import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
} from '@fortawesome/fontawesome-svg-core/import.macro';
import logo from '../images/logo.png';

const Navbar = ({ setIsOpen }) => (
  <nav className="flex items-center justify-between flex-wrap bg-black p-4">
    <div className="flex items-center flex-shrink-0 order-2 text-white md:mr-6">
      <img width="137" src={logo} alt="Movies Logo" />
    </div>
    <div className="block lg:hidden order-1">
      <button type="button" className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <FontAwesomeIcon icon={solid('list-ul')} size="2x" />
      </button>
    </div>
    <div className="md:w-full md:block md:flex-grow lg:flex lg:items-center lg:w-auto order-3">
      <div className="hidden md:block text-sm lg:flex-grow">
        <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8">
          Home
        </a>
        <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8">
          Genre
        </a>
        <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8">
          Country
        </a>
        <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8">
          Movies
        </a>
        <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8">
          TV-Series
        </a>
        <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8">
          Top IMb
        </a>
      </div>
      <div>
        <form className="hidden md:flex bg-slate-300 flex-row-reverse relative rounded-full no-focus">
          <input type="text" className="form-input bg-slate-300 pr-4 pl-2 py-2 outline-none rounded-full" placeholder="Enter your keywords..." autoComplete="off" />
          <button type="button" className="relative bg-slate-300 text-slate-400 px-4 pr-0 rounded-full">
            <FontAwesomeIcon icon={solid('search')} size="lg" />
          </button>
        </form>
      </div>
      <div className="flex items-center">
        <button type="button" className="md:hidden text-slate-400 px-4 pr-0 rounded-full">
          <FontAwesomeIcon icon={solid('search')} size="2x" />
        </button>
        <div className="flex md:items-center inline-block text-sm px-4 py-2 leading-none text-white border-white hover:border-transparent md:mt-4 lg:mt-0">
          <FontAwesomeIcon icon={solid('user-circle')} onClick={() => { setIsOpen(true); }} size="2x" />
          <button type="button" className="hidden md:block ml-2" onClick={() => { setIsOpen(true); }}> Login / Register</button>
        </div>
      </div>
    </div>
  </nav>
);

Navbar.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

export default Navbar;
