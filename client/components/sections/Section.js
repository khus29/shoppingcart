import React, { Component } from 'react';
import ProductCard from './ProductCard';

export default class Section extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-2">
                    ***Filters***
                </div>
                <div className="col-sm-10">
                    {this.props.sectionData.map(product => (
                            <ProductCard key={product.productId} 
                                    product={product} 
                                    addToCart={this.props.addToCart} 
                                    cartData={this.props.cartData}/>
                        )
                    )}
                </div>
               
            </div>
        )
    }
    componentDidMount() {
        let sectionPath = this.props.location.pathname;
        this.props.fetchSectionData(sectionPath.substring(1));
    }
}
