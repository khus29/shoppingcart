import {take, put, call, takeEvery, all} from 'redux-saga/effects';
import * as actions from './actions';
import axios from 'axios';

function* watchFetchSectionProducts() {
    try {
        const action = yield take('FETCH_SECTION_PRODUCTS');

        let urlStrSection = '/products/'+action.section;
        const sectionData = yield call(axios.get, urlStrSection);
        const userId = 1;//remove hardcoding of userid
        const cartData = yield call(getCartData,userId);

        yield put(actions.loadSectionProducts(sectionData.data, cartData.data));
    } catch (error) {
        console.log("Something went wrong while fetching data "+error);
    }
}
function* getCartData(userId) {
    let urlStrCart = '/cart/'+userId;
    const cartData = yield call(axios.get, urlStrCart);
    return cartData;
}
function* getProductData(productId) {
    let urlStr = '/products/'+productId;
    const productData = yield call(axios.get, urlStr);
    return productData;
}
function* watchFetchProductDetails() {
    try {
        const action = yield take('FETCH_PRODUCT_DETAILS');
        const productData = yield call(getProductData, action.productId);
        yield put(actions.loadProductData(productData.data));

    } catch (error) {
        console.log("Something went wrong while posting data "+error);
    }
}
function* watchFetchCartData() {
    try {
        const action = yield take('FETCH_CART_DATA');
        const cartData = yield call(getCartData, action.userId);

        yield put(actions.loadCartData(cartData.data));

    } catch (error) {
        console.log("Something went wrong while posting data "+error);
    }
}
function* watchAddToCart() {
    yield takeEvery('ADD_TO_CART', addToCart);
} 
function* addToCart(action) {
    try {
        let cartData = action.payload;
        let urlStr = '/cart/add';
        yield call(addCart, urlStr, cartData);
        yield put(actions.addToCartUI(cartData));
    } catch (error) {
        console.log("Something went wrong while posting data "+error);
    }
}
function* addCart(urlStr, cartData) {
    axios.post(urlStr, cartData);
}

export default function* saga() {
    yield all([
        watchFetchSectionProducts(),
        watchAddToCart(),
        watchFetchCartData(),
        watchFetchProductDetails()
    ])
}
