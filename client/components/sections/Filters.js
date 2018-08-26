import React, { Component } from "react";

export default class Filters extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchCategoryTypes(this.props.section);
  }
  render() {
    return (
      <div className="filterBlock">
        <div className="filterHeader">
          <b>Filters</b>
          <a href="javascript:void(0)" onClick={this.props.handleFilterAction}>
            View All
          </a>
        </div>
        <div className="filters">
          {this.props.categoryTypes.map(category => (
            <div key={category.categoryId}>
              <input
                type="radio"
                value={category.categoryId}
                onChange={this.props.handleFilterAction}
                name="filter"
              />
              {category.categoryName}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
