import { ItemType, ActionType } from "../../components/types/types";
import { SEARCH_ITEM } from "../action/actionsTypes";

const initialState: ItemType[] = [];

/**
 *
 * @param state массив объектов фильтрации
 * @param action действие
 * @returns массив объектов фильтрации
 */
const searchItemReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case SEARCH_ITEM:
      return action.payload;
    default:
      return state;
  }
};

export default searchItemReducer;
