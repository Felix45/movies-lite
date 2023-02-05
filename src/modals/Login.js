import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { userSignInThunk } from '../redux/slices/authSlice';

const Login = ({ setRegister, setIsOpen }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length !== 0 && password.length !== 0) {
      dispatch(userSignInThunk({ email, password })).then((data) => {
        if (data.payload.isLoggedIn) {
          setEmail('');
          setPassword('');
          setIsOpen(false);
        }
      });
    }
  };

  return (
    <div className="items-center px-4 py-3">
      <h3 className="text-lg leading-6 font-medium text-white mb-5">Sign In</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            className="form-input bg-white pr-4 pl-2 py-2 w-full rounded-md outline-none mb-5"
            placeholder="Enter email..."
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="hidden bg-red-100 border text-red-500 px-4 py-1 -mt-2 mb-3 rounded relative" role="alert">
            <span className="block sm:inline">Please enter valid email</span>
          </div>
        </div>
        <div>
          <input
            type="password"
            className="form-input bg-white pr-4 pl-2 py-2 w-full rounded-md outline-none mb-5"
            placeholder="Enter password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
            required
          />
          <div className="hidden bg-red-100 border text-red-500 px-4 py-1 -mt-2 mb-3 rounded relative" role="alert">
            <span className="block sm:inline">Please enter password</span>
          </div>
        </div>
        <button
          id="ok-btn"
          type="submit"
          className="px-4 py-2 bg-teal-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-teal-500"
        >
          Login
        </button>
      </form>
      <div className="mt-0 px-0 py-3">
        <p className="text-sm text-left text-movie-gray">
          Dont have an account?
          <button type="button" onClick={() => setRegister(true)} className="text-teal-500 ml-2">
            Sign Up
          </button>
        </p>
        {
          'isLoggedIn' in user && !user.isLoggedIn && (
          <div className="bg-red-100 border text-red-500 rounded-md px-4 py-2 mt-2 mb-3 relative" role="alert">
            <span className="block sm:inline text-sm">please provide a valid email & password</span>
          </div>
          )
        }
      </div>
    </div>
  );
};

Login.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  setRegister: PropTypes.func.isRequired,
};

export default Login;
