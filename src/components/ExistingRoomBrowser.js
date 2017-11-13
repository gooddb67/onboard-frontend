import React from "react";
import { Link } from "react-router-dom";
import HomeRoomCard from "./HomeRoomCard";
import MdAdd from 'react-icons/lib/md/add'

export default class ExistingRoomBrowser extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="grid-container">
          {this.props.rooms.map(room => (
            <HomeRoomCard room={room} userId={this.props.id} />
          ))}
          <div className="add-room">
            <MdAdd className="add-icon" width="100" height="100%"/>
            <Link id="add-room-text" to={`/users/${this.props.id}/rooms`}>Add Room</Link>
          </div>

          <br />
        </div>
    </div>
    );
  }
}
