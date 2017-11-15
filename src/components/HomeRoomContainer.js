import React from "react";
import HomeNavBar from "./HomeNavBar";
import { Route, Switch } from "react-router-dom";
import InterviewPage from "./pages/InterviewPage";
import AlumniPage from "./pages/AlumniPage";

export default class HomeRoomContainer extends React.Component {
  render() {
    const params = this.props.match.params;
    return (
      <div>
        <HomeNavBar userId={params.user_id} roomId={params.room_id} />

        <Route
          path="/users/:user_id/rooms/:room_id/interviews"
          render={props => {
            return <InterviewPage {...props} />;
          }}
        />
        <Route
          path="/users/:user_id/rooms/:room_id/alumni"
          render={props => {
            return <AlumniPage {...props} />;
          }}
        />
      </div>
    );
  }
}
