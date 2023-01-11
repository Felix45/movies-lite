import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
} from '@fortawesome/fontawesome-svg-core/import.macro';
import logo from '../images/logo.png';

const Navbar = () => (
  <nav className="flex items-center justify-between flex-wrap bg-black p-6">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <img width="137" viewBox="0 0 54 54" src={logo} alt="Movies Logo" />
    </div>
    <div className="block lg:hidden">
      <button type="button" className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <FontAwesomeIcon icon={solid('list-ul')} size="2x" />
      </button>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow">
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
        <form className="flex bg-slate-300 flex-row-reverse relative rounded-full no-focus">
          <input type="text" className="form-input bg-slate-300 pr-4 pl-2 py-2 rounded-full" placeholder="Enter your keywords..." autoComplete="off" />
          <button type="button" className="relative bg-slate-300 text-slate-400 px-4 pr-0 rounded-full">
            <FontAwesomeIcon icon={solid('search')} size="lg" />
          </button>
        </form>
      </div>
      <div>
        <a href="/" className="flex items-center inline-block text-sm px-4 py-2 leading-none text-white border-white hover:border-transparent mt-4 lg:mt-0">
          <FontAwesomeIcon icon={solid('user-circle')} size="2x" />
          <span className="ml-2"> Login / Register</span>
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
