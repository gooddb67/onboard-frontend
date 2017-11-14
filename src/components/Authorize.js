import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export function authorize(RenderedComponent) {
  return class extends Component {
    loggedIn() {
      return !!localStorage.getItem("jwtToken");
    }

    render() {
      console.log("HOC props", this.props);

      const { pathname } = this.props.location;
      if (
        (this.loggedIn() && pathname == "/login") ||
        (this.loggedIn() && pathname == "/signup")
      ) {
        console.log("I am logged in", this.loggedIn());
        return <Redirect to="/" />;
      } else if (!this.loggedIn() && pathname == "/signup") {
        console.log("in signup");
        return (
          <div>
            <RenderedComponent {...this.props} />
          </div>
        );
      } else if (!this.loggedIn() && pathname !== "/login") {
        console.log("I am not logged in");
        return <Redirect to="/login" />;
      } else {
        console.log("other login case");
        return (
          <div>
            <RenderedComponent {...this.props} />
          </div>
        );
      }
    }
  };
}
