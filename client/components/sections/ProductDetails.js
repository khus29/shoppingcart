import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default class ProductDetails extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        
        return (
            <div>
                productDetails*****
                <p>{this.props.productData.name}</p>
                <p>{this.props.productData.description}</p>
            </div>
        )
    }
    componentDidMount() {
        this.props.fetchProductDetails(this.props.match.params.productId);
    }
}

