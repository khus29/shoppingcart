import { connect } from 'react-redux';
import ProductDetails from '../../components/sections/ProductDetails';
import * as actions from '../../actions';

function mapStateToProps(state) {
    return {
        productData: state.ProductReducer.productData //always be 1 data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchProductDetails: (productId) => dispatch(actions.fetchProductDetails(productId))
    }
}

const ProductDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductDetails);

export default ProductDetailsContainer;
