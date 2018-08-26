import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = { inCart: false };
  }
  componentDidMount() {
    let cartData = this.props.cartData;
    if (cartData.length) {
      let prodInCart = this.props.cartData.filter(
        cart => cart.productDetails.productId === this.props.product.productId
      );
      let inCart = prodInCart.length > 0 ? true : false;
      this.setState({ inCart: inCart });
    }
  }
  renderButton() {
    if (this.state.inCart) {
      return (
        <Link
          to="/cartDetails"
          className="inCart"
          data-toggle="tooltip"
          title="Go to Cart"
        >
          <i className="fa fa-shopping-bag" aria-hidden="true"></i>
        </Link>
      );
    }
  }
  render() {
    const {
      productId,
      section,
      imgPath,
      altText,
      price,
      name
    } = this.props.product;
    return (
      <div className="product-card" key={productId}>
        <div>
          <Link
            to={{
              pathname: `/product/${productId}`,
              state: { inCart: this.state.inCart }
            }}
          >
            <img src={imgPath} alt={altText} />
          </Link>
        </div>
        <div className="prodInfo">
          <p className="prodName">{name}</p>
          <p>
            <b>Price: Rs.{price}</b>
          </p>
        </div>
        {this.renderButton()}
      </div>
    );
  }
}
