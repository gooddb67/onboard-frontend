import React from "react";
import InputTextBox from "../../InputTextBox";

export default class AnswerForm extends React.Component {
  state = {
    answer: ""
  };

  handleChange = (id, value) => {
    this.setState({ answer: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAnswerFormSubmit(this.state.answer);
    this.setState({ answer: "" });
  };

  render() {
    return (
      <div className="modal form" style={this.props.modalStyle}>
        <form onSubmit={this.handleSubmit} className="modal-form">
          <span className="close" onClick={this.props.onCloseClick}>
            &times;
          </span>
          <h1>Add Answer</h1>
          <InputTextBox
            id="answer"
            value={this.state.answer}
            placeholder="Answer"
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Create Answer" />
        </form>
      </div>
    );
  }
}
