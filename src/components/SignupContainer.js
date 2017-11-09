import React from "react";
import BasicInfoForm from "./BasicInfoForm";

export default class SignupContainer extends React.Component {
  state = {
    email: "",
    name: "",
    password: "",
    avatar: "",
    admin: false
  };

  handleFirstFormSubmit = event => {
    console.log(event);
  };

  handleChange = (id, value) => {
    console.log(id, value);
    switch (id) {
      case "email":
        this.setState({ email: value });
        break;
      case "name":
        this.setState({ name: value });
        break;
      case "password":
        this.setState({ password: value });
        break;
      case "avatar":
        this.setState({ avatar: value });
        break;
      case "admin":
        this.setState({ admin: value });
        break;
    }
  };

  render() {
    return (
      <div>
        <BasicInfoForm
          onFirstFormSubmit={this.handleFirstFormSubmit}
          handleChange={this.handleChange}
          formInfo={{
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            avatar: this.state.avatar,
            admin: this.state.admin
          }}
        />
      </div>
    );
  }
}
