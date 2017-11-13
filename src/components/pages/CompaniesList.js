import React from "react";
import CompanyCard from "./CompanyCard";

export default class CompaniesList extends React.Component {
  const;
  render() {
    const regex = new RegExp(this.props.search, "i");
    const filteredCompanies = this.props.companies.filter(company =>
      company.name.match(regex)
    );
    console.log(this.props.userId, this.props.roomId);
    return (
      <div>
        {filteredCompanies.map((company, idx) => (
          <CompanyCard
            key={idx}
            userId={this.props.userId}
            roomId={this.props.roomId}
            company={company}
          />
        ))}
      </div>
    );
  }
}
