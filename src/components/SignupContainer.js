import React from "react";
import BasicInfoForm from "./BasicInfoForm";
import ExperienceForm from "./ExperienceForm";

export default class SignupContainer extends React.Component {
  state = {
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
    current: false,
    onFirstForm: true,
    onSecondForm: false
  };

  handleFirstFormSubmit = event => {
    this.setState({ onFirstForm: false });
  };

  handleSecondFormSubmit = event => {
    console.log(this.state);
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
      case "alum":
        this.setState({ alum: value });
        break;
      case "company":
        this.setState({ company: value });
        break;
      case "title":
        this.setState({ title: value });
        break;
      case "startdate":
        this.setState({ startdate: value });
        break;
      case "enddate":
        this.setState({ enddate: value });
        break;
      case "current":
        this.setState({ current: value });
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
