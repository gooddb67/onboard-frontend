import React from "react";
import { getRoom } from "../../services/api";
import AlumniList from "./alumni/AlumniList";
import Search from "../Search";

export default class AlumniPage extends React.Component {
  state = {
    users: [],
    search: ""
  };

  componentDidMount() {
    const roomId = this.props.match.params.room_id;
    getRoom(roomId).then(room => {
      const users = room.users;
      this.setState({ users });
    });
  }

  handleChange = term => {
    this.setState({ search: term });
  };
  render() {
    console.log(this.state.users);
    return (
      <div>
        <h1>All Members</h1>
        <Search onChange={this.handleChange} search={this.state.search} />
        <AlumniList users={this.state.users} search={this.state.search} />
      </div>
    );
  }
}
