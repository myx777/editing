import { ADD_ITEM, CHANGE_ITEM, DELETE_ITEM, EDIT_ITEM } from "./actionsTypes";
import { ActionType } from "./types/types";

export const addItem = (name: string, price: number): ActionType => {
  return { type: ADD_ITEM, payload: { name, price } };
};

export const removeItem = (id: string): ActionType => {
  return { type: DELETE_ITEM, payload: { id } };
};

export const editItem = (id: string, name: string, price: number): ActionType => {
  return { type: EDIT_ITEM, payload: { id, name, price } };
};

export const changeItem = (name: string, value: string | number): ActionType => {
  return { type: CHANGE_ITEM, payload: { name, value } };
};
