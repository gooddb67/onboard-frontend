import React from "react";
import { NavLink } from "react-router-dom";

export default class HomeRoomButtons extends React.Component {
  render() {
    return (
      <div className="panels">
        <div className="panel panel1">
          <NavLink
            to={`/users/${this.props.userId}/rooms/${this.props.roomId}/jobs`}
          >
            Jobs
          </NavLink>
        </div>
        <div className="panel panel2">
          <NavLink
            to={`/users/${this.props.userId}/rooms/${this.props
              .roomId}/interviews`}
          >
            Interviews
          </NavLink>
        </div>
        <div className="panel panel3">
          <NavLink
            to={`/users/${this.props.userId}/rooms/${this.props.roomId}/alumni`}
          >
            Alumni
          </NavLink>
        </div>
        <div className="panel panel4">
          <NavLink
            to={`/users/${this.props.userId}/rooms/${this.props
              .roomId}/projects`}
          >
            Projects
          </NavLink>
        </div>
        <div className="panel panel5">
          <NavLink
            to={`/users/${this.props.userId}/rooms/${this.props
              .roomId}/resumes`}
          >
            Resume <br />Review
          </NavLink>
        </div>
      </div>
    );
  }
}
