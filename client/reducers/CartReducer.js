export default function CartReducer(state = { cartData: [] }, action) {
  switch (action.type) {
    case "LOAD_CART_DATA":
      return {
        cartData: action.cartData
      };
      break;
    default:
      return state;
  }
}
