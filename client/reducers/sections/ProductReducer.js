
export default function ProductReducer(
    state = { productData: []}, 
    action) {
    switch(action.type) {
        case "LOAD_PRODUCT_DATA":
            return {
                productData: action.productData[0],
                //cartData: action.cartData
            }
            break;
        default: 
            return state;
    }
}
