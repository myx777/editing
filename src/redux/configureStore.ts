import { combineReducers, createStore } from "redux";
import numberReducer from "./numberRedux";
import stringReducer from "./stringRedux";

const ReactReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const configureStore = () => {
  return createStore(
    combineReducers({
      number: numberReducer,
      string: stringReducer,
    }),
    ReactReduxDevTools
  );
};

export default configureStore;
