import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <p></p>
      <Link to="/">Home</Link>
      <Link to="/login">login</Link>
      <Link to="/register">register</Link>
    </header>
  );
};

export default Header;
