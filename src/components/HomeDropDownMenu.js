import React from "react";
import { NavLink } from "react-router-dom";

const style = {
  textDecoration: "none",
  padding: "20px 20px"
};

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
function HomeDropDownMenu(props) {
  return (
    <li style={liStyleLeft}>
      <div className="dropdown">
        <div className="dropbtn">Actions</div>
        <div className="dropdown-content">
          <NavLink
            to={`/users/${props.userId}/rooms/${props.roomId}/interviews`}
            style={style}
          >
            Interviews
          </NavLink>

          <NavLink
            to={`/users/${props.userId}/rooms/${props.roomId}/alumni`}
            style={style}
          >
            Alumni Page
          </NavLink>
          <NavLink
            to={`/users/${props.userId}/rooms/${props.roomId}/projects`}
            style={style}
          >
            Project Board
          </NavLink>
          <NavLink
            to={`/users/${props.userId}/rooms/${props.roomId}/jobs`}
            style={style}
          >
            Job Board
          </NavLink>
          <NavLink
            to={`/users/${props.userId}/rooms/${props.roomId}/resume`}
            style={style}
          >
            Resume Review
          </NavLink>
        </div>
      </div>
    </li>
  );
}

export default HomeDropDownMenu;
