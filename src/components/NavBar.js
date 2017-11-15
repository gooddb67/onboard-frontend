import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(props) {
  const showNavBar = props.loggedIn ? (
    <ul className="navbar" style={ulStyle}>
      <li style={liStyleLeft}>
        <NavLink exact to="/" style={linkStyle}>
          Home
        </NavLink>
      </li>
      <li style={liStyleLeft}>
        <NavLink exact to={`/users/${props.userId}`} style={linkStyle}>
          My Rooms
        </NavLink>
      </li>

      <li style={liStyleRight}>
        <NavLink to="/logout" style={linkStyle}>
          Log Out
        </NavLink>
      </li>
    </ul>
  ) : (
    <ul className="navbar" style={ulStyle}>
      <li style={liStyleLeft}>
        <NavLink exact to="/" style={linkStyle}>
          Home
        </NavLink>
      </li>
      <li style={liStyleRight}>
        <NavLink to="/signup" style={linkStyle}>
          Sign Up
        </NavLink>
      </li>
      <li style={liStyleRight}>
        <NavLink to="/login" style={linkStyle}>
          Log In
        </NavLink>
      </li>
    </ul>
  );

  return showNavBar;
}

const liStyleLeft = {
  float: "left"
};

const liStyleRight = {
  float: "right"
};

const ulStyle = {
  backgroundColor: "#20c8a6",
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
