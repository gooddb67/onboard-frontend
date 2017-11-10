import React from "react";
import Search from "../Search";

export default class InterviewPage extends React.Component {
  state = {
    companies: [],
    search: "",
    addNewCompany: false
  };

  handleChange = term => {
    this.setState({
      search: term
    });
  };

  componentDidMount() {
    this.showAllCompanies();
  }

  addNewCompany = () => {
    this.setState({ addNewCompany: !this.state.addNewCompany });
  };

  showAllCompanies = () => {
    getCompanies().then(companies =>
      this.setState({
        companies
      })
    );
  };

  render() {
    console.log("InterviewPage", this.props);
    return (
      <div>
        <h1>Search Interview Questions by Company</h1>
        <Search onChange={this.handleChange} search={this.state.search} />
        <input
          type="button"
          value="Add New Company"
          onClick={this.addNewCompany}
        />
        <CompaniesList
          userId={this.props.id}
          search={this.state.search}
          companies={this.state.companies}
        />
      </div>
    );
  }
}
