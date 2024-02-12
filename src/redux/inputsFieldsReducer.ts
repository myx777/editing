import { CHANGE_ITEM, EDIT_ITEM } from "./actionsTypes";
import { ActionType, ChangeItemType } from "./types/types";

/**
 * Интициализация глобального state для inputFields
 */

const initialState = {
  name: "",
  price: "",
};

/**
 * Редуктор для обработки действий, связанных с полями ввода.
 * @param {Object} state Текущее состояние редуктора.
 * @param {ActionType} action Действие, переданное в редуктор.
 * @type {CHANGE_ITEM} Обработка действия изменения элемента
 * @type {EDIT_ITEM} Обработка действия при редактирования элемента
 * @returns {Object} Новое состояние после обработки действия.
 */
const inputsFieldsReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case CHANGE_ITEM:
      const { name, value } = action.payload as ChangeItemType;
      return { ...state, [name]: value };

    case EDIT_ITEM:
      return action.payload!;

    default:
      return state;
  }
};

export default inputsFieldsReducer;
