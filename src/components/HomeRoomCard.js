import React from "react";
import { Link } from "react-router-dom";

export default class HomeRoomCard extends React.Component {
  render() {
    console.log(this.props.room);
    return (
      <div key={this.props.room.id}>
        <Link to={`/users/${this.props.userId}/rooms/${this.props.room.id}`}>
          {this.props.room.name}
        </Link>
      </div>
    );
  }
}
