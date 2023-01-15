import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
} from '@fortawesome/fontawesome-svg-core/import.macro';
import Register from './Register';
import Login from './Login';

const Modal = ({ setIsOpen }) => {
  const [register, setRegister] = useState(false);

  return (
    <div
      className="fixed inset-0 bg-slate-300 bg-opacity-95 overflow-y-auto h-full w-full"
      id="my-modal"
    >
      <div
        className="relative top-20 mx-auto p-5 border-0 w-80 md:w-96 shadow-lg rounded-md bg-movie-black"
      >
        <div>
          <button
            type="button"
            className="absolute text-white -right-3 -top-5 bg-teal-500 p-3 rounded-full shadow-sm"
            onClick={() => setIsOpen(false)}
          >
            <FontAwesomeIcon icon={solid('times')} size="2x" />
          </button>
        </div>
        <div className="mt-3 text-left">
          {
            register ? <Register setRegister={setRegister} />
              : (
                <Login
                  setRegister={setRegister}
                  setIsOpen={setIsOpen}
                />
              )
          }
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

export default Modal;
