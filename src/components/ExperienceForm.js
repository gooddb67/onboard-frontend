import React from "react";
import InputTextBox from "./InputTextBox";
import Checkbox from "./Checkbox";

export default class ExperienceForm extends React.Component {
  render() {
    console.log("hit here", this.props.currentJob);
    const endDateInput = this.props.currentJob ? null : (
      <div>
        <input
          id="enddate"
          type="date"
          value={this.props.formInfo.enddate}
          currentJob={this.props.currentJob}
          onChange={e => {
            this.props.handleChange(e.target.id, e.target.value);
          }}
        />
      </div>
    );
    return (
      <div>
        <form class="form">
          <h1>Most Recent Experience</h1>
          <br />
          <InputTextBox
            id="company"
            value={this.props.formInfo.company}
            onChange={this.props.handleChange}
            placeholder="Company"
          />
          <br />
          <InputTextBox
            id="title"
            value={this.props.formInfo.title}
            onChange={this.props.handleChange}
            placeholder="Title"
          />
          <br />
          <input
            id="startdate"
            type="date"
            value={this.props.formInfo.startdate}
            onChange={e => {
              this.props.handleChange(e.target.id, e.target.value);
            }}
          />
          <br />

          {endDateInput}
          <br />
          <div className="checkbox">
            <label htmlFor="current">I currently work here!</label>
            <Checkbox
              id="current"
              value={this.props.formInfo.current}
              onChange={this.props.handleChange}
            />
          </div>
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
