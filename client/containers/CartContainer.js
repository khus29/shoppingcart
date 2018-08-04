import { connect } from 'react-redux';
import Cart from '../components/Cart';
import * as actions from '../actions';

function mapStateToProps(state) {
    return {
        cartData: state.CartReducer.cartData,
        userId: 1 //hardcoded for now
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCartData: (userId) => dispatch(actions.fetchCartData(userId))
    }
}

const CartContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);

export default CartContainer;
