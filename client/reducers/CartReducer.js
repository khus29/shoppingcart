
export default function CartReducer(
    state = { cartData: [], userId:"" }, 
    action) {
    switch(action.type) {
        case "LOAD_CART_DATA":
            console.log(action.cartData);
            return {
                cartData: action.cartData
            }
            break;
        default: 
            return state;
    }
}
