import { createStore, combineReducers, compose } from "redux";
import inputsFieldsReducer from "../reducer/inputsFieldsReducer";
import listsAddedFormReducer from "../reducer/listsAddedFormReducer";
import searchItemReducer from "../reducer/searchItemReducer";

// Проверка наличия Redux DevTools Extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * Конфигурация Redux store.
 * @returns {Object} Новый экземпляр Redux store.
 */
const configureStore = () => {
  return createStore(
    combineReducers({
      inputsFields: inputsFieldsReducer,
      listsAddedForm: listsAddedFormReducer,
      searchItem: searchItemReducer,
    }),
    composeEnhancers()
  );
};

export default configureStore;
