import React from "react";
import { Link } from "react-router-dom";

export default class HomeRoomCard extends React.Component {
  render() {
    console.log(this.props.room);
    return (
      <div className="room-card" key={this.props.room.id}>
        <Link
          className="room-card-text"
          to={`/users/${this.props.userId}/rooms/${this.props.room.id}`}
        >
          <img src={this.props.room.avatar} alt="" />
          <p>{this.props.room.name}</p>
        </Link>
      </div>
    );
  }
}
