import React from "react";
import HomeNavBar from "./HomeNavBar";
import { Route } from "react-router-dom";
import InterviewPage from "./pages/InterviewPage";

export default class HomeRoomContainer extends React.Component {
  render() {
    console.log("home container", this.props);
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
      </div>
    );
  }
}
