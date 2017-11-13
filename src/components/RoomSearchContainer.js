import React from "react";
import Search from "./Search";
import { getRooms, createRoom, userLeaveRoom, joinRoom } from "../services/api";
import RoomList from "./RoomList";
import RoomForm from "./RoomForm";

export default class RoomSearchContainer extends React.Component {
  state = {
    rooms: [],
    search: "",
    addNewRoom: false
  };

  showAllRooms = () => {
    getRooms().then(rooms =>
      this.setState({
        rooms
      })
    );
  };

  handleLeaveRoom = roomId => {
    userLeaveRoom(this.props.id, roomId).then(json => this.showAllRooms());
  };

  handleJoinRoom = roomId => {
    const postData = { user_id: this.props.id, room_id: roomId };
    joinRoom(this.props.id, roomId, postData).then(json => {
      console.log(json);
      this.showAllRooms();
    });
  };

  componentDidMount() {
    this.showAllRooms();
  }

  handleChange = term => {
    this.setState({ search: term });
  };

  addNewRoom = () => {
    this.setState({ addNewRoom: !this.state.addNewRoom });
  };

  handleRoomFormSubmit = (name, avatar) => {
    createRoom(this.props.id, { name, avatar }).then(json => {
      console.log(json);
      this.setState({ addNewRoom: !this.state.addNewRoom });
      this.showAllRooms();
    });
  };

  render() {
    console.log("hit container", this.state.search);
    const newRoomForm = this.state.addNewRoom ? (
      <RoomForm onRoomFormSubmit={this.handleRoomFormSubmit} />
    ) : null;
    return (
      <div>
        <h1>Find A Room</h1>
        <Search onChange={this.handleChange} search={this.state.search} />
        <input type="button" value="Add New Room" onClick={this.addNewRoom} />
        {newRoomForm}
        <RoomList
          userId={this.props.id}
          search={this.state.search}
          rooms={this.state.rooms}
          userRooms={this.props.rooms}
          onLeaveRoom={this.handleLeaveRoom}
          onJoinRoom={this.handleJoinRoom}
        />
      </div>
    );
  }
}
