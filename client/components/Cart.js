import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        return (
            <div>
                *****CART****
                {this.props.cartData.map(data => (
                    <div key={data.cartId}>
                        {data.productDetails.name}  {data.productDetails.price} {data.quantity}
                    </div>
                ))}
            </div>
        )
    }
    componentDidMount() {
        this.props.fetchCartData(this.props.userId);
    }
}

