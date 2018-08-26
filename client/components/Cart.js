import React, { Component } from "react";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(cartId) {
    this.props.deleteCartItem(cartId);
  }
  componentDidMount() {
    this.props.fetchCartData();
  }
  render() {
    let cartData = this.props.cartData;
    let subTotal = 0;
    if (cartData.length) {
      return (
        <div>
          <p className="cartHeader">CART Details</p>
          <div className="cartItems">
            {cartData.map(data => {
              let totalP = data.productDetails.price * data.quantity;
              subTotal += totalP;
              return (
                <div key={data.cartId} className="cartItem">
                  <div className="media">
                    <div className="media-left">
                      <i
                        className="fa fa-times"
                        aria-hidden="true"
                        onClick={() => this.handleClick(data.cartId)}
                      />
                      <img
                        className="cartImage"
                        src={data.productDetails.imgPath}
                        alt={data.productDetails.altText}
                      />
                    </div>
                    <div className="media-body">
                      <p>{data.productDetails.name} </p>
                      <p>Price: Rs{data.productDetails.price}</p>
                      <p>Quantity: {data.quantity}</p>
                    </div>
                  </div>
                  <div className="totalPrice">
                    <p>
                      <b>Total</b>
                    </p>
                    <br />
                    Rs{totalP}
                  </div>
                </div>
              );
            })}
            <div className="subTotal">
              Total Amount = <b>Rs.{subTotal}</b>
            </div>
          </div>
          <div className="checkout">
            <button className="btn btn-danger" onClick={this.props.clearCart}>
              Checkout
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="alert alert-info" role="alert">
          <h3>Life is short for boring clothes. Shop Now!!!</h3>
        </div>
      );
    }
  }
}
