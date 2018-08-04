import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import saga from './saga';
import data from './data';
import Reducer from './reducers';

const sagaMiddleware = createSagaMiddleware()

const initialState = {
    HomeReducer: {homeData: data.teaserJson},
    CartReducer: {cartData: [], userId: ""},
    SectionReducer: {sectionData: [], cartData: []},
    ProductReducer: {productData: []}
  };
  
let store = createStore(Reducer, initialState, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

export default store;

