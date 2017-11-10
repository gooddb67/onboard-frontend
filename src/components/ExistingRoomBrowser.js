import React from "react";
import { Link } from "react-router-dom";
import HomeRoomCard from "./HomeRoomCard";

export default class ExistingRoomBrowser extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome Home!</h1>
        {this.props.rooms.map(room => (
          <HomeRoomCard room={room} userId={this.props.id} />
        ))}
        <br />
        <Link to={`/users/${this.props.id}/rooms`}>Add Room</Link>
      </div>
    );
  }
}
