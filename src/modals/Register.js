import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { userSignInThunk } from '../redux/slices/authSlice';
import { userSignUpThunk } from '../redux/slices/registerSlice';

const Register = ({ setRegister, setIsOpen }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');

  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [registerSuccess, setRegisterSuccess] = useState('');

  const InputValidation = () => {
    if (name.length === 0) {
      setNameError('please enter a valid name');
    } else {
      setNameError('');
    }

    if (password.length === 0 || cpassword.length === 0) {
      setPasswordError('please enter a valid password');
    } else if (password !== cpassword) {
      setPasswordError('password should match confirm password');
    } else {
      setPasswordError('');
    }
  };

  const clearFields = () => {
    setName('');
    setEmail('');
    setPassword('');
    setCpassword('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    InputValidation();
    if (name.length !== 0
        && email.length !== 0
        && password.length !== 0 && cpassword === password) {
      dispatch(userSignUpThunk({
        name, email, password, password_confirmation: cpassword,
      })).then((data) => {
        if (data.payload && data.payload.created_at !== null) {
          clearFields();
          setRegisterSuccess('Registration succesful');
          dispatch(userSignInThunk({ email, password })).then(() => setIsOpen(false));
        } else {
          clearFields();
          setRegisterSuccess('Registration not succesful, try again');
        }
      });
    }
  };

  return (
    <div className="items-center px-4 py-3">
      <h3 className="text-lg leading-6 font-medium text-white mb-5">Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            className="form-input bg-white pr-4 pl-2 py-2 w-full rounded-md outline-none mb-4"
            placeholder="Enter name..."
            value={name}
            onFocus={() => { setNameError(''); }}
            onChange={(e) => { setName(e.target.value); }}
            autoComplete="off"
          />
        </div>
        <div className="text-red-500">
          {nameError}
        </div>
        <div>
          <input
            type="email"
            className="form-input bg-white pr-4 pl-2 py-2 w-full rounded-md outline-none mb-4"
            placeholder="Enter email..."
            autoComplete="off"
            value={email}
            onChange={(e) => { setEmail(e.target.value); }}
          />
        </div>
        <div>
          <input
            type="password"
            className="form-input bg-white pr-4 pl-2 py-2 w-full rounded-md outline-none mb-4"
            placeholder="Enter password..."
            autoComplete="off"
            value={password}
            onFocus={() => { setPasswordError(''); }}
            onChange={(e) => { setPassword(e.target.value); }}
          />
          <div className="text-red-500">
            {passwordError}
          </div>
        </div>
        <div>
          <input
            type="password"
            className="form-input bg-white pr-4 pl-2 py-2 w-full rounded-md outline-none mb-4"
            placeholder="Confirm password..."
            autoComplete="off"
            value={cpassword}
            onFocus={() => { setPasswordError(''); }}
            onChange={(e) => { setCpassword(e.target.value); }}
          />
          <div className="text-red-500">
            {passwordError}
          </div>
        </div>
        <button
          id="ok-btn"
          type="submit"
          onClick={handleSubmit}
          className="px-4 py-2 bg-teal-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-teal-500"
        >
          Register
        </button>
        <div className="text-green-500 rounded-md pl-0 py-2 mt-2 mb-3 relative" role="alert">
          <span className="block sm:inline text-sm">{ registerSuccess }</span>
        </div>
      </form>
      <div className="mt-0 px-0 py-3">
        <p className="text-sm text-left text-movie-gray">
          Already have an account?
          <button type="button" onClick={() => { setRegister(false); }} className="text-teal-500 ml-2">Login</button>
        </p>
      </div>
    </div>
  );
};

Register.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  setRegister: PropTypes.func.isRequired,
};

export default Register;
