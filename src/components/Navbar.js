import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="navbar">
    <h1>Math Magicians</h1>
    <div className="nav">
      <Link to="/">Home </Link>
      <Link to="/App">Calculator </Link>
      <Link to="/Quote">Quote </Link>
    </div>
  </div>
);

export default NavBar;
