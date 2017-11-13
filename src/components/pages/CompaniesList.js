import React from "react";
import CompanyCard from "./CompanyCard";

export default class CompaniesList extends React.Component {
  const;
  render() {
    const regex = new RegExp(this.props.search, "i");
    const filteredCompanies = this.props.companies.filter(company =>
      company.name.match(regex)
    );
    return (
      <div>
        {filteredCompanies.map(company => <CompanyCard company={company} />)}
      </div>
    );
  }
}
