import { connect } from "react-redux";
import Cart from "../components/Cart";
import * as actions from "../actions";

function mapStateToProps(state) {
  return {
    cartData: state.CartReducer.cartData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCartData: () => dispatch(actions.fetchCartData()),
    deleteCartItem: cartId => dispatch(actions.deleteCartItem(cartId)),
    clearCart: () => dispatch(actions.clearCartData())
  };
}

const CartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

export default CartContainer;
