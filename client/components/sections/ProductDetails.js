import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
  }
  renderButton() {
    if (this.props.location.state.inCart) {
      return (
        <Link to="/cartDetails" className="btn btn-default goCart">
          Go to Cart
        </Link>
      );
    } else {
      return (
        <button className="btn btn-primary" onClick={this.handleClick}>
          Add to Cart
        </button>
      );
    }
  }
  handleClick = () => {
    const {
      productId,
      price,
      name,
      imgPath,
      quantity
    } = this.props.productData;
    this.props.addToCart(
      productId,
      price,
      name,
      imgPath,
      Number(this.props.quantity)
    );
  };
  componentDidMount() {
    this.props.fetchProductDetails(this.props.match.params.productId);
  }
  render() {
    const {
      description,
      imgPath,
      altText,
      price,
      name
    } = this.props.productData;
    return (
      <div className="prodDetails">
        <div className="media">
          <div className="media-left">
            <img className="productDetailImage" src={imgPath} alt={altText} />
          </div>
          <div className="media-body">
            <p>{name} </p>
            <p>Price: Rs{price}</p>
            <p>
              Quantity:
              <select
                className="quantityOption"
                onChange={this.props.changeQuantity}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </p>
          </div>
        </div>
        <div className="addToCart">{this.renderButton()}</div>
        <p>
          About Product: <b>{description}</b>
        </p>
      </div>
    );
  }
}
