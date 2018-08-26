import React from 'react';
import { take, put, call, takeEvery, all } from "redux-saga/effects";
import * as actions from "./actions";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

function* watchFetchSectionProducts() {
  yield takeEvery("FETCH_SECTION_PRODUCTS", fetchSectionData);
}
function* fetchSectionData(action) {
  const sectionData = yield call(getSectionData, action.section);
  const userId = yield call(getCookieByName, "user");
  const cartData = yield call(getCartData, userId);

  yield put(actions.loadSectionProducts(sectionData.data, cartData.data));
}
function* getSectionData(section) {
  try {
    let urlStrSection = "/products/" + section;
    const sectionData = yield call(axios.get, urlStrSection);
    return sectionData;
  } catch (error) {
    console.log("Something went wrong while fetching data " + error);
  }
}
function* filterDataAction(action) {
  let sectionDataObj = yield call(getSectionData, action.section);
  let sectionData = sectionDataObj.data;
  if (action.categoryId) {
    const filteredData = sectionData.filter(
      d => d.categoryId === Number(action.categoryId)
    );
    sectionData = filteredData;
  }
  const userId = yield call(getCookieByName, "user");
  const cartData = yield call(getCartData, userId);
  yield put(actions.loadSectionProducts(sectionData, cartData.data));
}
function* watchFilterAction() {
  yield takeEvery("HANDLE_FILTER_ACTION", filterDataAction);
}

function* watchFetchCategories() {
  yield takeEvery("FETCH_CATEGORY_TYPES", getCategoryData);
}
function* getCategoryData(action) {
  try {
    let urlStrSection = "/products/" + action.section + "/category";
    const categoryIds = yield call(axios.get, urlStrSection);

    let categories = yield call(axios.get, "/category/" + categoryIds.data);

    yield put(actions.loadFilters(categories.data));
  } catch (error) {
    console.log("Something went wrong while fetching data " + error);
  }
}
function* getCartData(userId) {
  let urlStrCart = "/cart/" + userId;
  const cartData = yield call(axios.get, urlStrCart);
  return cartData;
}
function* watchLoginAction() {
  yield takeEvery("LOGIN_ACTION", loginAction);
}
function* loginAction(action) {
  let user = yield call(axios.get, "/users/" + action.name);
  if (user.data[0] && user.data[0].password === action.password) {    
    cookies.set('user', user.data[0].userId, { path: '/' });
    yield put(actions.loginUser());
  } else {
    alert("Incorrect password!");
  }
}
function* watchCreateUserAction() {
  const action = yield take("CREATE_USER");
  yield call(createUser, action);
  debugger;
  window.location = '/login';
}
function* createUser(action) {
  try {
    let urlStr = "/users/create";

    axios.post(urlStr, action.payload);
  } catch (error) {
    console.log("Something went wrong while posting data " + error);
  }
}
function* getProductData(productId) {
  let urlStr = "/products/" + productId;
  const productData = yield call(axios.get, urlStr);
  return productData;
}
function* watchFetchProductDetails() {
  yield takeEvery("FETCH_PRODUCT_DETAILS", fetchProdDetails);
}
function* fetchProdDetails(action) {
  try {
    const productData = yield call(getProductData, action.productId);
    yield put(actions.loadProductData(productData.data));
  } catch (error) {
    console.log("Something went wrong while posting data " + error);
  }
}
function* getCookieByName(name) {
  return cookies.get(name);
}
function* watchFetchCartData() {
  try {
    yield take("FETCH_CART_DATA");
    const userId = yield call(getCookieByName, "user");
    const cartData = yield call(getCartData, userId);

    yield put(actions.loadCartData(cartData.data));
  } catch (error) {
    console.log("Something went wrong while posting data " + error);
  }
}
function* watchCheckoutAction() {
  try {
    yield take("CLEAR_CART_DATA");
    const userId = yield call(getCookieByName, "user");
    const urlStr = "/cart/" + userId;
    yield call(axios.delete, urlStr);
    alert("You Checked out successfully!");
    window.location = "/";
  } catch (error) {
    console.log("Something went wrong while posting data " + error);
  }
}
function* watchDeleteCartAction() {
  yield takeEvery("DELETE_CART_ITEM", deleteFromCart);
}
function* deleteFromCart(action) {
  try {
    const urlStr = "/cart/delete/" + action.cartId;
    yield call(axios.delete, urlStr);
    alert("Item Deleted from Cart");
    window.location = "/cartDetails";
    //yield call(actions.fetchCartData); handle this scenario
  } catch (error) {
    console.log("Something went wrong while posting data " + error);
  }
}
function* watchAddToCart() {
  yield takeEvery("ADD_TO_CART", addToCart);
}
function* addToCart(action) {
  try {
    let cartData = action.payload;
    const userId = yield call(getCookieByName, "user");
    cartData.userId = userId;
    if (userId) {
      let urlStr = "/cart/add";
      yield call(addCart, urlStr, cartData);
      alert("Product added to cart");
      window.location = "/cartDetails";
    } else {
      window.location = "/login";
    }
  } catch (error) {
    console.log("Something went wrong while posting data " + error);
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
    watchFetchProductDetails(),
    watchFetchCategories(),
    watchFilterAction(),
    watchLoginAction(),
    watchCreateUserAction(),
    watchDeleteCartAction(),
    watchCheckoutAction()
  ]);
}
