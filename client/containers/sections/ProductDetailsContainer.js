import { connect } from "react-redux";
import ProductDetails from "../../components/sections/ProductDetails";
import * as actions from "../../actions";

function mapStateToProps(state) {
  return {
    productData: state.ProductReducer.productData, //always be 1 data
    quantity: state.ProductReducer.quantity
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProductDetails: productId =>
      dispatch(actions.fetchProductDetails(productId)),
    addToCart: (productId, price, name, imgPath, quantity) =>
      dispatch(actions.addToCart(productId, price, name, imgPath, quantity)),
    changeQuantity: e =>
      dispatch({ type: "CHANGE_QUANTITY", value: e.target.value })
  };
}

const ProductDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);

export default ProductDetailsContainer;
