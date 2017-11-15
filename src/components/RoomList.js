import React from "react";
import RoomCard from "./RoomCard";

export default class RoomList extends React.Component {
  roomCheck = (room, userId) => {
    return !!room.users.find(user => user.id === parseInt(userId));
  };

  render() {
    const regex = new RegExp(this.props.search, "i");
    const filteredRooms = this.props.rooms.filter(room =>
      room.name.match(regex)
    );
    console.log(filteredRooms);
    return (
      <div className="child-container-content rooms">
        {filteredRooms.map(room => (
          <RoomCard
            joined={this.roomCheck(room, this.props.userId)}
            name={room.name}
            avatar={room.avatar}
            id={room.id}
            onLeaveRoom={this.props.onLeaveRoom}
            onJoinRoom={this.props.onJoinRoom}
          />
        ))}
      </div>
    );
  }
}
