import React from "react";
import InputTextBox from "../../InputTextBox";

export default class CompanyForm extends React.Component {
  state = {
    question: ""
  };

  handleChange = (id, value) => {
    this.setState({ question: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onQuestionFormSubmit(this.state.question);
    this.setState({ question: "" });
  };

  render() {
    return (
      <div className="modal form" style={this.props.modalStyle}>
        <form onSubmit={this.handleSubmit} className="modal-form">
          <span className="close" onClick={this.props.onCloseClick}>
            &times;
          </span>
          <h1>Add A Question</h1>
          <InputTextBox
            id="question"
            value={this.state.name}
            placeholder="Question"
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Create Question" />
        </form>
      </div>
    );
  }
}
