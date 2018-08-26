import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import Cookies from 'js-cookie';
import { createCookieMiddleware } from 'redux-cookie';

import saga from "./saga";
import data from "./data";
import Reducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const cookie = createCookieMiddleware(Cookies)

const initialState = {
  HomeReducer: { homeData: data.teaserJson },
  CartReducer: { cartData: [] },
  SectionReducer: { sectionData: [], cartData: [] },
  ProductReducer: { productData: [], quantity: 1 },
  FiltersReducer: { categoryTypes: [] },
  LoginReducer: { redirectToReferrer: false, name: "", password: "" },
  CreateUserReducer: { name: "", password: "", email: "" }
};

let store = createStore(Reducer, initialState, applyMiddleware(sagaMiddleware, cookie));
sagaMiddleware.run(saga);

export default store;
