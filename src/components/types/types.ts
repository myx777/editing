/**
 * Тип каждого элемента списка
 */
export type ItemType = {
  id?: string;
  name: string;
  price: number;
};

export type ItemTypeForInputs = {
  name: string;
  value: number | string;
};

export type ItemTypeForID = {
  id: string;
};
/**
 * тип для action
 */
export type ActionType = {
  type: string;
  payload?: ItemType | ItemTypeForInputs | ItemTypeForID;
};

export type ChangeItemType = {
  name: string;
  value: string | number;
};

export type inputsFieldsReducerType = {
  name: string;
  value: number;
};

export type listsAddedFormReducerType = ItemType[];

export type RootState = {
  inputsFields: inputsFieldsReducerType;
  listsAddedForm: listsAddedFormReducerType;
  searchItem: ItemType;
};
