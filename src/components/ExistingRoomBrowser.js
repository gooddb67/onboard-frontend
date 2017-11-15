import React from "react";
import { Link } from "react-router-dom";
import HomeRoomCard from "./HomeRoomCard";
import MdAdd from "react-icons/lib/md/add";

export default class ExistingRoomBrowser extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="empty-container" />
        <div className="child-container-content rooms">
          {this.props.rooms.map(room => (
            <HomeRoomCard room={room} userId={this.props.id} />
          ))}
          <div className="room-card add">
            <Link
              className="room-card-text"
              to={`/users/${this.props.id}/rooms`}
            >
              <i className="material-icons">add_circle_outline</i>
              <p>Add Room</p>
            </Link>
          </div>

          <br />
        </div>
        <div className="empty-container" />
      </div>
    );
  }
}
