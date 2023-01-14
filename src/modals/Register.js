import React from 'react';
import PropTypes from 'prop-types';

const Register = ({ setRegister }) => (
  <div className="items-center px-4 py-3">
    <h3 className="text-lg leading-6 font-medium text-white mb-5">Sign Up</h3>
    <form>
      <div>
        <input type="text" className="form-input bg-white pr-4 pl-2 py-2 w-full rounded-md outline-none mb-5" placeholder="Enter name..." autoComplete="off" />
      </div>
      <div>
        <input type="email" className="form-input bg-white pr-4 pl-2 py-2 w-full rounded-md outline-none mb-5" placeholder="Enter email..." autoComplete="off" />
      </div>
      <div>
        <input type="password" className="form-input bg-white pr-4 pl-2 py-2 w-full rounded-md outline-none mb-5" placeholder="Enter password..." autoComplete="off" />
      </div>
      <div>
        <input type="password" className="form-input bg-white pr-4 pl-2 py-2 w-full rounded-md outline-none mb-5" placeholder="Confirm password..." autoComplete="off" />
      </div>
      <button
        id="ok-btn"
        type="submit"
        className="px-4 py-2 bg-teal-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-teal-500"
      >
        Register
      </button>
    </form>
    <div className="mt-0 px-0 py-3">
      <p className="text-sm text-left text-movie-gray">
        Already have an account?
        <button type="button" onClick={() => { setRegister(false); }} className="text-teal-500 ml-2">Login</button>
      </p>
    </div>
  </div>
);

Register.propTypes = {
  setRegister: PropTypes.func.isRequired,
};

export default Register;
