import { combineReducers } from "redux";
import HomeReducer from "./HomeReducer";
import CartReducer from "./CartReducer";
import SectionReducer from "./sections/SectionReducer";
import ProductReducer from "./sections/ProductReducer";
import FiltersReducer from "./sections/FiltersReducer";
import LoginReducer from "./LoginReducer";
import CreateUserReducer from "./CreateUserReducer";

const reducer = combineReducers({
  HomeReducer,
  SectionReducer,
  CartReducer,
  ProductReducer,
  FiltersReducer,
  LoginReducer,
  CreateUserReducer
});

export default reducer;
