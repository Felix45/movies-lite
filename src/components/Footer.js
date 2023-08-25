import React from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import footerText from '../data/footer';
import logo from '../images/logo.png';
import List from './List';

const Footer = () => (
  <footer className="flex flex-row items-center justify-between flex-wrap bg-black text-slate-400 p-4 py-6 my-14">
    <div className="md:w-1/2 flex flex-col items-center md:items-start">
      <NavLink to="/">
        <img src={logo} width="137px" alt="Movies Logo" className="rounded py-2" />
      </NavLink>
      <p className="mt-2 mr-6 text-sm">
        {footerText.description}
      </p>
      <div className="text-white text-sm text-left py-4">
        <a href="https://github.com/felix45" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faCoffee} size="2x" />
          <span className="ml-2">{footerText.twitter}</span>
        </a>
      </div>
      <div className="text-sm py-4 text-movie-gray"><em>{footerText.disclaimer}</em></div>
    </div>
    <div className="md:w-1/2">
      <h3 className="text-white">Links</h3>
      <div className="flex flex-row text-sm text-movie-gray">

        {
        footerText.links.map((link) => <List key={uuidv4()} items={link} />)
      }
      </div>
    </div>
  </footer>
);

export default Footer;
