import {combineReducers} from 'redux';
import HomeReducer from './HomeReducer';
import CartReducer from './CartReducer';
import SectionReducer from './sections/SectionReducer';
import ProductReducer from './sections/ProductReducer';


const reducer = combineReducers({
    HomeReducer,
    SectionReducer,
    CartReducer,
    ProductReducer
  });
  
  export default reducer;