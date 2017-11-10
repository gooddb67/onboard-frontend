import React from "react";
import { NavLink } from "react-router-dom";

const style = {
  textDecoration: "none",
  padding: "20px 20px"
};
function HomeNavBar(props) {
  return (
    <div>
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
  );
}

export default HomeNavBar;
