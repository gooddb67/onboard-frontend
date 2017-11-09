import React from "react";
import BasicInfoForm from "./BasicInfoForm";
import ExperienceForm from "./ExperienceForm";
import { createUser } from "../services/api";

export default class SignupContainer extends React.Component {
  state = {
    user: {
      email: "",
      name: "",
      password: "",
      avatar: "",
      admin: false,
      alum: false,
      company: "",
      title: "",
      startdate: "",
      enddate: "",
      current: false
    },

    onFirstForm: true,
    onSecondForm: false,
    isCurrentJob: false
  };

  handleFirstFormSubmit = event => {
    this.setState({ onFirstForm: false });
  };

  handleSecondFormSubmit = event => {
    createUser(this.state.user);
  };

  handleChange = (id, value) => {
    console.log(id, value);
    switch (id) {
      case "email":
        this.setState({
          user: Object.assign({}, this.state.user, { email: value })
        });
        break;
      case "name":
        this.setState({
          user: Object.assign({}, this.state.user, { name: value })
        });
        break;
      case "password":
        this.setState({
          user: Object.assign({}, this.state.user, { password: value })
        });
        break;
      case "avatar":
        this.setState({
          user: Object.assign({}, this.state.user, { avatar: value })
        });
        break;
      case "admin":
        this.setState({
          user: Object.assign({}, this.state.user, { admin: value })
        });
        break;
      case "alum":
        this.setState({
          user: Object.assign({}, this.state.user, { alum: value })
        });
        break;
      case "company":
        this.setState({
          user: Object.assign({}, this.state.user, { company: value })
        });
        break;
      case "title":
        this.setState({
          user: Object.assign({}, this.state.user, { title: value })
        });
        break;
      case "startdate":
        this.setState({
          user: Object.assign({}, this.state.user, { startdate: value })
        });
        break;
      case "enddate":
        this.setState({
          user: Object.assign({}, this.state.user, { enddate: value })
        });
        break;
      case "current":
        this.setState({
          user: Object.assign({}, this.state.user, { current: value }),
          isCurrentJob: !this.state.isCurrentJob
        });
        break;
    }
  };

  render() {
    const showForm = this.state.onFirstForm ? (
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
    ) : (
      <ExperienceForm
        onSecondFormSubmit={this.handleSecondFormSubmit}
        handleChange={this.handleChange}
        currentJob={this.state.isCurrentJob}
        formInfo={{
          alum: this.state.alum,
          company: this.state.company,
          title: this.state.title,
          startdate: this.state.startdate,
          enddate: this.state.enddate,
          current: this.state.current
        }}
      />
    );
    return <div>{showForm}</div>;
  }
}
