import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(props) {
  return (
    <ul className="navbar" style={ulStyle}>
      <li style={liStyle}>
        <NavLink exact to="/" style={linkStyle}>
          Home
        </NavLink>
      </li>
      <li style={liStyle}>
        <NavLink to="/login" style={linkStyle}>
          Log In
        </NavLink>
      </li>
      <li style={liStyle}>
        <NavLink to="/signup" style={linkStyle}>
          Sign Up
        </NavLink>
      </li>
    </ul>
  );
}

const liStyle = {
  float: "left"
};

const ulStyle = {
  backgroundColor: "#2ae0bb",
  fontFamily: "Lato",
  margin: "0",
  padding: "0",
  overflow: "hidden",
  listStyleType: "none"
};

const linkStyle = {
  display: "block",
  textAlign: "center",
  padding: "15px",
  textDecoration: "none",
  color: "#f7fcfa",
  fontSize: "18px"
};

export default NavBar;
