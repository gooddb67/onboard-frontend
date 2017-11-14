import React from "react";
import RoomSearchContainer from "./RoomSearchContainer";
import ExistingRoomBrowser from "./ExistingRoomBrowser";
import { Route, Switch } from "react-router-dom";
import { getUsers } from "../services/api";
import HomeRoomContainer from "./HomeRoomContainer";

export default class UserShow extends React.Component {
  state = {
    addRoom: false,
    rooms: []
  };

  handleClick = () => {
    this.setState({ addRoom: true });
  };

  findUserById = (users, id) => {
    return users.find(user => user.id === parseInt(id));
  };

  componentDidMount() {
    // fetch("http://localhost:3000/api/v1/users")
    //   .then(res => console.log(res.json()))
    //   .then(users => {
    //     console.log(users);
    //     const user_id = this.props.match.params.user_id;
    //     const user = this.findUserById(users, user_id);
    //     const rooms = user.rooms;
    //     this.setState({ rooms });
    //   });

    getUsers().then(users => {
      console.log(users);
      const user_id = this.props.match.params.user_id;
      const user = this.findUserById(users, user_id);
      const rooms = user.rooms;
      this.setState({ rooms });
    });
  }

  render() {
    const user_id = this.props.match.params.user_id;
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/users/:user_id"
            render={() => (
              <ExistingRoomBrowser
                id={user_id}
                rooms={this.state.rooms}
                onClick={this.handleClick}
              />
            )}
          />
          <Route
            path="/users/:user_id/rooms/:room_id"
            render={props => {
              console.log(props, "LSDN");
              return <HomeRoomContainer {...props} />;
            }}
          />
          <Route
            path="/users/:user_id/rooms"
            render={() => (
              <RoomSearchContainer id={user_id} rooms={this.state.rooms} />
            )}
          />
        </Switch>
      </div>
    );
  }
}
