import React, { Component } from "react";
import ProductCard from "./ProductCard";
import FiltersContainer from "../../containers/sections/FiltersContainer";

export default class Section extends Component {
  componentDidMount() {
    let sectionPath = this.props.location.pathname;
    this.props.fetchSectionData(sectionPath.substring(1));
  }
  render() {
    let sectionPath = this.props.location.pathname;
    let section = sectionPath.substring(1);
    return (
      <div className="row">
        <div className="col-sm-2">
          <FiltersContainer section={section} />
        </div>
        <div className="col-sm-10">
          {this.props.sectionData.map(product => (
            <ProductCard
              key={product.productId}
              product={product}
              addToCart={this.props.addToCart}
              cartData={this.props.cartData}
            />
          ))}
        </div>
      </div>
    );
  }
}
