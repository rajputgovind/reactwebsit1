import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <>
      <h1>404 Error page</h1>
      <NavLink to='/'>Go to Home page</NavLink>
    </>
  );
}

export default Error;
