import { ActionType, ItemType } from "../../components/types/types";
import {
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
  CHANGE_ITEM,
  SEARCH_ITEM,
} from "./actionsTypes";

export const addItem = (name: string, price: number): ActionType => {
  return { type: ADD_ITEM, payload: { name, price } };
};

export const removeItem = (id: string): ActionType => {
  return { type: DELETE_ITEM, payload: { id } };
};

export const editItem = (
  id: string,
  name: string,
  price: number
): ActionType => {
  return { type: EDIT_ITEM, payload: { id, name, price } };
};

export const changeItem = (
  name: string,
  value: string | number
): ActionType => {
  return { type: CHANGE_ITEM, payload: { name, value } };
};

export const searchItem = (items: ItemType[] | boolean) => {
  return { type: SEARCH_ITEM, payload: items };
};
