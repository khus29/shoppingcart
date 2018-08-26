export default function ProductReducer(
  state = { productData: [], quantity: 1 },
  action
) {
  switch (action.type) {
    case "LOAD_PRODUCT_DATA":
      return {
        productData: action.productData[0],
        quantity: state.quantity
      };
      break;
    case "CHANGE_QUANTITY":
      return {
        quantity: action.value,
        productData: state.productData
      };
      break;
    default:
      return state;
  }
}
