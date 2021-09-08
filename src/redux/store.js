import { createStore, combineReducers } from "redux";
import userReducer from "./user/userReducer";

const Reducer = combineReducers({
  user: userReducer
});


const Store = createStore(
  Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default Store;