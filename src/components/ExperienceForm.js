import React from "react";
import InputTextBox from "./InputTextBox";
import Checkbox from "./Checkbox";

export default class ExperienceForm extends React.Component {
  render() {
    console.log("hit here", this.props.currentJob);
    const endDateInput = this.props.currentJob ? null : (
      <input
        id="enddate"
        type="date"
        value={this.props.formInfo.enddate}
        currentJob={this.props.currentJob}
        onChange={e => {
          this.props.handleChange(e.target.id, e.target.value);
        }}
      />
    );
    return (
      <div>
        <h1>Sign Up</h1>
        <h3>Most Recent Experience</h3>
        <hr />
        <form action="">
          <label htmlFor="alum">Are you an alumni?</label>
          <Checkbox
            id="alum"
            value={this.props.formInfo.alum}
            onChange={this.props.handleChange}
          />
          <br />
          <hr />
          <h3>Most Recent Job Experience</h3>
          <label htmlFor="company">Company: </label>
          <InputTextBox
            id="company"
            value={this.props.formInfo.company}
            onChange={this.props.handleChange}
          />
          <br />
          <label htmlFor="title">Title: </label>
          <InputTextBox
            id="title"
            value={this.props.formInfo.title}
            onChange={this.props.handleChange}
          />
          <br />
          <label htmlFor="startdate">Start Date: </label>
          <input
            id="startdate"
            type="date"
            value={this.props.formInfo.startdate}
            onChange={e => {
              this.props.handleChange(e.target.id, e.target.value);
            }}
          />
          <br />
          <label htmlFor="enddate">End Date: </label>
          {endDateInput}
          <br />
          <label htmlFor="current">I currently work here!</label>
          <Checkbox
            id="current"
            value={this.props.formInfo.current}
            onChange={this.props.handleChange}
          />
          <br />
          <br />
          <input
            type="button"
            value="Create"
            onClick={e => {
              this.props.onSecondFormSubmit(e.target);
            }}
          />
        </form>
      </div>
    );
  }
}
