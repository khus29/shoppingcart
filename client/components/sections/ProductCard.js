import React, { Component } from 'react'
import { HashRouter as Router, Link } from 'react-router-dom';

export default class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = { inCart: false }
    }
    renderButton() {
        if(this.state.inCart) {
          return (
            <Router>
                <Link to='/cartDetails' className="btn btn-default">
                    Go to Cart
                </Link>
            </Router>
          );
        } else {
          return (
            <button className="btn btn-primary" onClick={this.handleClick}>
                Add to Cart
            </button>
          );
        }
    }
    render() {
        const {productId,section,imgPath,altText,price,name} = this.props.product;
        return (
            <div className="product-card" key={productId}>
                <div>
                    <Router>
                        <Link to={{pathname:`/product/${productId}`, state: { inCart: this.state.inCart}}} >
                            <img src={imgPath} alt={altText} />
                        </Link>
                    </Router>
                </div>
                <p>{name}</p>
                <p>Price: Rs.{price}</p>
                {this.renderButton()}
            </div>
        )
    }
    handleClick = () => {
        this.setState({inCart: true});
        const {productId,price,name,imgPath} = this.props.product;
        this.props.addToCart(productId,price,name,imgPath,1); //from here quantity will be always 1
    }
    componentDidMount() {
        let prodInCart = this.props.cartData.filter(cart => cart.productDetails.productId === this.props.product.productId);
        let inCart = prodInCart.length > 0 ? true: false;
        this.setState({inCart: inCart});
    }
}

