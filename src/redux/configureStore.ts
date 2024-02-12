import { createStore, combineReducers, compose } from "redux";
import inputsFieldsReducer from "./inputsFieldsReducer";
import listsAddedFormReducer from "./listsAddedFormReducer";

const ReactReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const configureStore = () => {
  return createStore(
    combineReducers({
      inputsFields: inputsFieldsReducer,
      listsAddedForm: listsAddedFormReducer,
    }),
    compose(ReactReduxDevTools)
  );
};

export default configureStore;
