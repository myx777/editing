/**
 * Тип каждого элемента списка
 */
export type ItemType = {
  id?: string;
  name?: string;
  price?: number;
  value?: number | string;
};
/**
 * тип для action
 */
export type ActionType = {
  type: string;
  payload?: ItemType;
};

export type ChangeItemType = {
  name: string;
  value: string | number;
};

type inputsFieldsReducerType = {
    name: string;
    price: number;
}
type listsAddedFormReducerType = ItemType[]

export type RootState = {
    inputsFields: inputsFieldsReducerType,
    listsAddedForm: listsAddedFormReducerType,
  };