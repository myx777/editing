/**
 * Тип каждого элемента списка
 */
export type ItemType = {
  id?: string;
  name: string;
  price: number;
};

/**
 * тип для инпутов name и price
 */
export type ItemTypeForInputs = {
  name: string;
  value: number | string;
};

/**
 * тип передачи id для удаления
 */
export type ItemTypeForID = {
  id: string;
};

/**
 * типы для action
 */
export type ActionType = {
  type: string;
  payload?: ItemType | ItemTypeForInputs | ItemTypeForID;
};

export type ChangeItemType = {
  name: string;
  value: string | number;
};

/**
 * типы для state
 */
export type inputsFieldsReducerType = {
  name: string;
  value: number;
  price: number;
};

export type listsAddedFormReducerType = ItemType[];

export type RootState = {
  inputsFields: inputsFieldsReducerType;
  listsAddedForm: listsAddedFormReducerType;
  searchItem: ItemType | boolean;
};
